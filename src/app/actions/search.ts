'use server';

import { createClient } from '@/lib/supabase/server';
import { embed } from 'ai';
import { google } from '@ai-sdk/google';

export async function searchCandidates(query: string, limit: number = 10) {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('id').limit(1);
  const projectId = projects?.[0]?.id;

  if (!projectId) {
    return { candidates: [] };
  }

  if (!query.trim()) {
    return { candidates: [] };
  }

  try {
    // Generate embedding for the search query
    const { embedding } = await embed({
      model: google.textEmbeddingModel('text-embedding-004'),
      value: query,
    });

    // Perform vector similarity search
    const { data, error } = await supabase.rpc('match_candidates', {
      query_embedding: embedding,
      match_threshold: 0.5, // Adjust threshold as needed
      match_count: limit,
      p_project_id: projectId,
    });

    if (error) {
      console.error('Error searching candidates:', error);
      throw new Error('Failed to search candidates');
    }

    return { candidates: data || [] };
  } catch (error) {
    console.error('Search failed:', error);
    return { candidates: [] };
  }
}
