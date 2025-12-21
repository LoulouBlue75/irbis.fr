# Feature C: Matching & Scoring (Hybrid Vector + LLM)

## 1. Overview
The goal is to implement an intelligent matching system that ranks candidates against job descriptions. This uses a "Hybrid" approach:
1.  **Vector Search (Retrieval):** Fast, semantic filtering to find the top ~20-50 candidates.
2.  **LLM Scoring (Reranking):** Deep analysis of the specific fit, providing a 0-100 score and qualitative reasoning.

## 2. Data Model

### 2.1. Jobs Table (`jobs`)
Stores job openings.
- `id`: UUID
- `project_id`: UUID
- `title`: Text
- `description`: Text (Full text)
- `requirements`: JSONB (Structured requirements if available)
- `embedding`: VECTOR(1536) (Summary embedding for search)
- `status`: Text (open, closed)

### 2.2. Matches Table (`matches`)
Stores the computed match between a job and a candidate.
- `id`: UUID
- `job_id`: UUID
- `candidate_id`: UUID
- `vector_score`: Float (Cosine similarity from Step 1)
- `llm_score`: Int (0-100 from Step 2)
- `reasoning`: Text (Explanation from LLM)
- `status`: Text (new, reviewed, contacted, rejected)
- `created_at`: Timestamp

### 2.3. Updates to `candidates`
- Add `embedding`: VECTOR(1536) to `candidates` table.
    - *Why?* Searching against raw PDF chunks (`chunk_embeddings`) is noisy. We should generate a clean "Profile Summary" from the structured candidate data and embed *that* for more accurate retrieval.

## 3. Workflow (Inngest)

### Event: `recruitment/job.created` or `recruitment/match.requested`

**Function: `generate-matches`**

1.  **Step 1: Embed Job**
    - Generate embedding for the Job Description + Title.
    - Update `jobs.embedding`.

2.  **Step 2: Vector Retrieval (The "Net")**
    - Perform `pgvector` similarity search against `candidates.embedding`.
    - Select Top 20 candidates where `similarity > threshold` (e.g., 0.7).

3.  **Step 3: LLM Scoring (The "Filter")**
    - *Parallel Map:* For each of the Top 20 candidates:
        - Construct Prompt:
            - **Job:** Title, Description.
            - **Candidate:** Skills, Experience (Summary), Education.
            - **Task:** "Score match 0-100 and explain why."
        - Call LLM (GPT-4o-mini or GPT-4o).
    
4.  **Step 4: Persist**
    - Upsert into `matches` table.

## 4. Migration Plan
1.  [x] Create `jobs` table.
2.  [x] Create `matches` table.
3.  [x] Add `embedding` column to `candidates`.
4.  [x] Create Inngest function `generate-candidate-embedding` (triggered on `candidate.created`).
5.  [x] Create Inngest function `generate-matches`.
