# Handoff Document

## Project Status
- **Core Features (A-E):** Implemented.
    - CV Ingestion (PDF Upload, Extraction, Storage).
    - Multi-Channel Ingestion (Email, WhatsApp).
    - Matching Engine (Vector Search + LLM Scoring).
    - Admin UI (Jobs, Matches).
    - Dashboard (Stats, Candidates).
- **New Feature (F):** Advanced Candidate Management.
    - **Manual Entry:** Implemented (`/dashboard/candidates/new`).
    - **Semantic Search:** Implemented (`/dashboard/candidates` with search bar).

## Recent Changes
- Created `src/app/(app)/dashboard/candidates/new/page.tsx` and `src/components/candidate-form.tsx` for manual candidate creation.
- Updated `src/app/actions/candidates.ts` to include `createCandidate` server action which triggers `candidate/created` Inngest event.
- Created `src/components/candidate-search.tsx` and `src/app/actions/search.ts` for semantic search using vector embeddings.
- Updated `src/app/(app)/dashboard/candidates/page.tsx` to integrate the new search component and handle search results.
- Updated `src/app/api/inngest/route.ts` to register all Inngest functions.

## Next Steps
1.  **Real-time Updates:** Implement Supabase Realtime to update the dashboard and match lists instantly.
2.  **External Integrations:** Start working on LinkedIn or CRM integrations.
3.  **Testing:** Verify the new manual entry and semantic search features end-to-end.

## Technical Debt / Notes
- The `generate-candidate-embedding` function in `src/inngest/matching.ts` is triggered by `candidate.created`. Ensure this event is correctly sent from `createCandidate` action (currently using `inngest.send`).
- Semantic search uses `text-embedding-004` via `google` provider. Ensure API keys are set.
- Pagination in `CandidatesPage` might need adjustment when switching between semantic search (all results) and standard pagination.

## Environment
- **Supabase:** Tables `candidates`, `jobs`, `matches`, `context_sources` are set up.
- **Inngest:** Functions are registered in `src/app/api/inngest/route.ts`.
