# Feature E: Dashboard & Candidate Management

## 1. Overview
This feature enhances the main Dashboard with high-level insights and introduces a dedicated Candidate Management module. This allows recruiters to manage their talent pool independently of specific job openings.

## 2. Architecture

### 2.1. Routes
We will enhance `/dashboard` and add `/dashboard/candidates`.

| Route | Description | Components |
|-------|-------------|------------|
| `/dashboard` | Main overview with stats and activity | `DashboardStats`, `RecentActivity` |
| `/dashboard/candidates` | List of all candidates | `CandidateList`, `CandidateFilters` |
| `/dashboard/candidates/[id]` | Candidate profile & history | `CandidateProfile`, `MatchHistory` |
| `/dashboard/candidates/[id]/edit` | Edit candidate details | `CandidateForm` |

### 2.2. Components

#### `src/components/dashboard/stats-cards.tsx`
- Displays key metrics:
    - Total Candidates
    - Active Jobs
    - Total Matches
    - New Candidates (this week)

#### `src/components/dashboard/recent-activity.tsx`
- List of recent system events:
    - "New candidate John Doe uploaded"
    - "Match found for Senior Dev job"

#### `src/components/candidates/candidate-list.tsx`
- Table view of candidates.
- Columns: Name, Email, Top Skills, Experience (Years), Added Date.
- Actions: View, Edit, Delete.

#### `src/components/candidates/candidate-form.tsx`
- Form to edit candidate metadata (Name, Email, Skills, Experience).
- Note: The CV content itself is immutable, but extracted data can be corrected.

### 2.3. Server Actions (`src/app/actions/dashboard.ts` & `src/app/actions/candidates.ts`)
- `getDashboardStats()`: Aggregates counts from `candidates`, `jobs`, `matches`.
- `getCandidates(filters)`: Selects from `candidates` with pagination and filtering.
- `getCandidate(id)`: Fetches single candidate details.
- `updateCandidate(id, data)`: Updates `candidates` table.
- `deleteCandidate(id)`: Soft delete or hard delete candidate.

## 3. Data Model
No new tables required. We utilize the existing `candidates`, `jobs`, and `matches` tables.

## 4. Implementation Steps

1.  **Server Actions:**
    - [x] Create `src/app/actions/dashboard.ts` for stats.
    - [x] Create `src/app/actions/candidates.ts` for CRUD.
2.  **Dashboard Home:**
    - [x] Update `src/app/(app)/dashboard/page.tsx`.
    - [x] Create `StatsCards` and `RecentActivity` components.
3.  **Candidate List:**
    - [x] Create `src/app/(app)/dashboard/candidates/page.tsx`.
    - [x] Create `CandidateList` component.
4.  **Candidate Details:**
    - [x] Create `src/app/(app)/dashboard/candidates/[id]/page.tsx`.
    - [x] Create `CandidateProfile` component.
5.  **Navigation:**
    - [x] Add "Candidates" to the main sidebar/nav.

## 5. Future Improvements
- Advanced filtering with vector search on the candidate list.
- "Add Candidate" manually (without CV upload).
