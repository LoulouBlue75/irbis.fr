# Feature H: External Integrations (LinkedIn & CRM)

## 1. Overview
This feature expands the platform's capabilities by integrating with external systems. The primary goals are to allow importing candidate profiles from LinkedIn and to provide basic CRM functionalities like activity tracking and status management.

## 2. Architecture

### 2.1. LinkedIn Integration (Chrome Extension / API)
*   **Approach:** Since the official LinkedIn API is restricted, we will likely need a browser extension or a third-party service (like Proxycurl or similar, if budget allows) to extract profile data. For the MVP extension approach:
    *   **Chrome Extension:** Scrapes the current LinkedIn profile page.
    *   **API Endpoint:** `/api/integrations/linkedin/import`
    *   **Logic:** Receives JSON profile data -> Maps to `Candidate` schema -> Upserts to DB -> Triggers Embedding.

### 2.2. CRM Capabilities
*   **Goal:** Track interactions and status changes for candidates.
*   **Data Model:**
    *   `activities` table: `id`, `candidate_id`, `type` (note, call, email, status_change), `content`, `created_at`, `created_by`.
*   **UI:**
    *   `ActivityTimeline` component on Candidate Details page.
    *   `AddActivityForm` component.

## 3. Implementation Steps

### Step 1: CRM Data Model
- [ ] Create `activities` table in Supabase.
- [ ] Set up RLS policies.

### Step 2: CRM UI
- [ ] Create `src/components/crm/activity-timeline.tsx`.
- [ ] Create `src/components/crm/add-activity-form.tsx`.
- [ ] Integrate into `/dashboard/candidates/[id]/page.tsx`.
- [ ] Implement Server Actions for adding/fetching activities.

### Step 3: LinkedIn Import API
- [ ] Create API route `src/app/api/integrations/linkedin/route.ts`.
- [ ] Implement logic to parse incoming JSON and create/update candidate.
- [ ] (Optional) Scaffold a basic Chrome Extension manifest and script.

## 4. Data Model Changes

### `activities` Table
```sql
create table activities (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) not null,
  candidate_id uuid references candidates(id) not null,
  type text not null check (type in ('note', 'call', 'email', 'meeting', 'status_change')),
  content text,
  created_at timestamptz default now(),
  created_by uuid references auth.users(id)
);
```
