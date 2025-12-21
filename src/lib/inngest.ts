import { Inngest } from 'inngest';

export const inngest = new Inngest({ 
  id: 'irbis',
  eventKey: process.env.INNGEST_EVENT_KEY,
});
