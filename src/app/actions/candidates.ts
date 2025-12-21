'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { inngest } from '@/lib/inngest';

export interface CandidateInput {
  name: string;
  email: string;
  skills: string[];
  experience_years: number;
  education: string;
  notes?: string;
}

export async function createCandidate(data: CandidateInput) {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  const projectId = projects?.[0]?.id;

  if (!projectId) {
    return { error: 'No project found' };
  }

  // 1. Create candidate
  const { data: candidate, error } = await supabase
    .from('candidates')
    .insert({
      project_id: projectId,
      name: data.name,
      email: data.email,
      skills: data.skills,
      // Store experience/education as structured JSON or simple text for now
      // The schema has jsonb for experience/education.
      // We'll store a simple object for now.
      experience: [{ title: 'Manual Entry', years: data.experience_years }],
      education: [{ degree: data.education }],
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating candidate:', error);
    return { error: 'Failed to create candidate' };
  }

  // 2. Trigger embedding generation
  // We can trigger the Inngest function manually or rely on a DB trigger if one exists.
  // The plan says "Create Inngest function generate-candidate-embedding (triggered on candidate.created)".
  // If that function is set up to listen to Supabase events (via webhook or similar), it might run automatically.
  // However, Inngest usually requires an explicit event trigger from code unless using Supabase Webhooks -> Inngest.
  // Let's assume we need to send an event.
  
  await inngest.send({
    name: 'candidate/created',
    data: {
      candidateId: candidate.id,
      projectId: projectId,
    },
  });

  revalidatePath('/dashboard/candidates');
  return { success: true, candidate };
}

export async function getCandidates({
  page = 1,
  limit = 10,
  search = '',
}: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  const projectId = projects?.[0]?.id;

  if (!projectId) {
    return { candidates: [], total: 0 };
  }

  let query = supabase
    .from('candidates')
    .select('*', { count: 'exact' })
    .eq('project_id', projectId)
    .order('created_at', { ascending: false });

  if (search) {
    query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await query.range(from, to);

  if (error) {
    console.error('Error fetching candidates:', error);
    throw new Error('Failed to fetch candidates');
  }

  return {
    candidates: data,
    total: count || 0,
  };
}

export async function getCandidate(id: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('candidates')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching candidate:', error);
    return null;
  }

  return data;
}

export async function updateCandidate(id: string, data: any) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('candidates')
    .update(data)
    .eq('id', id);

  if (error) {
    console.error('Error updating candidate:', error);
    throw new Error('Failed to update candidate');
  }

  revalidatePath(`/dashboard/candidates/${id}`);
  revalidatePath('/dashboard/candidates');
}

export async function getMatchesForCandidate(candidateId: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('matches')
    .select(`
      id,
      score,
      status,
      notes,
      job:jobs (
        id,
        title,
        status
      ),
      candidate:candidates (
        id,
        name,
        email,
        skills
      )
    `)
    .eq('candidate_id', candidateId)
    .order('score', { ascending: false });

  if (error) {
    console.error('Error fetching matches for candidate:', error);
    return [];
  }

  // Transform data to match MatchList component expectation
  // MatchList expects:
  // interface Match {
  //   id: string;
  //   candidate: { ... };
  //   score: number;
  //   status: string;
  //   notes: string | null;
  // }
  // But here we are showing matches for a candidate, so we probably want to show the JOB info, not the candidate info again.
  // However, MatchList component seems designed to show candidates for a job (based on its props).
  // Let's check MatchList again.
  // It displays `match.candidate.name`.
  // If we reuse it here, it will display the candidate name (which is the same for all items).
  // We probably want a different component or adapt MatchList to show Job info.
  // For now, I'll return the data as is and handle it in the page or create a new component.
  
  return data;
}

export async function deleteCandidate(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('candidates')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting candidate:', error);
    throw new Error('Failed to delete candidate');
  }

  revalidatePath('/dashboard/candidates');
}
