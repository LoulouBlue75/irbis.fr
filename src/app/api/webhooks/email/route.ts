import { NextResponse } from 'next/server';
import { inngest } from '@/lib/inngest';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    
    // TODO: Verify Resend signature
    
    // Upload attachments if any
    const attachments = payload.attachments || [];
    const uploadedAttachments = [];
    
    if (attachments.length > 0) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      
      for (const att of attachments) {
        // Resend sends content as an array of integers (buffer)
        const buffer = Buffer.from(att.content);
        const path = `email-attachments/${Date.now()}-${att.filename}`;
        
        const { error } = await supabase.storage
          .from('cvs') // Using 'cvs' bucket as per spec
          .upload(path, buffer, {
            contentType: att.content_type,
          });
          
        if (!error) {
          uploadedAttachments.push({
            path,
            type: att.content_type,
            filename: att.filename
          });
        } else {
            console.error('Upload error:', error);
        }
      }
    }

    await inngest.send({
      name: 'ingestion/email.received',
      data: {
        ...payload,
        attachments: uploadedAttachments, // Replace raw attachments with paths
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
