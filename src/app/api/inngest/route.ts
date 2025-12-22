import { serve } from 'inngest/next';
import { inngest } from '@/lib/inngest';
import {
  gatherContext,
  augmentContext,
  executeAIQuery,
  processCV,
  handleEmailWebhook,
  handleWhatsappWebhook,
  processIngestion,
} from '@/inngest/functions';
import { generateCandidateEmbedding, generateMatches } from '@/inngest/matching';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    gatherContext,
    augmentContext,
    executeAIQuery,
    generateCandidateEmbedding,
    generateMatches,
    processCV,
    handleEmailWebhook,
    handleWhatsappWebhook,
    processIngestion,
  ],
});
