# Plan: Feature A - CV Ingestion & Analysis

## 1. Objective
Enable users to upload CVs (PDF), extract text, structure data using AI (Context Engineering), and store it for matching.

## 2. Architecture (Matrice P6)
- **Frontend**: File upload component (Drag & Drop).
- **Backend**: Next.js Server Actions for upload to Supabase Storage.
- **Orchestration**: Inngest workflow triggered by upload event.
- **AI**: Context Engineering pipeline to extract and structure CV data.
- **Database**: `documents` table for raw files, `candidates` table for structured data.

## 3. Step-by-Step Implementation Plan

### Step 1: Database Schema
- [x] Create `documents` table (mapped to `context_sources` in Matrice schema).
- [x] Create `candidates` table (id, source_id, project_id, name, email, skills, experience, education).
- [x] Set up RLS policies.

### Step 2: UI - File Upload
- [x] Create `CVUpload` component.
- [x] Implement upload logic to Supabase Storage bucket `cvs`.
- [x] Insert record into `documents` table (mapped to `context_sources`).

### Step 3: Inngest Workflow - Context Gathering & Augmentation
- [x] **Trigger**: `document/uploaded` event.
- [x] **Step 1 (Gathering)**: Download PDF from Storage, extract text (using `pdf-parse` or similar).
- [x] **Step 2 (Augmentation)**: Structure text using LLM (Context Engineering).
    - Extract: Name, Email, Skills, Experience, Education.
    - Validate with Zod schema.
- [x] **Step 3 (Storage)**: Save structured data to `candidates` table.

### Step 4: UI - Results Display
- [x] Create `CandidateList` component.
- [x] Fetch and display processed candidates.

## 4. Next Actions
- [x] Create Supabase migration for new tables.
- [x] Apply migration to Supabase project.
- [x] Implement Upload Component.
- [x] Setup Inngest function for CV processing.
- [x] Implement Results Display.

## 5. Future Tracks
- [ ] **Feature F**: Advanced Candidate Management (Manual Entry, Semantic Search). [x]
- [ ] **Feature G**: Real-time Updates & Interactivity.
- [ ] **Feature H**: External Integrations (LinkedIn, CRM).
