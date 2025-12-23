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
import { generateTalentEmbedding, generateAlignments } from '@/inngest/matching';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    gatherContext,
    augmentContext,
    executeAIQuery,
    generateTalentEmbedding,
    generateAlignments,
    processCV,
    handleEmailWebhook,
    handleWhatsappWebhook,
    processIngestion,
  ],
});
