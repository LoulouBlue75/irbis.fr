import { inngest } from '@/lib/inngest';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { google } from '@ai-sdk/google';
import { generateObject, embed } from 'ai';

// Dynamic import for pdf-parse to avoid ESM bundler issues
async function parsePdf(buffer: Buffer): Promise<{ text: string }> {
  const pdfModule: any = await import('pdf-parse');
  const pdfParse = pdfModule.default ?? pdfModule;
  return pdfParse(buffer);
}

// 1. Define supported source types
type SourceType = 
  | 'pdf'           // Documents PDF (specs, contracts, reports)
  | 'spreadsheet'   // Excel/CSV (plannings, budgets, lists)
  | 'api'           // External APIs (Jira, GitHub, Notion, CRM)
  | 'database'      // DB Queries (Supabase, Postgres)
  | 'file'          // Local files (Markdown, JSON, YAML)
  | 'pillar'        // Matrice Documents P1-P6
  | 'screen_contract' // Screen contracts YAML
  | 'knowledge';    // Knowledge base (LEARNINGS, PATTERNS)

interface ContextSource {
  type: SourceType;
  id: string;
  fallback?: ContextSource; // Backup source
}

// Mock helper functions
async function fetchSource(source: ContextSource): Promise<unknown> {
  // TODO: Implement actual fetching logic based on source type
  return { content: `Mock content for ${source.id}` };
}

async function fetchWithFallback(source: ContextSource): Promise<unknown> {
  try {
    return await fetchSource(source);
  } catch (error: any) {
    console.warn(`Source ${source.id} failed: ${error.message}`);
    if (source.fallback) {
      return await fetchSource(source.fallback);
    }
    return { error: error.message, partial: true };
  }
}

async function injectMatricePillar(phase: string): Promise<string> {
  // TODO: Implement reading from pillars directory
  return `Content for pillar ${phase}`;
}

async function rankByRelevance(sources: any[], query: string, options: any) {
  return sources; // Mock ranking
}

function compressContext(chunks: any[], options: any) {
  return chunks; // Mock compression
}

function generateSummary(compressed: any[]) {
  return "Mock summary";
}

function extractDomain(compressed: any[]) {
  return "Mock domain";
}

function countTokens(compressed: any[]) {
  return 100;
}

function detectTaskType(summary: string) {
  return 'default';
}

function selectModel(context: any): string {
  const taskType = detectTaskType(context.summary);
  
  const modelMap: Record<string, string> = {
    'code': 'gpt-4-turbo',
    'analysis': 'claude-3-opus',
    'summary': 'gpt-3.5-turbo',
    'extraction': 'gpt-4-turbo',
    'default': 'gpt-4-turbo',
  };
  
  return modelMap[taskType] || modelMap['default'];
}

function buildSystemPrompt(options: any) {
  return "Mock system prompt";
}

interface AIResponse {
  result: string;
  containsInsight: boolean;
  insight?: string;
}

async function queryAI(options: any): Promise<AIResponse> {
  return { result: "Mock AI response", containsInsight: false };
}

async function appendToKnowledge(insight: any) {
  // Mock appending to knowledge
}

// 2. Inngest Workflow to gather context
export const gatherContext = inngest.createFunction(
  { id: 'gather-context', retries: 3 },
  { event: 'ai/context.requested' },
  async ({ event, step }) => {
    const { projectId, query, sources, phase } = event.data;
    
    // Fetch in parallel with error handling per source
    const rawContext = await step.run('fetch-sources', async () => {
      const results = await Promise.allSettled(
        sources.map((source: ContextSource) => fetchWithFallback(source))
      );
      
      return results.map((result, i) => ({
        ...sources[i],
        data: result.status === 'fulfilled' ? result.value : null,
        error: result.status === 'rejected' ? result.reason.message : null,
      }));
    });
    
    return { rawContext, projectId, query, phase };
  }
);

