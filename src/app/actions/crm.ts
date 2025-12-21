'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export interface ActivityInput {
  candidate_id: string;
  type: 'note' | 'call' | 'email' | 'meeting' | 'status_change';
  content: string;
}

export async function createActivity(data: ActivityInput) {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  const projectId = projects?.[0]?.id;

  if (!projectId) {
    return { error: 'No project found' };
  }

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const { error } = await supabase
    .from('activities')
    .insert({
      project_id: projectId,
      candidate_id: data.candidate_id,
      type: data.type,
      content: data.content,
      created_by: user.id,
    });

  if (error) {
    console.error('Error creating activity:', error);
    return { error: 'Failed to create activity' };
  }

  revalidatePath(`/dashboard/candidates/${data.candidate_id}`);
  return { success: true };
}

export async function getActivities(candidateId: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .eq('candidate_id', candidateId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching activities:', error);
    return [];
  }

  return data;
}
