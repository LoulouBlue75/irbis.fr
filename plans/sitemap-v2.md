# Irbis Sitemap v2 (Draft)

## Public (Marketing & Brand)
- `/` (Homepage)
  - Hero: "Excellence isn't found. It's detected."
  - Value Proposition: Adaptive Precision, Confidentiality, Data-Driven.
  - Social Proof / Trust.
  - Call to Action (Login/Contact).
- `/approach` (Our Approach)
  - Methodology: 8D Matching, Contextual Scoring.
  - Process: From mandate to placement.
- `/executive-search` (Executive Search)
  - Specifics for C-Level recruitment.
  - Industry expertise.
- `/contact` (Contact)
  - Inquiry form.
  - Office locations.
- `/login` (Authentication)
  - Access to the platform.

## Application (Protected - "The Cockpit")
- `/dashboard` (Main Dashboard)
  - **Overview**: High-level metrics (Active Mandates, Candidates in Pipeline, Placements).
  - **Recent Activity**: Feed of system events.
- `/dashboard/mandates` (Mandate Management - renamed from Jobs)
  - **List**: Active, Pending, Closed mandates.
  - **New**: Create a new mandate (Job Description + Context).
  - **[id]**: Mandate Cockpit.
    - **Overview**: Specs, Requirements, Context.
    - **Sourcing**: Ingested profiles, Market mapping.
    - **Matching**: AI-ranked candidates with scores.
    - **Pipeline**: Kanban view of candidate progress.
- `/dashboard/talents` (Talent Pool - renamed from Candidates)
  - **List**: Global searchable database of talents.
  - **[id]**: Talent Profile 360°.
    - **Profile**: Parsed data (Experience, Education, Skills).
    - **Insights**: AI analysis, Behavioral assessment.
    - **History**: Interaction log across mandates.
- `/dashboard/ingestion` (Data Ingestion)
  - **Upload**: Bulk CV upload.
  - **Integrations**: LinkedIn, Email, WhatsApp status.

## Admin / System
- `/admin` (System Administration)
  - User management.
  - Billing/Subscription.
  - System logs.

## API Routes
- `/api/inngest` (Workflow Orchestration)
- `/api/webhooks/*` (External triggers)
