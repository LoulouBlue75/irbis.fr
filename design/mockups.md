# UI Mockups (English)

## Style Guide
- **Theme**: Dark Mode (Default).
- **Colors**:
  - Background: `bg-gray-950` (Main), `bg-gray-900` (Cards/Panels).
  - Text: `text-white` (Primary), `text-gray-400` (Secondary).
  - Accents: `text-blue-500` (Primary Action), `text-green-500` (Success), `text-red-500` (Danger), `text-yellow-500` (Gold/Premium).
- **Typography**: Sans-serif (Inter or similar), clean and readable.
- **Components**: Rounded corners (`rounded-lg`), subtle borders (`border-gray-800`), consistent padding (`p-6`).

## 1. Dashboard (`/dashboard`)
**Layout**: Grid system.
- **Top Bar**:
  - Left: "Overview" (H1, Bold).
  - Right: "Talent Pool" (Secondary Button), "New Mandate" (Primary Button, Blue).
- **Stats Row** (4 Cards):
  - Each card: Icon (Top Right, colored background), Label (Small, Gray), Value (Large, White).
  - Example: "Identified Talents" | 1,240 | Users Icon (Blue).
- **Main Content Area**:
  - **Left Column (2/3)**: "Recent Activity"
    - List of items. Each item: Avatar/Icon, Description ("New professional footprint analyzed"), Time ago ("2h ago").
    - Minimalist list style, dividers between items.
  - **Right Column (1/3)**: "System Status"
    - Card with links or status indicators (e.g., "Matching Engine: Idle").

## 2. Candidate List (`/dashboard/candidates`)
**Layout**: Single column, full width.
- **Header**:
  - Title: "Talent Pool".
  - Actions: "Manual Entry" (Gray), "Profile Ingestion" (Blue).
- **Search & Filter Bar**:
  - Large search input: "Precision semantic search..."
  - Filter dropdowns: "Experience", "Status".
- **Table**:
  - Header Row: Darker gray background (`bg-gray-900`).
  - Rows: Hover effect (`hover:bg-gray-800`).
  - Columns:
    - **Talent**: Bold white text, subtext email (gray).
    - **Expertise**: Flex wrap container with small pill badges (Blue bg, light blue text).
    - **Experience**: Simple text "5 years".
    - **Added**: Relative time "2 days ago".
    - **Actions**: "View" (Icon), "Edit" (Icon).

## 3. Candidate Details (`/dashboard/candidates/[id]`)
**Layout**: Two columns (Left 66%, Right 33%).
- **Left Column (The Analysis)**:
  - **Header Card**:
    - Large Name.
    - Contact info row (Email, Phone, LinkedIn).
    - "Edit" button top right.
  - **Synthesis Card**: "What this path reveals..." (AI generated summary).
  - **8D Dimensions Card**: Radar chart or progress bars showing scores in Leadership, Image, Sales, etc.
  - **Path Timeline**: Vertical line with dots.
    - Job Title (Bold), Company (Gray), Dates.
    - Description text.
  - **Alignments Card**:
    - List of mandates this talent matches with.
    - Each item: Mandate Title, Compatibility Index (Big percentage), Status Badge.
- **Right Column (The Follow-up)**:
  - **History Feed**:
    - Vertical timeline.
    - Items: "Note added by You", "Status changed to Interview".
  - **Add Note**:
    - Collapsed: "Add Note..." button.
    - Expanded: Textarea, Type selector (Note, Call, Email), "Save" button.
  - **Action**: "Initiate Approach" button.

## 4. Job List (`/dashboard/jobs`)
**Layout**: Grid of Cards.
- **Header**:
  - Title: "Active Mandates".
  - Action: "New Mandate".
- **Cards**:
  - **Title**: Bold, link to details.
  - **Status**: Badge (Green "Active", Gray "Closed").
  - **Metrics**: "12 Alignments found", "3 in progress".
  - **Created**: "Opened 2 days ago".

## 5. Job Details (`/dashboard/jobs/[id]`)
**Layout**: Two columns.
- **Left Column (The Need)**:
  - Title, Status Badge.
  - Description (Markdown rendered).
  - Requirements list.
- **Right Column (The Match)**:
  - Title: "Suggested Alignments".
  - List of Talent Cards:
    - **Card**:
      - Top: Name, Compatibility Index (Color coded: Green > 80%, Yellow > 50%).
      - Middle: "Why this match?" - One sentence AI summary.
      - Bottom: Actions "Validate" (Check), "Discard" (X).

## 6. Upload CV (`/upload`)
**Layout**: Centered, focused.
- **Main Area**:
  - Large dashed border box.
  - Icon: Cloud Upload.
  - Text: "Drop file for structural analysis".
  - Subtext: "Max file size 10MB".
- **Processing State**:
  - Progress bar.
  - Steps list: "Data Extraction...", "Semantic Analysis...", "8D Dimensions Calculation...", "Done".
- **Success State**:
  - "Profile ready for alignment!"
  - Summary card of extracted data.
  - Button: "View Footprint".
