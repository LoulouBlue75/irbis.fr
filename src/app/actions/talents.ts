'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { inngest } from '@/lib/inngest';

export interface TalentInput {
  name: string;
  email: string;
  skills: string[];
  experience_years: number;
  education: string;
  notes?: string;
}

export async function createTalent(data: TalentInput) {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  const projectId = projects?.[0]?.id;

  if (!projectId) {
    return { error: 'No project found' };
  }

  // 1. Create talent
  const { data: talent, error } = await supabase
    .from('talents')
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
    console.error('Error creating talent:', error);
    return { error: 'Failed to create talent' };
  }

  // 2. Trigger embedding generation
  // We can trigger the Inngest function manually or rely on a DB trigger if one exists.
  // The plan says "Create Inngest function generate-talent-embedding (triggered on talent.created)".
  // If that function is set up to listen to Supabase events (via webhook or similar), it might run automatically.
  // However, Inngest usually requires an explicit event trigger from code unless using Supabase Webhooks -> Inngest.
  // Let's assume we need to send an event.
  
  await inngest.send({
    name: 'talent/created',
    data: {
      talentId: talent.id,
      projectId: projectId,
    },
  });

  revalidatePath('/dashboard/talents');
  return { success: true, talent };
}

export async function getTalents({
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
    return { talents: [], total: 0 };
  }

  let query = supabase
    .from('talents')
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
    console.error('Error fetching talents:', error);
    throw new Error('Failed to fetch talents');
  }

  return {
    talents: data,
    total: count || 0,
  };
}

export async function getTalent(id: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('talents')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching talent:', error);
    return null;
  }

  return data;
}

export async function updateTalent(id: string, data: any) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('talents')
    .update(data)
    .eq('id', id);

  if (error) {
    console.error('Error updating talent:', error);
    throw new Error('Failed to update talent');
  }

  revalidatePath(`/dashboard/talents/${id}`);
  revalidatePath('/dashboard/talents');
}

export async function getAlignmentsForTalent(talentId: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('alignments')
    .select(`
      id,
      score,
      status,
      notes,
      mandate:mandates (
        id,
        title,
        status
      ),
      talent:talents (
        id,
        name,
        email,
        skills
      )
    `)
    .eq('talent_id', talentId)
    .order('score', { ascending: false });

  if (error) {
    console.error('Error fetching alignments for talent:', error);
    return [];
  }

  // Transform data to match AlignmentList component expectation
  // Assuming we have or will create AlignmentList similar to MatchList but for talents
  
  return data;
}

export async function deleteTalent(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('talents')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting talent:', error);
    throw new Error('Failed to delete talent');
  }

  revalidatePath('/dashboard/talents');
}