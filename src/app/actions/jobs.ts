'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { inngest } from '@/lib/inngest';

export type JobInput = {
  title: string;
  description: string;
  requirements: string[];
  status: 'open' | 'closed' | 'draft';
};

async function getProjectId(supabase: any) {
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  if (projects && projects.length > 0) {
    return projects[0].id;
  }
  // Create default if not exists
  const { data: newProject } = await supabase
    .from('projects')
    .insert({ name: 'Taylor Shift', code: 'TS' })
    .select()
    .single();
  return newProject?.id;
}

export async function createJob(data: JobInput) {
  const supabase = await createClient();
  
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: 'Unauthorized' };
  }

  const projectId = await getProjectId(supabase);
  if (!projectId) {
    return { error: 'Project context not found' };
  }

  const { data: job, error } = await supabase
    .from('jobs')
    .insert({
      project_id: projectId,
      title: data.title,
      description: data.description,
      requirements: data.requirements,
      status: data.status,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating job:', error);
    return { error: 'Failed to create job' };
  }

  // Trigger matching process
  await inngest.send({
    name: 'jobs/created',
    data: {
      jobId: job.id,
      projectId,
    },
  });

  revalidatePath('/dashboard/jobs');
  return { success: true, job };
}

export async function updateJob(id: string, data: JobInput) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('jobs')
    .update({
      title: data.title,
      description: data.description,
      requirements: data.requirements,
      status: data.status,
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating job:', error);
    return { error: 'Failed to update job' };
  }

  revalidatePath('/dashboard/jobs');
  revalidatePath(`/dashboard/jobs/${id}`);
  return { success: true };
}

export async function deleteJob(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('jobs')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting job:', error);
    return { error: 'Failed to delete job' };
  }

  revalidatePath('/dashboard/jobs');
  return { success: true };
}

export async function updateMatchStatus(matchId: string, status: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('matches')
    .update({ status })
    .eq('id', matchId);

  if (error) {
    console.error('Error updating match status:', error);
    return { error: 'Failed to update match status' };
  }

  // We don't know the job ID here easily without fetching, but we can revalidate the specific match or the job page if we knew the job ID.
  // For now, we might rely on client-side update or revalidate a broader path if needed.
  // Ideally we should pass jobId to this action to revalidate the correct page.
  return { success: true };
}

export async function triggerMatching(jobId: string) {
  const supabase = await createClient();
  
  const { data: job, error } = await supabase
    .from('jobs')
    .select('project_id')
    .eq('id', jobId)
    .single();

  if (error || !job) {
    console.error('Error fetching job:', error);
    return { error: 'Job not found' };
  }

  await inngest.send({
    name: 'recruitment/match.requested',
    data: {
      jobId,
      projectId: job.project_id,
    },
  });

  return { success: true };
}
