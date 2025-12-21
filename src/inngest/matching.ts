import { inngest } from '@/lib/inngest';
import { createClient } from '@supabase/supabase-js';
import { google } from '@ai-sdk/google';
import { embed, generateText } from 'ai';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Check for API keys
if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  console.warn('GOOGLE_GENERATIVE_AI_API_KEY is not set. Embedding generation will fail.');
}

export const generateCandidateEmbedding = inngest.createFunction(
  { id: 'generate-candidate-embedding' },
  { event: 'candidate/created' },
  async ({ event, step }) => {
    const { candidateId } = event.data;

    // 1. Fetch Candidate Data
    const candidate = await step.run('fetch-candidate', async () => {
      const { data, error } = await supabase
        .from('candidates')
        .select('*')
        .eq('id', candidateId)
        .single();

      if (error) throw new Error(`Failed to fetch candidate: ${error.message}`);
      return data;
    });

    // 2. Generate Embedding
    const embedding = await step.run('generate-embedding', async () => {
      // Create a text representation of the candidate profile
      const textToEmbed = `
        Name: ${candidate.name}
        Skills: ${candidate.skills?.join(', ') || ''}
        Experience: ${JSON.stringify(candidate.experience || [])}
        Education: ${JSON.stringify(candidate.education || [])}
      `.trim();

      const { embedding } = await embed({
        model: google.textEmbeddingModel('text-embedding-004'),
        value: textToEmbed,
      });

      return embedding;
    });

    // 3. Update Candidate with Embedding
    await step.run('update-candidate', async () => {
      const { error } = await supabase
        .from('candidates')
        .update({ embedding })
        .eq('id', candidateId);

      if (error) throw new Error(`Failed to update candidate embedding: ${error.message}`);
    });

    return { success: true, candidateId };
  }
);

export const generateMatches = inngest.createFunction(
  { id: 'generate-matches' },
  [
    { event: 'recruitment/match.requested' },
    { event: 'jobs/created' }
  ],
  async ({ event, step }) => {
    const { jobId, projectId } = event.data;

    // 1. Fetch Job Data
    const job = await step.run('fetch-job', async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();

      if (error) throw new Error(`Failed to fetch job: ${error.message}`);
      return data;
    });

    // 2. Generate Job Embedding (if not exists)
    let jobEmbedding = job.embedding;
    if (!jobEmbedding) {
      jobEmbedding = await step.run('generate-job-embedding', async () => {
        const textToEmbed = `
          Title: ${job.title}
          Description: ${job.description}
          Requirements: ${job.requirements?.join(', ') || ''}
        `.trim();

        const { embedding } = await embed({
          model: google.textEmbeddingModel('text-embedding-004'),
          value: textToEmbed,
        });

        // Update job with embedding
        await supabase
          .from('jobs')
          .update({ embedding })
          .eq('id', jobId);

        return embedding;
      });
    }

    // 3. Vector Retrieval (The "Net")
    const topCandidates = await step.run('vector-retrieval', async () => {
      const { data, error } = await supabase.rpc('match_candidates', {
        query_embedding: jobEmbedding,
        match_threshold: 0.5, // Adjust threshold as needed
        match_count: 20,
        p_project_id: projectId || job.project_id,
      });

      if (error) throw new Error(`Vector search failed: ${error.message}`);
      return data;
    });

    if (!topCandidates || topCandidates.length === 0) {
      return { message: 'No candidates found matching criteria.' };
    }

    // 4. LLM Scoring (The "Filter") - Parallel Map
    const scoredMatches = await step.run('llm-scoring', async () => {
      // We'll process in batches or parallel
      const results = await Promise.all(topCandidates.map(async (candidate: any) => {
        const prompt = `
          You are an expert recruiter. Evaluate the fit between the following job and candidate.
          
          JOB:
          Title: ${job.title}
          Description: ${job.description}
          Requirements: ${job.requirements?.join(', ') || ''}
          
          CANDIDATE:
          Name: ${candidate.name}
          Skills: ${candidate.skills?.join(', ') || ''}
          
          Task:
          1. Score the match from 0 to 100.
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
            candidate_id: candidate.id,
            job_id: jobId,
            score: result.score,
            reasoning: result.reasoning,
            vector_score: candidate.similarity
          };
        } catch (e) {
          console.error(`Failed to score candidate ${candidate.id}`, e);
          return null;
        }
      }));

      return results.filter(r => r !== null);
    });

    // 5. Persist Matches
    await step.run('persist-matches', async () => {
      if (scoredMatches.length === 0) return;

      const { error } = await supabase
        .from('matches')
        .upsert(scoredMatches, { onConflict: 'job_id, candidate_id' });

      if (error) throw new Error(`Failed to persist matches: ${error.message}`);
    });

    return { success: true, matchesGenerated: scoredMatches.length };
  }
);
