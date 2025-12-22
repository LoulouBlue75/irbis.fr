# Mockups & ACI Strategy

## Visily Mockups Plan

We will generate high-fidelity mockups using Visily for the following key pages, adhering to the "Swiss Minimalism" design system (Light theme, clean typography, subtle borders).

### Public Pages
1.  **Homepage (`/`)**:
    *   Hero section with strong value prop.
    *   "How it works" section (3 steps).
    *   Trust/Social proof section.
    *   Footer.
2.  **Approach (`/approach`)**:
    *   Detailed breakdown of the 8D matching methodology.
    *   Visual representation of the process.
3.  **Executive Search (`/executive-search`)**:
    *   Specific content for C-Level recruitment.
    *   Industry expertise highlights.

### Application Pages (The Cockpit)
4.  **Dashboard Overview (`/dashboard`)**:
    *   Bento grid layout for key metrics.
    *   Recent activity feed.
    *   Quick action buttons.
5.  **Mandate Cockpit (`/dashboard/mandates/[id]`)**:
    *   Header with mandate status and key details.
    *   Tabs for: Overview, Sourcing, Matching, Pipeline.
    *   Kanban board for candidate pipeline.
6.  **Talent Profile (`/dashboard/talents/[id]`)**:
    *   Split-screen layout:
        *   Left: Parsed CV data (Experience, Education).
        *   Right: AI Insights, Notes, Matching scores.

## ACI (Action-Context-Interface) Contracts Plan

We will define ACI contracts for the key interactive pages to ensure the frontend and backend are perfectly aligned.

### 1. Dashboard Overview (`screen_contracts/dashboard-overview.yaml`)
*   **Context**: User role, Organization ID.
*   **Data**:
    *   `stats`: { activeMandates, pipelineCount, placements }.
    *   `recentActivity`: Array of events.
*   **Actions**:
    *   `createMandate`: Navigate to creation form.
    *   `viewTalentPool`: Navigate to talent list.

### 2. Mandate Cockpit (`screen_contracts/mandate-cockpit.yaml`)
*   **Context**: Mandate ID.
*   **Data**:
    *   `mandate`: Full details (title, status, requirements).
    *   `pipeline`: Candidates grouped by stage.
    *   `matches`: AI-ranked candidates.
*   **Actions**:
    *   `moveCandidate`: Update candidate stage.
    *   `addNote`: Add comment to mandate.
    *   `archiveMandate`: Change status to closed.

### 3. Talent Profile (`screen_contracts/talent-profile.yaml`)
*   **Context**: Talent ID.
*   **Data**:
    *   `profile`: Name, contact, skills, experience, education.
    *   `insights`: AI-generated summary and analysis.
    *   `history`: Timeline of interactions.
*   **Actions**:
    *   `updateStatus`: Change availability.
    *   `addToMandate`: Associate with a specific job.
    *   `generateSummary`: Trigger AI summary regeneration.
