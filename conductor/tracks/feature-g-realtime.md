# Feature G: Real-time Updates & Interactivity

## 1. Overview
This feature aims to make the application more responsive and interactive by leveraging Supabase Realtime for live updates and adding manual triggers for key actions.

## 2. Architecture

### 2.1. Real-time Dashboard
- **Goal:** Update dashboard stats and recent activity without page refresh.
- **Mechanism:** Supabase Realtime subscriptions on `candidates`, `jobs`, and `matches` tables.
- **Components:**
    - `DashboardStats`: Subscribe to `INSERT`/`DELETE` on relevant tables.
    - `RecentActivity`: Subscribe to `INSERT` on `candidates` and `matches`.

### 2.2. Live Match Updates
- **Goal:** When a new candidate is added or a job is created, the match list should update automatically once processing is complete.
- **Mechanism:** Subscribe to `INSERT`/`UPDATE` on `matches` table in `MatchList` component.

### 2.3. Manual Match Trigger
- **Goal:** Allow recruiters to re-run matching for a specific job or candidate (e.g., after updating requirements or profile).
- **Mechanism:**
    - **UI:** "Run Matching" button on Job Details and Candidate Details pages.
    - **Server Action:** `triggerMatching(jobId, candidateId?)`.
    - **Inngest:** Trigger `recruitment/match.requested` event.

## 3. Implementation Steps

### Step 1: Real-time Hooks
- [ ] Create `useRealtimeSubscription` hook for easier subscription management.
- [ ] Update `DashboardStats` to use realtime data.
- [ ] Update `RecentActivity` to use realtime data.

### Step 2: Live Matches
- [ ] Update `MatchList` component to listen for new matches.

### Step 3: Manual Triggers
- [ ] Create `RunMatchingButton` component.
- [ ] Implement `triggerMatching` server action.
- [ ] Add button to Job Details and Candidate Details pages.

## 4. Data Model
No schema changes required. We rely on existing tables and Inngest events.