// 4. Augment and structure context
export const augmentContext = inngest.createFunction(
  { id: 'augment-context' },
  { event: 'context/gathered' },
  async ({ event, step }) => {
    const { rawContext, projectId, query, phase } = event.data;
    
    const structuredContext = await step.run('augment', async () => {
      // Filter valid sources
      const validSources = rawContext.filter((s: any) => s.data && !s.error);
      
      // Automatically inject corresponding Matrice pillar
      if (phase) {
        const pillarContent = await injectMatricePillar(phase);
        validSources.unshift({
          type: 'pillar',
          id: phase,
          data: pillarContent,
          relevance: 1.0, // Max priority
        });
      }
      
      // Rank by relevance
      const rankedChunks = await rankByRelevance(validSources, query, {
        strategy: 'hybrid', // semantic + keyword
        maxChunks: 50,
      });
      
      // Compress to respect token budget
      const compressed = compressContext(rankedChunks, {
        maxTokens: 8000, // Default budget
        strategy: 'semantic-chunking',
      });
      
      return {
        sources: rawContext,
        summary: generateSummary(compressed),
        relevantChunks: compressed,
        projectContext: {
          phase,
          domain: extractDomain(compressed),
          pillar: phase ? `pillars/${phase}.md` : null,
        },
        metadata: {
          totalTokens: countTokens(compressed),
          truncated: rankedChunks.length > compressed.length,
          sourcesUsed: validSources.length,
          sourcesFailed: rawContext.filter((s: any) => s.error).length,
          timestamp: new Date().toISOString(),
        },
      };
    });
    
    return structuredContext;
  }
);

// 6. Execute AI Query
export const executeAIQuery = inngest.createFunction(
  { id: 'ai-query' },
  { event: 'context/augmented' },
  async ({ event, step }) => {
    const { structuredContext, query } = event.data;
    
    const response = await step.run('query-ai', async () => {
      // Automatic model selection
      const model = selectModel(structuredContext);
      
      // Build system prompt
      const systemPrompt = buildSystemPrompt({
        context: structuredContext,
        projectPhase: structuredContext.projectContext.phase,
        outputFormat: 'structured',
      });
      
      // Execute with Zod validation
      const result = await queryAI({
        model,
        systemPrompt,
        userQuery: query,
        temperature: 0.3,
        responseFormat: {
          type: 'json_object',
          // schema: outputSchema, // Needs schema from event or defined elsewhere
        },
      });
      
      return result;
    });
    
    // Compounding: Store insights
    if (response.containsInsight) {
      await step.run('compound', async () => {
        await appendToKnowledge(response.insight);
      });
    }
    
    return response;
  }
);

export const processCV = inngest.createFunction(
  {
    id: 'process-cv',
    retries: 3, // P5 AU-006: Retry 3x on failure
  },
  { event: 'document/uploaded' },
  async ({ event, step }) => {
    const { projectId, sourceId, storagePath, userId } = event.data;

    // 1. Download PDF from Storage
    const { fileBuffer, fileType } = await step.run('download-file', async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      
      const { data, error } = await supabase.storage
        .from('cvs')
        .download(storagePath);
        
      if (error) throw new Error(`Download failed: ${error.message}`);
      
      const arrayBuffer = await data.arrayBuffer();
      return {
        fileBuffer: Buffer.from(arrayBuffer).toString('base64'),
        fileType: data.type
      };
    });

    // 2. Extract Text
    const text = await step.run('extract-text', async () => {
      const buffer = Buffer.from(fileBuffer, 'base64');
      const data = await parsePdf(buffer);
      return data.text;
    });

    // 3. AI Structuring
    const talentData = await step.run('structure-data', async () => {
      const { object } = await generateObject({
        model: google('gemini-1.5-flash'),
        schema: z.object({
          name: z.string(),
          email: z.string().email().nullable(),
          skills: z.array(z.string()),
          experience: z.array(z.any()),
          education: z.array(z.any())
        }),
        prompt: `Extract talent information from the following CV text:\n\n${text}`
      });
      
      return object;
    });

    // 4. Generate Embedding
    const embedding = await step.run('generate-embedding', async () => {
      const textToEmbed = `
        Name: ${talentData.name}
        Skills: ${talentData.skills.join(', ')}
        Experience: ${JSON.stringify(talentData.experience)}
        Education: ${JSON.stringify(talentData.education)}
      `.trim();

      const { embedding } = await embed({
        model: google.textEmbeddingModel('text-embedding-004'),
        value: textToEmbed,
      });
      
      return embedding;
    });

    // 5. Save to Database
    await step.run('save-talent', async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );

      const { error } = await supabase
        .from('talents')
        .insert({
          project_id: projectId,
          source_id: sourceId,
          name: talentData.name,
          email: talentData.email,
          skills: talentData.skills,
          experience: talentData.experience,
          education: talentData.education,
          embedding: embedding
        });

      if (error) throw new Error(`Save failed: ${error.message}`);
      
      // Update source status
      await supabase
        .from('context_sources')
        .update({ status: 'processed' })
        .eq('id', sourceId);
    });

    return { success: true, talentId: sourceId };
  }
);

