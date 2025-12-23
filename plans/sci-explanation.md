# SCI Explanation: Irbis Platform Strategy

This document explains the logic, articulation, and branding of the Irbis platform through key Screen-Context-Interface (SCI) definitions.

## 1. The Public Face: "Quiet Luxury" & Authority

**Goal**: Establish Irbis as a premium, data-driven Executive Search partner for the Retail Luxury sector.
**Branding**: "Swiss Minimalism" - Clean, white space, subtle borders, deep navy/gold accents.

### Screen: Homepage (`/`)
*   **Context**: A potential client (HR Director, CEO) or high-level candidate visits the site. They need immediate reassurance of quality and exclusivity.
*   **Interface (Visuals)**:
    *   **Hero**: "Excellence isn't found. It's detected." - Strong, confident statement. No clutter.
    *   **Visuals**: Abstract, high-end textures (marble, silk) or minimalist data visualizations. No stock photos of people shaking hands.
    *   **Navigation**: Simple. "Approach", "Executive Search", "Login".
*   **Articulation**: This is the "Front Door". It filters for quality. It doesn't try to sell to everyone; it speaks to those who understand "Adaptive Precision".

### Screen: The Approach (`/approach`)
*   **Context**: The visitor is intrigued and wants to know *how* it works.
*   **Interface**:
    *   **Diagram**: A visual representation of the "8D Matching" methodology.
    *   **Process**: Step-by-step flow: Mandate -> Sourcing -> AI Analysis -> Human Validation -> Placement.
*   **Articulation**: Connects the brand promise ("Precision") with the product reality (AI + Human).

---

## 2. The Application: "The Cockpit"

**Goal**: Provide a powerful, efficient, and distraction-free workspace for recruiters.
**Branding**: Functional, high-contrast data, clear hierarchy.

### Screen: Dashboard Overview (`/dashboard`)
*   **Context**: The recruiter logs in to start their day. They need a "Pulse Check".
*   **Interface**:
    *   **Bento Grid**: Key metrics (Active Mandates, Pipeline Health) in a modular layout.
    *   **Feed**: "Recent Activity" - Real-time updates (e.g., "New match found for Store Manager Paris").
    *   **Status**: "Matching Engine: Active" - Reassurance that the system is working in the background.
*   **Articulation**: The central hub. It aggregates data from all mandates and talents, directing attention to where it's needed most.

### Screen: Mandate Cockpit (`/dashboard/mandates/[id]`)
*   **Context**: Deep work on a specific recruitment mission.
*   **Interface**:
    *   **Tabs**: Clear separation of concerns: Overview (The Need), Sourcing (The Input), Matching (The AI Output), Pipeline (The Process).
    *   **Kanban**: Visual pipeline for candidate progress.
    *   **AI Insights**: "Why this candidate matches?" - Explainable AI reasoning.
*   **Articulation**: This is the "Engine Room". It connects the specific job requirements (defined in the Mandate) with the global Talent Pool.

### Screen: Talent Profile 360° (`/dashboard/talents/[id]`)
*   **Context**: Evaluating a specific individual.
*   **Interface**:
    *   **Split Screen**:
        *   **Left (Hard Data)**: Experience, Education, Skills (Parsed from CV).
        *   **Right (Soft Data & AI)**: Behavioral analysis, Cultural fit, Interaction history.
    *   **Actions**: "Add to Mandate", "Contact".
*   **Articulation**: The "Atom" of the system. A talent exists independently of mandates but can be linked to many. The profile aggregates all data points to form a complete picture.

---

## 3. Logic & Articulation

The platform is built on a **Hub-and-Spoke** model:

1.  **The Hub (Dashboard)**: Central intelligence.
2.  **The Spokes (Mandates)**: Specific missions.
3.  **The Atoms (Talents)**: The raw material.

**Data Flow**:
*   **Ingestion**: CVs enter via `/dashboard/ingestion` -> Parsed into **Talents**.
*   **Matching**: **Mandates** define criteria -> AI scans **Talents** -> Generates **Matches**.
*   **Process**: Recruiters move **Matches** through the **Pipeline** in the **Mandate Cockpit**.

This structure ensures that data is entered once (Ingestion) and leveraged multiple times (Matching across multiple mandates), fulfilling the promise of "Adaptive Precision".
