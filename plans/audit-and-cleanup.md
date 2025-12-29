# Audit & Cleanup Plan (Hard Reset)

> **Objective**: Perform a "huge cleanup" (immense ménage) of all design-related files, keeping only the Sitemap and Wording as the source of truth.

## 1. The Sacred Files (KEEP)
These files define the core structure and content of the project. They are the ONLY foundation for the new design system.

- `conductor/sitemap.md` (Structure)
- `conductor/copy-v4-chiseled.md` (Content/Wording)
- `conductor/product.md` (Product Vision)
- `assets/` (Logos)

## 2. The Archives (REFERENCE ONLY)
These files contain valuable context or previous strategy but are NOT the current design truth. We will move them to a `_archive/` directory to clear the workspace.

- `conductor/brand-ux-spec.md` (Previous v4.0 spec - contains good structure but visual direction is being reset)
- `design/unified-strategy.md` (Consolidated strategy - keep for reference)
- `design/copywriting_strategy.md` (Likely redundant with `copy-v4-chiseled.md`, but keep for safety)
- `conductor/layout-ux-spec.md`
- `conductor/handoff.md`

## 3. The Purge (DELETE)
These files are obsolete, failed experiments (Stitch), or generated noise.

**Stitch / Failed Experiments:**
- `design/code.html`
- `design/screen.png`
- `conductor/stitch-full-site.md`
- `conductor/brief-stitch-complet.md`
- `conductor/brief-stitch-en.md`
- `conductor/brief-stitch-homepage.md`
- `conductor/redesign-brief-stitch.md`
- `conductor/prompt-gemini-*.md`
- `conductor/design-agent-prompt.md`

**Obsolete Design Artifacts:**
- `design/mockups.md`
- `design/mockups/` (All images)
- `design/visily_prompts.md`
- `design/aci_screens.md`
- `design/design_system.md` (Old spec)
- `design/theme.md`

## 4. The Reset (CODE)
- `src/app/globals.css`: Reset to a minimal, clean state (no Stitch variables).
- `src/app/(marketing)/page.tsx`: Reset to a skeleton structure using the Wording from `copy-v4-chiseled.md`.

## 5. Next Steps (PLANNING)
Once the cleanup is done, we will create a **New Design System Plan** (`plans/design-system-v5.md`) that starts from the "Observatory/House" metaphor but defines a new, ambitious visual direction (likely "Swiss Minimalism" pushed further).