export const handleEmailWebhook = inngest.createFunction(
  { id: 'handle-email-webhook' },
  { event: 'ingestion/email.received' },
  async ({ event, step }) => {
    const { from, to, subject, text, html, attachments } = event.data;
    
    // Normalize
    const normalizedPayload = {
      sourceType: 'email',
      sourceId: event.id, // Use event ID as source ID or message ID if available
      sender: from,
      content: text || html || '', // Prefer text, fallback to html
      attachments: attachments || [],
      projectId: 'default-project', // TODO: Determine project ID from recipient or other logic
      metadata: {
        subject,
        to
      }
    };

    await step.sendEvent('trigger-process', {
      name: 'ingestion/process',
      data: normalizedPayload
    });
    
    return { success: true };
  }
);

export const handleWhatsappWebhook = inngest.createFunction(
  { id: 'handle-whatsapp-webhook' },
  { event: 'ingestion/whatsapp.received' },
  async ({ event, step }) => {
    const { From, Body, media } = event.data;
    
    // Normalize
    const normalizedPayload = {
      sourceType: 'whatsapp',
      sourceId: event.id, // Use event ID or MessageSid
      sender: From,
      content: Body,
      attachments: media || [],
      projectId: 'default-project', // TODO: Determine project ID
      metadata: {
        // Twilio specific metadata
      }
    };

    await step.sendEvent('trigger-process', {
      name: 'ingestion/process',
      data: normalizedPayload
    });
    
    return { success: true };
  }
);

export const processIngestion = inngest.createFunction(
  { id: 'process-ingestion' },
  { event: 'ingestion/process' },
  async ({ event, step }) => {
    const { sourceType, sourceId, sender, content, attachments, projectId, metadata } = event.data;

    // Fetch default project if needed
    const targetProjectId = await step.run('get-project-id', async () => {
      if (projectId !== 'default-project') return projectId;
      
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      const { data } = await supabase.from('projects').select('id').limit(1).single();
      return data?.id;
    });
    
    if (!targetProjectId) throw new Error("No project found");

    // 1. Create Context Source
    await step.run('create-context-source', async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      
      const { error } = await supabase
        .from('context_sources')
        .insert({
          project_id: targetProjectId,
          type: sourceType,
          name: `Ingestion from ${sourceType}`,
          content: content,
          raw_metadata: { ...metadata, external_id: sourceId },
          status: 'processing'
        });
        
      if (error) throw new Error(`Failed to create context source: ${error.message}`);
    });

    // 2. AI Extraction
    const extraction = await step.run('ai-extraction', async () => {
      const { object } = await generateObject({
        model: google('gemini-1.5-flash'),
        schema: z.object({
          candidateName: z.string(),
          candidateEmail: z.string().email().nullable(),
          candidatePhone: z.string().nullable(),
          intent: z.string(),
          summary: z.string()
        }),
        prompt: `Analyze the following content from ${sourceType} (Sender: ${sender}):\n\n${content}`
      });
      return object;
    });

    // 3. Candidate Upsert
    await step.run('upsert-candidate', async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      
      // Check if candidate exists
      let query = supabase.from('candidates').select('id');
      if (extraction.candidateEmail) {
        query = query.eq('email', extraction.candidateEmail);
      } else {
        // Skip if no email for now
        return;
      }
      
      const { data: existing } = await query.single();
      
      if (existing) {
        // Update
        await supabase.from('candidates').update({
          updated_at: new Date().toISOString()
        }).eq('id', existing.id);
      } else {
        // Insert
        await supabase.from('candidates').insert({
          project_id: targetProjectId,
          name: extraction.candidateName,
          email: extraction.candidateEmail,
          // Add other fields as needed
        });
      }
    });

    return { success: true };
  }
);
