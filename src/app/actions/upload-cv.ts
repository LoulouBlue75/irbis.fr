'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { inngest } from '@/lib/inngest';

// P5 BR-007: Taille max CV 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

export async function uploadCV(formData: FormData) {
  const supabase = await createClient();

  // 1. Authenticate
  // const { data: { user }, error: authError } = await supabase.auth.getUser();
  // if (authError || !user) {
  //   return { error: 'Unauthorized' };
  // }
  const user = { id: 'test-user-id' }; // Mock user

  const file = formData.get('file') as File;
  if (!file) {
    return { error: 'No file provided' };
  }

  // P5 BR-007/BL-001: Validate file size (10MB max)
  if (file.size > MAX_FILE_SIZE) {
    return { error: 'Fichier trop volumineux. Taille maximum: 10MB' };
  }

  // P5 BR-008/BL-002: Validate PDF format
  if (file.type !== 'application/pdf') {
    return { error: 'Seuls les fichiers PDF sont acceptes' };
  }

  // TODO: Get actual project ID. For now, we'll fetch the first one or create a default.
  // In a real app, this would come from the route params or context.
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  let projectId = projects?.[0]?.id;

  if (!projectId) {
     // Create a default project if none exists (for dev purposes)
     const { data: newProject, error: createError } = await supabase
        .from('projects')
        .insert({ name: 'Tailor Shift', code: 'TS' })
        .select()
        .single();
     
     if (createError) {
         console.error('Error creating default project:', createError);
         return { error: 'Failed to determine project context' };
     }
     projectId = newProject.id;
  }

  // 2. Upload to Supabase Storage
  const fileExt = file.name.split('.').pop();
  const fileName = `${projectId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  
  const { error: uploadError } = await supabase.storage
    .from('cvs')
    .upload(fileName, file);

  if (uploadError) {
    console.error('Upload error:', uploadError);
    return { error: 'Failed to upload file' };
  }

  // 3. Insert into context_sources
  const { data: source, error: dbError } = await supabase
    .from('context_sources')
    .insert({
      project_id: projectId,
      type: 'pdf', // Assuming PDF for CVs usually
      name: file.name,
      storage_path: fileName,
      status: 'pending',
      raw_metadata: {
        size: file.size,
        type: file.type,
        uploaded_by: user.id
      }
    })
    .select()
    .single();

  if (dbError) {
    console.error('Database error:', dbError);
    return { error: 'Failed to save file metadata' };
  }

  // 4. Trigger Inngest event
  await inngest.send({
    name: 'document/uploaded',
    data: {
      projectId,
      sourceId: source.id,
      storagePath: fileName,
      userId: user.id
    }
  });

  revalidatePath('/tailor-shift');
  return { success: true };
}
