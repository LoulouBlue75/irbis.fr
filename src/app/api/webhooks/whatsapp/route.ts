import { NextResponse } from 'next/server';
import { inngest } from '@/lib/inngest';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries());
    
    // TODO: Verify Twilio signature
    
    const mediaUrls = [];
    let i = 0;
    while (payload[`MediaUrl${i}`]) {
      mediaUrls.push({
        url: payload[`MediaUrl${i}`] as string,
        type: payload[`MediaContentType${i}`] as string
      });
      i++;
    }
    
    const uploadedMedia = [];
    if (mediaUrls.length > 0) {
       const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      
      for (const media of mediaUrls) {
        // Fetch media
        const res = await fetch(media.url);
        const buffer = await res.arrayBuffer();
        const filename = media.url.split('/').pop();
        const path = `whatsapp-media/${Date.now()}-${filename}`;
        
        const { error } = await supabase.storage
          .from('cvs')
          .upload(path, buffer, {
            contentType: media.type,
          });
          
        if (!error) {
          uploadedMedia.push({
            path,
            type: media.type,
            url: media.url
          });
        } else {
            console.error('Upload error:', error);
        }
      }
    }

    await inngest.send({
      name: 'ingestion/whatsapp.received',
      data: {
        ...payload,
        media: uploadedMedia
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
