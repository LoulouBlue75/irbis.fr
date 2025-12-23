import { inngest } from '@/lib/inngest';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { google } from '@ai-sdk/google';
import { embed, generateText } from 'ai';

// Lazy initialization for Supabase client - only create when needed (at runtime)
function getSupabaseClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables');
  }
  
  return createClient(supabaseUrl, supabaseServiceKey);
}

export const generateTalentEmbedding = inngest.createFunction(
  { id: 'generate-talent-embedding' },
  { event: 'talent/created' },
  async ({ event, step }) => {
    const { talentId } = event.data;

    // 1. Fetch Talent Data
    const talent = await step.run('fetch-talent', async () => {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('talents')
        .select('*')
        .eq('id', talentId)
        .single();

      if (error) throw new Error(`Failed to fetch talent: ${error.message}`);
      return data;
    });

    // 2. Generate Embedding
    const embedding = await step.run('generate-embedding', async () => {
      // Create a text representation of the talent profile
      const textToEmbed = `
        Name: ${talent.name}
        Skills: ${talent.skills?.join(', ') || ''}
        Experience: ${JSON.stringify(talent.experience || [])}
        Education: ${JSON.stringify(talent.education || [])}
      `.trim();

      const { embedding } = await embed({
        model: google.textEmbeddingModel('text-embedding-004'),
        value: textToEmbed,
      });

      return embedding;
    });

    // 3. Update Talent with Embedding
    await step.run('update-talent', async () => {
      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from('talents')
        .update({ embedding })
        .eq('id', talentId);

      if (error) throw new Error(`Failed to update talent embedding: ${error.message}`);
    });

    return { success: true, talentId };
  }
);

export const generateAlignments = inngest.createFunction(
  { id: 'generate-alignments' },
  [
    { event: 'recruitment/alignment.requested' },
    { event: 'mandates/created' }
  ],
  async ({ event, step }) => {
    const { mandateId, projectId } = event.data;

    // 1. Fetch Mandate Data
    const mandate = await step.run('fetch-mandate', async () => {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('mandates')
        .select('*')
        .eq('id', mandateId)
        .single();

      if (error) throw new Error(`Failed to fetch mandate: ${error.message}`);
      return data;
    });

    // 2. Generate Mandate Embedding (if not exists)
    let mandateEmbedding = mandate.embedding;
    if (!mandateEmbedding) {
      mandateEmbedding = await step.run('generate-mandate-embedding', async () => {
        const textToEmbed = `
          Title: ${mandate.title}
          Description: ${mandate.description}
          Requirements: ${mandate.requirements?.join(', ') || ''}
        `.trim();

        const { embedding } = await embed({
          model: google.textEmbeddingModel('text-embedding-004'),
          value: textToEmbed,
        });

        // Update mandate with embedding
        const supabase = getSupabaseClient();
        await supabase
          .from('mandates')
          .update({ embedding })
          .eq('id', mandateId);

        return embedding;
      });
    }

    // 3. Vector Retrieval (The "Net")
    const topTalents = await step.run('vector-retrieval', async () => {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.rpc('match_talents', {
        query_embedding: mandateEmbedding,
        match_threshold: 0.5, // Adjust threshold as needed
        match_count: 20,
        p_project_id: projectId || mandate.project_id,
      });

      if (error) throw new Error(`Vector search failed: ${error.message}`);
      return data;
    });

    if (!topTalents || topTalents.length === 0) {
      return { message: 'No talents found aligning with criteria.' };
    }

    // 4. LLM Scoring (The "Filter") - Parallel Map
    const scoredAlignments = await step.run('llm-scoring', async () => {
      // We'll process in batches or parallel
      const results = await Promise.all(topTalents.map(async (talent: any) => {
        const prompt = `
          You are an expert recruiter. Evaluate the fit between the following mandate and talent.
          
          MANDATE:
          Title: ${mandate.title}
          Description: ${mandate.description}
          Requirements: ${mandate.requirements?.join(', ') || ''}
          
          TALENT:
          Name: ${talent.name}
          Skills: ${talent.skills?.join(', ') || ''}
          
          Task:
          1. Score the alignment from 0 to 100.
          2. Provide a brief reasoning (max 2 sentences).
          
          Output JSON format: { "score": number, "reasoning": "string" }
        `;

        try {
          const { text } = await generateText({
            model: google('gemini-1.5-flash'), // Cost-effective model
            prompt: prompt,
          });

          // Parse JSON from text (handling potential markdown code blocks)
          const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
          const result = JSON.parse(cleanText);
          
          return {
            talent_id: talent.id,
            mandate_id: mandateId,
            score: result.score,
            reasoning: result.reasoning,
            vector_score: talent.similarity
          };
        } catch (e) {
          console.error(`Failed to score talent ${talent.id}`, e);
          return null;
        }
      }));

      return results.filter(r => r !== null);
    });

    // 5. Persist Alignments
    await step.run('persist-alignments', async () => {
      if (scoredAlignments.length === 0) return;

      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from('alignments')
        .upsert(scoredAlignments, { onConflict: 'mandate_id, talent_id' });

      if (error) throw new Error(`Failed to persist alignments: ${error.message}`);
    });

    return { success: true, alignmentsGenerated: scoredAlignments.length };
  }
);
