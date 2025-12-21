import { createClient } from '@/lib/supabase/server';
import { inngest } from '@/lib/inngest';
import { z } from 'zod';

const linkedInProfileSchema = z.object({
  name: z.string(),
  email: z.string().email().optional().nullable(),
  headline: z.string().optional(),
  summary: z.string().optional(),
  skills: z.array(z.string()).optional(),
  experience: z.array(z.any()).optional(),
  education: z.array(z.any()).optional(),
  linkedin_url: z.string().url(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = linkedInProfileSchema.safeParse(body);

    if (!validation.success) {
      return new Response(JSON.stringify({ error: 'Invalid profile data', details: validation.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const profile = validation.data;
    const supabase = await createClient();

    // Get default project
    const { data: projects } = await supabase.from('projects').select('id').limit(1);
    const projectId = projects?.[0]?.id;

    if (!projectId) {
      return new Response(JSON.stringify({ error: 'No project found' }), { status: 500 });
    }

    // Create Context Source for the LinkedIn Profile
    const { data: source, error: sourceError } = await supabase
      .from('context_sources')
      .insert({
        project_id: projectId,
        type: 'api', // or 'linkedin' if we add it to enum
        name: `LinkedIn: ${profile.name}`,
        content: JSON.stringify(profile),
        raw_metadata: {
          source: 'linkedin_extension',
          url: profile.linkedin_url,
        },
        status: 'processed',
      })
      .select()
      .single();

    if (sourceError) {
      console.error('Source creation failed:', sourceError);
      return new Response(JSON.stringify({ error: 'Failed to save source' }), { status: 500 });
    }

    // Upsert Candidate
    // We try to match by LinkedIn URL first (if we stored it) or Email
    // For now, let's assume we match by email if present, otherwise create new.
    // Ideally we should add a `linkedin_url` column to candidates or check metadata.
    
    let candidateId: string | null = null;

    if (profile.email) {
      const { data: existing } = await supabase
        .from('candidates')
        .select('id')
        .eq('email', profile.email)
        .single();
      candidateId = existing?.id || null;
    }

    if (candidateId) {
      // Update existing
      await supabase
        .from('candidates')
        .update({
          name: profile.name,
          skills: profile.skills || [],
          experience: profile.experience || [],
          education: profile.education || [],
          // We could merge data, but overwriting for now
        })
        .eq('id', candidateId);
    } else {
      // Create new
      const { data: newCandidate, error: createError } = await supabase
        .from('candidates')
        .insert({
          project_id: projectId,
          source_id: source.id,
          name: profile.name,
          email: profile.email || `linkedin-${Date.now()}@placeholder.com`, // Placeholder if no email
          skills: profile.skills || [],
          experience: profile.experience || [],
          education: profile.education || [],
        })
        .select()
        .single();

      if (createError) {
        console.error('Candidate creation failed:', createError);
        return new Response(JSON.stringify({ error: 'Failed to create candidate' }), { status: 500 });
      }
      candidateId = newCandidate.id;
    }

    // Trigger Embedding Generation
    await inngest.send({
      name: 'candidate/created', // Reusing this event for updates too for simplicity
      data: {
        candidateId: candidateId,
        projectId: projectId,
      },
    });

    return new Response(JSON.stringify({ success: true, candidateId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('LinkedIn import error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
