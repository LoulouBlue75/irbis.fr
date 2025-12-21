# Feature D: Admin Interface (Jobs & Matches)

## 1. Overview
This feature implements the Admin UI for managing Jobs and viewing Candidate Matches. It enables recruiters to post jobs and review the AI-generated matches.

## 2. Architecture

### 2.1. Routes
We will add a new section `/jobs` to the application.

| Route | Description | Components |
|-------|-------------|------------|
| `/jobs` | List of all jobs (Open/Closed) | `JobList`, `JobCard` |
| `/jobs/new` | Form to create a new job | `JobForm` |
| `/jobs/[id]` | Job details + List of Matches | `JobDetails`, `MatchList` |
| `/jobs/[id]/edit` | Form to edit an existing job | `JobForm` |

### 2.2. Components

#### `src/components/jobs/job-list.tsx`
- Fetches and displays a list of jobs.
- Columns: Title, Status, Created At, Match Count.
- Actions: Edit, Delete, View.

#### `src/components/jobs/job-form.tsx`
- Client component for creating/editing jobs.
- Fields: Title, Description, Requirements (Array of strings), Status.
- Uses Server Actions for submission.

#### `src/components/matches/match-list.tsx`
- Displays candidates matched to a specific job.
- Sorted by `score` (descending).
- Shows: Candidate Name, Vector Score, LLM Score, Reasoning.
- Actions: Accept, Reject (updates `matches.status`).

### 2.3. Server Actions (`src/app/actions/jobs.ts`)
- `createJob(data: JobInput)`: Inserts into `jobs`.
- `updateJob(id: string, data: JobInput)`: Updates `jobs`.
- `deleteJob(id: string)`: Deletes from `jobs`.
- `updateMatchStatus(matchId: string, status: MatchStatus)`: Updates `matches`.

## 3. Implementation Steps

1.  **Server Actions:** Implement CRUD for Jobs and Status Update for Matches. [x]
2.  **Job List UI:** Create `/jobs/page.tsx` and `JobList` component. [x]
3.  **Job Creation UI:** Create `/jobs/new/page.tsx` and `JobForm` component. [x]
4.  **Job Details & Matches UI:** Create `/jobs/[id]/page.tsx` and `MatchList` component. [x]
5.  **Navigation:** Update `src/app/(app)/layout.tsx` to include "Jobs" link. [x]

## 4. Data Fetching
- Use Supabase Server Client for fetching data in Server Components.
- `getJobs()`: Select * from jobs order by created_at desc.
- `getJobWithMatches(id)`: Select job and join matches (and candidates).

## 5. Future Improvements
- Real-time updates for new matches using Supabase Realtime.
- Manual trigger for "Find Matches" (currently handled by Inngest on creation).
