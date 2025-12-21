# Irbis Sitemap

## Public
- `/` (Landing Page)
- `/login` (Authentication)
- `/marketing` (Marketing Page)

## Application (Protected)
- `/dashboard` (Main Dashboard)
  - **Overview**: Key metrics, recent activity, quick actions.
- `/dashboard/candidates` (Candidate Management)
  - **List**: Searchable, filterable list of candidates.
  - **New**: Manual candidate entry form.
  - **[id]**: Candidate Details Profile.
    - **Profile**: Personal info, skills, experience, education.
    - **Matches**: List of job matches with scores.
    - **CRM**: Activity timeline, notes, status management.
    - **Edit**: Edit candidate details.
- `/dashboard/jobs` (Job Management)
  - **List**: List of active/closed jobs.
  - **New**: Create new job description.
  - **[id]**: Job Details.
    - **Overview**: Job description, requirements.
    - **Matches**: Ranked list of matching candidates.
    - **Edit**: Edit job details.
- `/upload` (CV Ingestion)
  - **Upload**: Drag & drop interface for PDF CVs.
  - **Processing**: Status of parsing and analysis.

## API Routes
- `/api/inngest` (Workflow Orchestration)
- `/api/integrations/linkedin` (LinkedIn Import)
- `/api/webhooks/email` (Email Ingestion)
- `/api/webhooks/whatsapp` (WhatsApp Ingestion)
