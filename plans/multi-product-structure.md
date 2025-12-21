# Multi-Product Platform Structure Plan

## Context
Irbis Partners is evolving into a multi-product platform containing:
1.  **Irbis Partners (Core)**: Executive Search with Adaptive Precision (B2B).
2.  **Matrice Hunting**: The internal/client-facing app for executive search operations (B2B).
3.  **Taylor Shift**: Global Luxury Retail Recruitment (B2B/B2C).
4.  **Paris (Project Name)**: Career perspective tool for individuals (B2C).

## Routing Strategy (Next.js App Router)

We will use **Route Groups** to separate these distinct domains while keeping them in a single monorepo for shared components and auth.

### 1. Irbis Corporate (Vitrine)
*   **Path**: `/` (Root)
*   **Group**: `(marketing)`
*   **Pages**: Home, About, Services, References, Contact.
*   **Target**: Corporate clients, general brand awareness.

### 2. Matrice Hunting (App)
*   **Path**: `/hunting` (or `/dashboard` for now)
*   **Group**: `(hunting)`
*   **Layout**: Sidebar with "Hunting" specific tools.
*   **Features**: Context gathering, candidate search, mandate management.
*   **Access**: Protected (Recruiters/Clients).

### 3. Taylor Shift (Vertical)
*   **Path**: `/taylor-shift`
*   **Group**: `(taylor-shift)`
*   **Layout**: Distinct branding (Luxury/Retail focus).
*   **Pages**: Home, Opportunities, Candidates.
*   **Access**: Public + Protected area for candidates.

### 4. Paris (Career Tool)
*   **Path**: `/paris` (or `/career`)
*   **Group**: `(paris)`
*   **Layout**: B2C focused, personal development branding.
*   **Features**: Career path visualization, skills assessment.
*   **Access**: Public landing + Protected user area.

## Implementation Steps

1.  **Refine Route Groups**:
    *   Rename `(app)` to `(hunting)` to be specific.
    *   Create `(taylor-shift)` and `(paris)` groups.
2.  **Shared UI**:
    *   Ensure `src/components/ui` (Shadcn) is available for all.
    *   Create `src/components/shared` for cross-product headers/footers if needed.
3.  **Navigation**:
    *   Update the main `(marketing)` header to link to these sub-products.
4.  **Database**:
    *   Ensure `projects` table can distinguish between these product types (already has `domain` column).

## Immediate Action Plan
1.  Rename `src/app/(app)` to `src/app/(hunting)`.
2.  Create `src/app/(taylor-shift)/page.tsx` (Placeholder).
3.  Create `src/app/(paris)/page.tsx` (Placeholder).
4.  Update `src/middleware.ts` to protect `/hunting`, `/paris/app`, etc.
