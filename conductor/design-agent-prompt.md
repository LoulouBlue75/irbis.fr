# Design Agent Prompt — IRBIS

> **For**: Gemini, GPT-4V, Claude Vision, or any AI design agent
> **Input**: This prompt + brand-ux-spec.md
> **Output**: High-fidelity mockups following the spec

---

## CONTEXT

You are designing the UI for **IRBIS**, a premium executive search platform. The company connects ambitious organisations with exceptional leadership talent through a proprietary 8-dimension alignment methodology.

**Brand Positioning**: High-end, methodical, human-centered. Think: top-tier law firm meets modern SaaS.

**Key Words**: Demanding, Benevolent, Engaged. Premium without being cold. Structured without being rigid.

---

## YOUR MISSION

Generate high-fidelity UI mockups that follow the design system in `brand-ux-spec.md`. Every visual decision must reference the spec.

---

## WORKFLOW (Follow This Order)

### Phase 1: Understand the System
1. Read `brand-ux-spec.md` completely
2. Internalize PART A (Design Foundations): colors, typography, spacing, shadows
3. Internalize PART B (Component Library): buttons, cards, inputs, navigation
4. Note PART C (Brand Identity): tone, lexicon, CTA rules

### Phase 2: Generate Components First
Before any page, create a component sheet showing:
- All button variants (Primary, Secondary, Ghost, Destructive) in all states
- Card variants (Default, Editorial, Stats, Interactive)
- Input states (Default, Focus, Error, Disabled)
- Badge variants
- Navigation elements (Header, Sidebar, Footer)

### Phase 3: Generate Pages
For each page in PART D, create:
1. Desktop view (1440px width)
2. Tablet view (768px width) — optional
3. Mobile view (375px width)

---

## DESIGN RULES (Non-Negotiable)

### Colors
```
Primary:     #0F1A2E (Ink Navy) — text, structure
Accent:      #BF9E59 (Foil Gold) — CTAs only, use sparingly
Background:  #F6F1E7 (Ivory) — editorial sections
Surface:     #FFFFFF — cards, forms
Secondary:   #CFC8BB (Stone) — muted text, borders
```

**RULE**: Gold appears ONLY on primary CTAs. Maximum 1 primary CTA per screen.

### Typography
- Headlines: Serif font (Georgia, Times New Roman, or premium serif)
- Body/UI: Sans-serif (Geist Sans, Inter, or system-ui)
- Display: 56px / H1: 40px / H2: 32px / H3: 24px / Body: 16px

### Spacing
- Section gaps: 80px (desktop), 48px (mobile)
- Card padding: 24px
- Card gaps: 24px
- Base unit: 8px grid

### Components
- Button radius: 6px
- Card radius: 8px
- Modal radius: 12px
- Touch targets: minimum 44px height

---

## AESTHETIC DIRECTION

### DO
- Clean, generous whitespace
- Subtle shadows (only on hover/elevation)
- Muted photography with depth of field
- Typography-driven layouts
- Calm, controlled animations
- Professional, serious tone

### DON'T
- Gradients (except very subtle on photos)
- Bright colors or high saturation
- Playful or bouncy elements
- Dense, cramped layouts
- Stock photo clichés (handshakes, suits smiling)
- Generic SaaS aesthetics

### Visual References (Spirit, not copy)
- Apple.com (whitespace, typography)
- Stripe.com (clarity, precision)
- Notion.so (clean UI, clear hierarchy)
- Squarespace templates (editorial feel)

---

## PAGE-BY-PAGE INSTRUCTIONS

### Homepage
- Hero: Full viewport, centered headline (serif, 56px), subtle office/observatory background
- Sections alternate: ivory bg → white bg → ivory bg
- Cards: 3-column grid on desktop, stack on mobile
- Footer: Navy background, white text

### Executive Search
- Focus on the "sparring partner" concept
- Include 8D radar visualization (octagon shape)
- Contact form at bottom

### Console (Hunting App)
- Sidebar navigation (240px, collapsible)
- Bento-style dashboard with stat cards
- Tables with clear hierarchy
- Kanban for mandate pipeline

---

## OUTPUT FORMAT

For each screen, provide:
1. **Mockup image** (high-fidelity, realistic)
2. **Annotations** (optional): Note any spec references

Name files: `[page]-[viewport].png`
- `homepage-desktop.png`
- `homepage-mobile.png`
- `console-dashboard-desktop.png`

---

## VALIDATION CHECKLIST

Before delivering any mockup, verify:

- [ ] Only 1 gold primary CTA per screen
- [ ] Typography matches spec (serif headlines, sans body)
- [ ] Colors match hex values exactly
- [ ] Spacing follows 8px grid
- [ ] Touch targets ≥ 44px
- [ ] Component styles match library
- [ ] Lexicon correct (Talent not Candidate, Mandate not Job)
- [ ] Premium, calm feel — not busy or flashy

---

## EXAMPLE PROMPT FOR SINGLE PAGE

```
Generate a high-fidelity desktop mockup (1440x900) for the IRBIS Homepage following brand-ux-spec.md.

Structure:
- Fixed header: Logo (left), Nav links (center), "Discuss a search" CTA (right, gold button)
- Hero section: Full viewport, headline "High standards. Shared ambition." (serif, 56px, centered), subhead below, two CTAs
- Background: Subtle office imagery, muted, depth of field

Colors: #0F1A2E (navy text), #BF9E59 (gold CTA), #F6F1E7 (ivory sections), #FFFFFF (cards)

Style: Premium, editorial, calm. Apple.com meets high-end law firm.
```

---

*Use this prompt with the full brand-ux-spec.md document for best results.*
