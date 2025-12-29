# Hard Reset & Design System Reboot

> **Objective**: Eradicate the "Stitch" experiment and rebuild the design system from zero based on the core Irbis strategy (Observatory/House metaphor, Ink/Gold palette).

## 1. The Purge (Cleanup)
We will delete all files related to the failed "Stitch" experiment to avoid confusion.

**Files to Delete:**
- `design/code.html`
- `design/screen.png`
- `conductor/stitch-full-site.md`
- `conductor/brief-stitch-complet.md`
- `conductor/brief-stitch-en.md`
- `conductor/brief-stitch-homepage.md`
- `conductor/redesign-brief-stitch.md`

## 2. The Foundation (Design System Reset)
We will rewrite `src/app/globals.css` to strictly implement the **Irbis Brand & UX Spec v4.0**.

**Core Tokens:**
- **Colors**:
  - `Ink` (#0F1A2E) - Primary Text & Structure
  - `Gold` (#BF9E59) - Accents & Primary CTA (Max 1 per screen)
  - `Ivory` (#F6F1E7) - Backgrounds
  - `Stone` (#CFC8BB) - UI Borders
- **Typography**:
  - Headings: Serif (e.g., Playfair Display or similar Google Font)
  - Body: Geist Sans (Variable)
- **Radius**: 6px (Buttons), 8px (Cards)

## 3. The Rebuild (Homepage)
We will rebuild `src/app/(marketing)/page.tsx` from scratch, following the wireframe in `conductor/brand-ux-spec.md`.

**Structure:**
1.  **Hero**: "High standards. Shared ambition." (Serif Display). Ink/Ivory theme.
2.  **What We Do**: 3 Cards (Executive Search, Sparring Partner, Ecosystem).
3.  **Method**: "Four steps. Full commitment."
4.  **Why**: "Three commitments."
5.  **Ecosystem**: Navigation cards.
6.  **CTA**: "Let's talk."

## 4. Component Reset
- **Global Nav**: Minimalist, Ink/Ivory.
- **Footer**: Clean, Ink background or Ivory with Ink text.

## Execution Order
1.  Delete Stitch files.
2.  Reset `globals.css`.
3.  Reset `layout.tsx`.
4.  Rebuild `page.tsx`.
5.  Rebuild `global-nav.tsx` & `footer.tsx`.
