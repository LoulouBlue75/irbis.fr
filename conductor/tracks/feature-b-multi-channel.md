# Feature B: Multi-Channel Ingestion (Email & WhatsApp)

## 1. Overview
This feature enables the platform to ingest candidate profiles and communications via Email and WhatsApp. It unifies these channels into a single ingestion pipeline orchestrated by Inngest, ensuring consistent data processing and storage.

## 2. Architecture

### 2.1 Unified Ingestion Pipeline
We will implement a "Fan-in" pattern where multiple sources (Email, WhatsApp) trigger their own specific webhook handlers, which then normalize the data and trigger a shared processing workflow.

```mermaid
graph LR
    Email[Email (Resend)] -->|Webhook| API_Email[API: /webhooks/resend]
    WhatsApp[WhatsApp (Twilio)] -->|Webhook| API_WA[API: /webhooks/twilio]
    
    API_Email -->|Event: ingestion/email.received| Inngest
    API_WA -->|Event: ingestion/whatsapp.received| Inngest
    
    subgraph Inngest Workflows
        W_Email[Workflow: Handle Email] -->|Normalize| Event_Process[Event: ingestion/process]
        W_WA[Workflow: Handle WhatsApp] -->|Normalize| Event_Process
        
        Event_Process --> W_Process[Workflow: Process Message]
        
        W_Process -->|Step 1| AI_Extract[AI Extraction]
        W_Process -->|Step 2| DB_Source[Save Context Source]
        W_Process -->|Step 3| DB_Candidate[Upsert Candidate]
    end
    
    W_Process --> DB[(Supabase)]
```

### 2.2 Data Model Changes

**`context_sources` Table:**
-   `type`: Add support for `'email'` and `'whatsapp'`.
-   `raw_metadata`: Store channel-specific headers (e.g., Subject, To/From, MessageSID).
-   `content`: (New Column or use storage) Store the message body. *Decision: Store body in `content` column (TEXT) for text messages, or `storage_path` for attachments.*

**`candidates` Table:**
-   Existing schema supports `email` and `phone` (implied in contact info).
-   We might need to add `phone` column explicitly if not present (currently `email` exists).

### 2.3 Integration Details

#### A. Email (Resend Inbound)
-   **Provider:** Resend
-   **Mechanism:** Inbound Webhooks
-   **Payload:** JSON containing `from`, `to`, `subject`, `text`, `html`, `attachments`.
-   **Action:**
    1.  Verify webhook signature.
    2.  Upload attachments (CVs) to Supabase Storage.
    3.  Trigger `ingestion/email.received`.

#### B. WhatsApp (Twilio)
-   **Provider:** Twilio
-   **Mechanism:** Webhooks
-   **Payload:** Form-urlencoded data containing `From`, `Body`, `MediaUrl{N}`.
-   **Action:**
    1.  Verify webhook signature.
    2.  Download media (if any) and upload to Supabase Storage.
    3.  Trigger `ingestion/whatsapp.received`.

## 3. Inngest Workflows

### 3.1 `handle-email-webhook`
-   **Trigger:** `ingestion/email.received`
-   **Steps:**
    1.  Extract sender, subject, body.
    2.  Process attachments (if PDF, treat as CV).
    3.  Send `ingestion/process` event with normalized payload.

### 3.2 `handle-whatsapp-webhook`
-   **Trigger:** `ingestion/whatsapp.received`
-   **Steps:**
    1.  Extract sender (phone), body.
    2.  Process media (if PDF/Image).
    3.  Send `ingestion/process` event with normalized payload.

### 3.3 `process-message` (The Core Logic)
-   **Trigger:** `ingestion/process`
-   **Payload:**
    ```typescript
    {
      sourceType: 'email' | 'whatsapp';
      sourceId: string; // Message ID
      sender: string; // Email or Phone
      content: string;
      attachments: { path: string, type: string }[];
      projectId: string;
    }
    ```
-   **Steps:**
    1.  **Context Creation:** Create a `context_sources` entry.
    2.  **AI Extraction:** Use `augmentContext` / `executeAIQuery` logic to parse the content.
        -   *Prompt:* "Extract candidate info from this message. If it's a conversation, summarize the intent."
    3.  **Candidate Upsert:**
        -   Find candidate by Email or Phone.
        -   If found, update history/notes.
        -   If new, create candidate.
    4.  **Notification:** Notify the recruiter (via UI or internal notification).

## 4. Security & Validation
-   **Webhook Verification:** Strictly verify signatures from Resend and Twilio.
-   **Rate Limiting:** Use Inngest's concurrency controls to prevent flood.
-   **Data Sanitization:** Sanitize all incoming text before storage.

## 5. Implementation Status
- [x] Email Webhook (`src/app/api/webhooks/email/route.ts`)
- [x] WhatsApp Webhook (`src/app/api/webhooks/whatsapp/route.ts`)
- [x] Inngest Workflows (`src/inngest/functions.ts`)
    - [x] `handle-email-webhook`
    - [x] `handle-whatsapp-webhook`
    - [x] `process-ingestion`
