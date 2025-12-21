# Feature F: Advanced Candidate Management

## 1. Overview
This feature enhances the candidate management capabilities by allowing manual entry of candidates (bypassing CV upload) and implementing semantic search for advanced filtering.

## 2. Architecture

### 2.1. Manual Candidate Entry
- **Route:** `/dashboard/candidates/new`
- **Component:** `CandidateForm` (Client Component)
- **Server Action:** `createCandidate(data: CandidateInput)`
- **Logic:**
    - Validate input with Zod.
    - Insert into `candidates` table.
    - Trigger `generate-candidate-embedding` Inngest function manually or ensure it listens to `INSERT` events (or call it directly).

### 2.2. Semantic Search (Advanced Filtering)
- **Route:** `/dashboard/candidates` (Enhancement)
- **Component:** `CandidateSearch` (Client Component)
- **Server Action:** `searchCandidates(query: string)`
- **Logic:**
    - Generate embedding for the search query (using `openai` or `supabase-js` if available).
    - Perform vector similarity search on `candidates.embedding`.
    - Return ranked results.

## 3. Implementation Steps

### Step 1: Manual Entry
- [ ] Create `src/app/(app)/dashboard/candidates/new/page.tsx`.
- [ ] Create `src/components/candidate-form.tsx` (Reuse or create new).
- [ ] Update `src/app/actions/candidates.ts` to include `createCandidate`.
- [ ] Ensure `generate-candidate-embedding` handles manually created candidates.

### Step 2: Semantic Search
- [ ] Create `src/components/candidate-search.tsx`.
- [ ] Implement `searchCandidates` action in `src/app/actions/search.ts` (or `candidates.ts`).
- [ ] Integrate search component into `/dashboard/candidates/page.tsx`.

## 4. Data Model
No schema changes expected. We use the existing `candidates` table.
- `candidates.embedding` is already present.

## 5. Dependencies
- `ai` SDK or `openai` for embedding generation.
- `supabase-js` for vector search.
