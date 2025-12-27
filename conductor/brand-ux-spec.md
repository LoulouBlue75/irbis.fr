# IRBIS — Brand & UX Specification

> **Version**: 3.0
> **Status**: Complete - Ready for Design Agent
> **Purpose**: Master spec for AI design generation and code implementation
> **Language**: English-first (FR adaptation follows)

---

# PART A: DESIGN FOUNDATIONS

## 1. COLOR SYSTEM

### Primary Palette
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **ink-navy** | #0F1A2E | 15, 26, 46 | Text, headers, structure, footer |
| **foil-gold** | #BF9E59 | 191, 158, 89 | Primary CTA, accent (use sparingly) |
| **ivory** | #F6F1E7 | 246, 241, 231 | Page backgrounds, editorial sections |
| **white** | #FFFFFF | 255, 255, 255 | Cards, inputs, modal backgrounds |
| **stone** | #CFC8BB | 207, 200, 187 | Secondary text, borders |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| success | #059669 | Confirmations, positive states |
| warning | #D97706 | Alerts, in-progress |
| error | #DC2626 | Errors, destructive actions |
| info | #2563EB | Information, links |

### Gray Scale (UI)
| Token | Hex | Usage |
|-------|-----|-------|
| gray-50 | #FAFAFA | Subtle backgrounds |
| gray-100 | #F5F5F5 | Disabled states, table headers |
| gray-200 | #E5E5E5 | Borders, dividers |
| gray-300 | #D4D4D4 | Disabled borders |
| gray-400 | #A3A3A3 | Placeholder text |
| gray-500 | #737373 | Secondary text |
| gray-600 | #525252 | Body text |
| gray-900 | #171717 | Primary text (alternative to ink-navy) |

### Color Rules
- **Gold is rare**: Only for primary CTAs and key accents
- **Navy dominates**: Structure, text, professionalism
- **Ivory for warmth**: Editorial sections, marketing pages
- **White for clarity**: Cards, forms, app interfaces

---

## 2. TYPOGRAPHY

### Font Stack
| Role | Font | Fallback |
|------|------|----------|
| **Headlines (editorial)** | System serif | Georgia, Times New Roman |
| **Body / UI** | Geist Sans | system-ui, sans-serif |
| **Code** | Geist Mono | monospace |

### Type Scale
| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **display** | 56px | 700 | 1.1 | -0.02em | Hero headlines only |
| **h1** | 40px | 600 | 1.2 | -0.01em | Page titles |
| **h2** | 32px | 600 | 1.25 | 0 | Section titles |
| **h3** | 24px | 600 | 1.3 | 0 | Card titles, subsections |
| **h4** | 20px | 600 | 1.4 | 0 | Minor headings |
| **body-lg** | 18px | 400 | 1.6 | 0 | Lead paragraphs, emphasis |
| **body** | 16px | 400 | 1.6 | 0 | Default body text |
| **body-sm** | 14px | 400 | 1.5 | 0 | Secondary text, captions |
| **caption** | 12px | 400 | 1.4 | 0.02em | Labels, hints, metadata |
| **overline** | 12px | 600 | 1.4 | 0.1em | Category labels (uppercase) |

### Typography Rules
- Headlines use serif (editorial feel)
- Body/UI uses Geist Sans (clean, modern)
- Never use more than 2 font weights per element
- Max line width: 65-75 characters for readability

---

## 3. SPACING SYSTEM

### Scale (8px base)
| Token | Value | Usage |
|-------|-------|-------|
| **space-0** | 0 | Reset |
| **space-1** | 4px | Micro gaps (icon-text) |
| **space-2** | 8px | Inline elements, tight groups |
| **space-3** | 12px | Compact padding (badges, tags) |
| **space-4** | 16px | Default gap, form fields |
| **space-5** | 20px | Medium padding |
| **space-6** | 24px | Card padding, component gaps |
| **space-8** | 32px | Section internal gap |
| **space-10** | 40px | Large gaps |
| **space-12** | 48px | Section breaks |
| **space-16** | 64px | Page margins, footer padding |
| **space-20** | 80px | Hero padding, major section gaps |
| **space-24** | 96px | Extra large spacing |

### Spacing Rules
- Use consistent spacing within component families
- Section gaps: 80px (desktop), 48px (mobile)
- Card gaps: 24px (grid), 16px (list)
- Form field gaps: 16px vertical

---

## 4. SHADOWS

| Token | Value | Usage |
|-------|-------|-------|
| **shadow-none** | none | Default flat state |
| **shadow-sm** | 0 2px 8px rgba(0,0,0,0.04) | Card hover, subtle lift |
| **shadow-md** | 0 4px 16px rgba(0,0,0,0.08) | Dropdowns, popovers |
| **shadow-lg** | 0 8px 24px rgba(0,0,0,0.12) | Modals, dialogs |
| **shadow-xl** | 0 16px 48px rgba(0,0,0,0.16) | Major overlays (rare) |

### Shadow Rules
- No shadows on static elements
- Shadows appear on interaction (hover) or elevation (modals)
- Premium = subtle, not dramatic

---

## 5. BORDER RADIUS

| Token | Value | Usage |
|-------|-------|-------|
| **radius-none** | 0 | Sharp edges (rare) |
| **radius-sm** | 4px | Badges, tags |
| **radius-md** | 6px | Buttons, inputs |
| **radius-lg** | 8px | Cards |
| **radius-xl** | 12px | Modals, large containers |
| **radius-full** | 9999px | Pills, avatars |

---

## 6. BREAKPOINTS

| Token | Min Width | Target |
|-------|-----------|--------|
| **sm** | 640px | Large phones, small tablets |
| **md** | 768px | Tablets |
| **lg** | 1024px | Laptops |
| **xl** | 1280px | Desktops |
| **2xl** | 1536px | Large monitors |

### Layout Rules
- Mobile-first approach
- Max content width: 1280px
- Container padding: 16px (mobile), 24px (tablet), 32px (desktop)

---

## 7. ANIMATION

### Timing
| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| **instant** | 0ms | — | No animation |
| **micro** | 150ms | ease | Hover, focus, small states |
| **standard** | 250ms | ease-out | Transitions, reveals |
| **complex** | 300ms | cubic-bezier(0.4, 0, 0.2, 1) | Modals, menus, page transitions |
| **slow** | 500ms | ease-in-out | Major reveals (rare) |

### Animation Rules
- Only animate `transform` and `opacity` for performance
- Never bouncy or playful — calm, controlled, premium
- Reduce motion for users who prefer it (prefers-reduced-motion)
- Entrance: fade in + subtle translate up
- Exit: fade out (no translate)

---

## 8. Z-INDEX SCALE

| Token | Value | Usage |
|-------|-------|-------|
| **z-base** | 0 | Default layer |
| **z-dropdown** | 10 | Dropdowns, selects |
| **z-sticky** | 20 | Sticky headers |
| **z-fixed** | 30 | Fixed elements |
| **z-modal-backdrop** | 40 | Modal overlay |
| **z-modal** | 50 | Modal content |
| **z-toast** | 60 | Notifications |

---

# PART B: COMPONENT LIBRARY

## 9. BUTTONS

### Variants
| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| **Primary** | foil-gold #BF9E59 | white | none | Main CTA — MAX 1 per screen |
| **Secondary** | transparent | ink-navy | 1px ink-navy | Alternative actions |
| **Ghost** | transparent | ink-navy | none | Tertiary, navigation, text links |
| **Destructive** | error #DC2626 | white | none | Delete, cancel (confirm first) |
| **Disabled** | gray-100 | gray-400 | none | Inactive state |

### Sizes
| Size | Height | Padding | Font Size | Icon Size |
|------|--------|---------|-----------|-----------|
| **sm** | 32px | 8px 16px | 14px | 16px |
| **md** | 40px | 12px 24px | 16px | 20px |
| **lg** | 48px | 16px 32px | 18px | 24px |

### States
| State | Visual Change |
|-------|---------------|
| Default | As defined |
| Hover | Darken background 10% |
| Focus | 2px ring offset, gold outline |
| Active | Darken 15%, slight scale down (0.98) |
| Disabled | 50% opacity, cursor: not-allowed |
| Loading | Spinner replaces text, maintain width |

### Specs
- Border radius: 6px (radius-md)
- Font weight: 500
- Transition: 150ms ease
- Min touch target: 44px
- Icon + text gap: 8px

---

## 10. CARDS

### Variants
| Variant | Background | Border | Shadow | Usage |
|---------|------------|--------|--------|-------|
| **Default** | white | 1px gray-200 | none | Standard content containers |
| **Editorial** | ivory | 1px gray-300 | none | Marketing, testimonials, quotes |
| **Stats** | white | 1px gray-200 | none | Dashboard metrics, KPIs |
| **Interactive** | white | 1px gray-200 | shadow-sm on hover | Clickable cards (mandates, talents) |
| **Selected** | white | 1px foil-gold | shadow-sm | Currently selected item |

### Specs
- Padding: 24px
- Border radius: 8px (radius-lg)
- Gap between cards: 24px (grid), 16px (list)
- Minimum card width: 280px
- Title: h3 or h4
- Body text: body or body-sm

### Card Anatomy
```
┌──────────────────────────────────┐
│ [Icon/Image]           [Badge]   │  ← Optional header row
├──────────────────────────────────┤
│ Title                            │  ← Required
│ Subtitle / Meta                  │  ← Optional
├──────────────────────────────────┤
│ Body content...                  │  ← Optional
├──────────────────────────────────┤
│ [Secondary]        [Primary →]   │  ← Optional actions
└──────────────────────────────────┘
```

---

## 11. INPUTS

### Variants
| Variant | Icon Position | Usage |
|---------|---------------|-------|
| **Text** | None | Standard single-line input |
| **Search** | Left (search icon) | Search fields |
| **Password** | Right (toggle) | Password with visibility toggle |
| **Textarea** | None | Multi-line text |
| **Select** | Right (chevron) | Dropdown selection |

### States
| State | Border | Background | Label Color | Helper Color |
|-------|--------|------------|-------------|--------------|
| Default | gray-200 | white | gray-600 | gray-500 |
| Focus | foil-gold | white | ink-navy | gray-500 |
| Error | error | #FEF2F2 | error | error |
| Disabled | gray-200 | gray-50 | gray-400 | gray-400 |
| Success | success | white | gray-600 | success |

### Specs
- Height: 44px (touch-friendly)
- Padding: 12px 16px
- Border radius: 6px
- Border width: 1px
- Font size: 16px (prevents iOS zoom)
- Label: 14px, font-weight 500, margin-bottom 6px
- Helper text: 12px, margin-top 4px
- Placeholder: gray-400

### Input Anatomy
```
Label*
┌──────────────────────────────────┐
│ Placeholder text                 │
└──────────────────────────────────┘
Helper text or error message
```

---

## 12. BADGES

### Variants
| Variant | Background | Text | Usage |
|---------|------------|------|-------|
| **Active** | #D1FAE5 | #065F46 | Active, open, available |
| **In Progress** | #FEF3C7 | #92400E | Ongoing, pending |
| **Closed** | gray-100 | gray-500 | Completed, inactive, archived |
| **New** | #DBEAFE | #1E40AF | New items, unread |
| **Urgent** | #FEE2E2 | #991B1B | High priority, attention needed |
| **Neutral** | gray-100 | gray-600 | Generic, uncategorized |

### Specs
- Padding: 4px 8px
- Border radius: 4px (radius-sm)
- Font size: 12px
- Font weight: 500
- No border
- Inline-flex, align-center

---

## 13. NAVIGATION

### Header (Marketing Site)
| Element | Spec |
|---------|------|
| Height | 64px |
| Background | Transparent → White on scroll |
| Position | Fixed, z-index: z-sticky |
| Logo | Left, ink-navy |
| Nav links | Center/right, 16px, weight 500, gap 32px |
| CTA | Right, Primary button sm |
| Mobile | Hamburger → Full-screen menu |

### Sidebar (Console/App)
| Element | Spec |
|---------|------|
| Width | 240px (expanded), 64px (collapsed) |
| Background | white or ink-navy (dark mode option) |
| Items | Icon (20px) + Label (14px), height 44px |
| Active state | Left border 3px foil-gold, bg tint |
| Hover | bg gray-50 |
| Collapse trigger | md breakpoint |

### Footer
| Element | Spec |
|---------|------|
| Background | ink-navy |
| Text color | white (primary), stone (secondary) |
| Padding | 64px vertical |
| Columns | 3-4, collapse to stack on mobile |
| Links | body-sm, hover: underline |
| Bottom bar | 16px top border (white 10% opacity) |

---

## 14. TABLES

### Specs
| Element | Spec |
|---------|------|
| Header row | bg gray-50, font-weight 600, 14px, sticky |
| Body row | bg white, border-bottom 1px gray-100 |
| Row hover | bg gray-50 |
| Cell padding | 12px 16px |
| Min row height | 52px |
| Actions column | Right-aligned, icon buttons |

### Empty State
- Centered content
- Illustration (optional)
- Headline (h3)
- Body text (body-sm)
- CTA button

---

## 15. MODALS & DIALOGS

### Sizes
| Size | Max Width | Usage |
|------|-----------|-------|
| **sm** | 400px | Confirmations, simple forms |
| **md** | 560px | Standard forms |
| **lg** | 720px | Complex content |
| **xl** | 900px | Large data displays (rare) |

### Specs
| Element | Spec |
|---------|------|
| Overlay | black 50% opacity |
| Container | bg white, radius-xl (12px), padding 24px |
| Header | Title (h3) left, close button (X) right |
| Body | padding 0, scrollable if needed |
| Footer | Actions right-aligned, gap 12px |
| Animation | Fade in + scale 0.95→1, 300ms |

### Modal Anatomy
```
┌─ Close (X) ─────────────────────┐
│ Title                           │
├─────────────────────────────────┤
│                                 │
│ Body content                    │
│                                 │
├─────────────────────────────────┤
│              [Cancel] [Confirm] │
└─────────────────────────────────┘
```

---

## 16. ICONS

### Library
**Lucide React** (already in project)

### Sizes
| Size | Dimensions | Stroke | Usage |
|------|------------|--------|-------|
| **xs** | 14x14 | 1.5px | Inline badges |
| **sm** | 16x16 | 1.5px | Body text, compact UI |
| **md** | 20x20 | 2px | Buttons, nav items |
| **lg** | 24x24 | 2px | Headers, features |
| **xl** | 32x32 | 2px | Empty states, marketing |

### Core Icons
| Icon Name | Usage |
|-----------|-------|
| Briefcase | Mandates |
| Users | Talents, team |
| Search | Search functionality |
| Plus | Create, add |
| ChevronRight | Navigate, expand |
| ChevronDown | Dropdowns |
| Check | Success, completed |
| X | Close, cancel, error |
| Settings | Settings, configuration |
| LogOut | Logout |
| Eye / EyeOff | Show/hide password |
| Mail | Email |
| Phone | Phone |
| MapPin | Location |
| Calendar | Dates |
| Filter | Filters |
| Download | Export |
| Upload | Import |

---

# PART C: BRAND IDENTITY

## 17. BRAND DECISIONS (LOCKED)

### Tagline
**"High standards. Shared ambition."**

### UVP (Unique Value Proposition)
**"Executive Search with Adaptive Precision."**

### Tone of Voice
| Trait | Meaning | Avoid |
|-------|---------|-------|
| **Engaged** | We step in, we challenge, we carry | Passive observer language |
| **Demanding** | High bar, precise, no fluff | Vague claims, superlatives |
| **Benevolent** | Respectful, human, kind | Cold, transactional, cynical |

### Lexicon (Use These Terms)
| Never Say | Always Say |
|-----------|------------|
| Candidate | **Talent** |
| Job offer | **Mandate** |
| Matching | **Alignment** |
| Dashboard | **Console** |
| Recruiter | **Partner / Consultant** |
| CV | **Professional footprint** |
| Discreet | **Confidential by design** |

---

## 18. CTA HIERARCHY

### Levels
| Level | Style | Usage | Max Per Screen |
|-------|-------|-------|----------------|
| **Primary** | Solid gold, white text | ONE main action | 1 |
| **Secondary** | Outline, navy text | Alternative path | 2 |
| **Tertiary** | Text link, underline hover | Navigation, explore | Unlimited |

### Standard CTA Texts
| Action | CTA Text | Context |
|--------|----------|---------|
| Start engagement | "Discuss a search" | Homepage, contact |
| Learn method | "Explore the approach" | Homepage, services |
| Enter app | "Enter the Console" | Logged users |
| Go to portal | "Visit [Portal Name]" | Ecosystem links |
| Submit info | "Submit" / "Send" | Forms |
| View details | "View" / "Explore" | Lists |

---

# PART D: PAGE SPECIFICATIONS

## 19. HOMEPAGE

### Structure
```
┌─────────────────────────────────────────┐
│ HEADER (fixed)                          │
│ Logo | Nav | CTA                        │
├─────────────────────────────────────────┤
│ 1. HERO — Full viewport                 │
│    Headline + Subhead + Primary CTA     │
├─────────────────────────────────────────┤
│ 2. WHAT WE DO — 3 cards                 │
├─────────────────────────────────────────┤
│ 3. HOW WE WORK — 4 steps                │
├─────────────────────────────────────────┤
│ 4. WHY IRBIS — 3 value props            │
├─────────────────────────────────────────┤
│ 5. ECOSYSTEM — 4 portal cards           │
├─────────────────────────────────────────┤
│ 6. FINAL CTA — Centered                 │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

### Section 1: HERO
| Element | Content | Spec |
|---------|---------|------|
| Headline | High standards. Shared ambition. | display, serif |
| Subhead | We help ambitious organisations make decisive appointments. | body-lg, sans |
| Primary CTA | Discuss a search | Primary button lg |
| Secondary CTA | Explore the approach | Ghost button |
| Background | Office/observatory visual, muted, depth of field | Full viewport |

### Section 2: WHAT WE DO
| Card | Title | Body |
|------|-------|------|
| 1 | Executive Search | Leadership appointments and rare specialists — end-to-end, high bar, real cadence. |
| 2 | Decision Partnership | We spar with you: we challenge the brief, sharpen criteria, and make trade-offs explicit. |
| 3 | Ecosystem | Specialised ventures and tools — dedicated sites, aligned with Irbis standard. |

### Section 3: HOW WE WORK
**Section headline**: A disciplined process — fully engaged.

| Step | Title | Body |
|------|-------|------|
| 1 | Align | Define success, stakes, and non-negotiables. |
| 2 | Map | Research reality and approach the right people. |
| 3 | Understand | Assess trajectory, judgement, and fit with nuance. |
| 4 | Decide | Support the decision and close with control. |

### Section 4: WHY IRBIS
**Section headline**: Demanding, benevolent, accountable.

| Card | Title | Body |
|------|-------|------|
| 1 | We share ambition. | We help pull standards upward. |
| 2 | We don't hide behind a process. | We take responsibility for the outcome. |
| 3 | We respect people. | Talents and clients — always. |

### Section 5: ECOSYSTEM
**Section headline**: An ecosystem built around decisive appointments.

| Card | Title | Body | CTA |
|------|-------|------|-----|
| 1 | Executive Search | The flagship service for critical leadership hires. | Explore → |
| 2 | Tailor Shift | Luxury retail recruitment on a dedicated platform. | Visit Tailor Shift → |
| 3 | Paris | Career perspective and guidance. | Visit Paris → |
| 4 | Coming next | New specialised services in development. | Discuss your context → |

### Section 6: FINAL CTA
| Element | Content |
|---------|---------|
| Headline | Let's step into the arena together. |
| Subhead | Share the role and the stakes — we'll bring structure, clarity, and a high bar. |
| Primary CTA | Discuss a search |

---

## 20. EXECUTIVE SEARCH PAGE

### Structure
```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ SPARRING PARTNER — Differentiation      │
├─────────────────────────────────────────┤
│ WHAT TO EXPECT — 4 steps                │
├─────────────────────────────────────────┤
│ 8D MATCHING — Method                    │
├─────────────────────────────────────────┤
│ CTA — Contact form                      │
└─────────────────────────────────────────┘
```

### Hero
| Element | Content |
|---------|---------|
| Headline | Leadership appointments that land. |
| Subhead | End-to-end executive search for organisations with a high bar. |

### The Sparring Partner
| Element | Content |
|---------|---------|
| Headline | More than a search — a sparring partnership. |
| Body | We challenge the brief, test assumptions, and sharpen criteria. Not to complicate — to protect the decision. |

### 8D Matching
| Element | Content |
|---------|---------|
| Headline | Alignment on 8 dimensions. |
| Body | We assess fit across competencies, leadership style, trajectory, values, potential, culture, adaptability, and vision. |
| Visual | 8-point radar chart or dimensional list |

### CTA Section
| Element | Content |
|---------|---------|
| Headline | Ready to discuss a mandate? |
| Form fields | Name*, Email*, Company*, Role (optional), Message* |
| Submit CTA | Submit |

---

## 21. APPROACH PAGE

### Structure
```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ PILLARS — 4 cards                       │
├─────────────────────────────────────────┤
│ PROCESS — 4 steps                       │
├─────────────────────────────────────────┤
│ CONFIDENTIALITY — Statement             │
├─────────────────────────────────────────┤
│ CTA                                     │
└─────────────────────────────────────────┘
```

### Hero
| Element | Content |
|---------|---------|
| Headline | Method, with heart. |
| Subhead | A structured process that respects human complexity. |

### Pillars
| # | Title | Body |
|---|-------|------|
| 1 | Discipline | A structured process that respects complexity without becoming rigid. |
| 2 | Presence | We listen, we read nuance, we hold the human reality of decisions. |
| 3 | Illumination | We surface signal and explain trade-offs — so decisions are defensible. |
| 4 | Elevation | We share your ambition — and help pull the organisation upward. |

### Confidentiality
| Element | Content |
|---------|---------|
| Headline | Confidential by design. |
| Body | Talents are only visible when actively matched. Salaries are verified but masked. Budgets and sensitive identities are protected. This is not discretion — it's structure. |

---

## 22. CONTACT PAGE

### Structure
```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ [Form 60%]           [Sidebar 40%]      │
└─────────────────────────────────────────┘
```

### Hero
| Element | Content |
|---------|---------|
| Headline | Let's talk. |
| Subhead | Share your context — we'll determine together if we can help. |

### Form
| Field | Type | Required |
|-------|------|----------|
| Name | text | Yes |
| Email | email | Yes |
| Company | text | Yes |
| Role to fill | text | No |
| Message | textarea | Yes |
| Submit | button primary | — |

### Sidebar
| Element | Content |
|---------|---------|
| Location | Paris, France |
| Response | We typically respond within 24 hours. |
| Link | Existing client? Enter the Console → |

---

## 23. ABOUT PAGE

### Structure
```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ VISION — Founder statement              │
├─────────────────────────────────────────┤
│ VALUES — 4 pillars                      │
├─────────────────────────────────────────┤
│ AI-AUGMENTED — Transparency             │
├─────────────────────────────────────────┤
│ STATS — 3 numbers                       │
├─────────────────────────────────────────┤
│ CTA                                     │
└─────────────────────────────────────────┘
```

### Hero
| Element | Content |
|---------|---------|
| Headline | Method-obsessed. Human-led. |
| Subhead | Irbis is built on a conviction: high-stakes decisions deserve disciplined method — and method must remain connected to human reality. |

### AI-Augmented
**Headline**: AI-augmented. Human-guided.

| # | Title | Body |
|---|-------|------|
| 1 | AI is an assistant | All recommendations are validated by human experts. AI proposes, humans decide. |
| 2 | Confidential by design | Sensitive data is never shared with third parties. |
| 3 | Explainable decisions | We can explain why a profile is recommended. |
| 4 | Continuous improvement | Every interaction teaches us. |

### Stats
| Stat | Value | Label |
|------|-------|-------|
| 1 | 8D | Dimensions of alignment |
| 2 | 100% | Commitment until appointment |
| 3 | ∞ | Potential for shared growth |

---

## 24. REFERENCES PAGE

### Structure
```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ CASE STUDIES — Cards                    │
├─────────────────────────────────────────┤
│ TESTIMONIALS — Quotes                   │
├─────────────────────────────────────────┤
│ STATS — Key metrics                     │
├─────────────────────────────────────────┤
│ CTA                                     │
└─────────────────────────────────────────┘
```

### Hero
| Element | Content |
|---------|---------|
| Headline | Proof in the work. |
| Subhead | Selected mandates and outcomes from our executive search practice. |

### Case Study Card Format
| Element | Structure |
|---------|-----------|
| Title | [Sector] — [Role level] |
| Challenge | 1-2 sentences |
| Outcome | Result with alignment score |
| Timeline | Duration |

### Stats Row
| # | Value | Label |
|---|-------|-------|
| 1 | 95%+ | Alignment success rate |
| 2 | 8 weeks | Average time to placement |
| 3 | 90% | Still in role after 2 years |

---

## 25. LOGIN PAGE

### Structure
```
┌─────────────────────────────────────────┐
│                                         │
│        [Logo]                           │
│        Enter the Console                │
│        Where decisions take shape.      │
│                                         │
│        ┌─────────────────────┐          │
│        │ Email               │          │
│        └─────────────────────┘          │
│        ┌─────────────────────┐          │
│        │ Password            │          │
│        └─────────────────────┘          │
│        [      Log in        ]           │
│        Don't have an account? Sign up   │
│        Forgot password?                 │
│                                         │
└─────────────────────────────────────────┘
```

### Specs
- Centered, minimal
- Dark/navy background option
- Link back to homepage

---

## 26. TAILOR SHIFT PORTAL

### Hero
| Element | Content |
|---------|---------|
| Logo | TAILOR SHIFT |
| Headline | Luxury retail recruitment with adaptive precision. |
| Subhead | An exclusive expertise dedicated to luxury houses and iconic brands. |
| Primary CTA | Visit Tailor Shift |

### Sections
1. **Mission** — 3 cards (Service Excellence, Retail Expertise, 8D Alignment)
2. **Expertise** — 2 columns (Luxury Houses, Key Roles)
3. **8D Applied** — 8 dimensions adapted to luxury
4. **Stats** — 3 metrics
5. **CTA** — External link
6. **Back link** — ← Back to Irbis Corporate

---

## 27. PARIS PORTAL

### Hero
| Element | Content |
|---------|---------|
| Logo | PARIS |
| Headline | The career tool par excellence. |
| Subhead | Discover your unique profile through our exclusive 8-dimension methodology. |
| Primary CTA | Visit Paris |

### Sections
1. **8D Test** — Profile discovery tool
2. **Benefits** — 3 cards (Career Clarity, Precise Guidance, Self-Confidence)
3. **Coaching** — Individual and Group offerings
4. **Synergy** — Paris × Irbis connection
5. **CTA** — External link

---

## 28. CONSOLE (HUNTING APP)

### Navigation (Sidebar)
| Item | Route | Icon |
|------|-------|------|
| Overview | /hunting/dashboard | Home |
| Mandates | /hunting/mandates | Briefcase |
| Talents | /hunting/talents | Users |
| Settings | /hunting/settings | Settings |

### Dashboard
- Stats row: 4 metric cards (Active Mandates, Talents in Pipeline, Alignments, Placements YTD)
- Recent Activity feed
- Quick actions: New Mandate, Talent Pool

### Mandates List
- Header: Title, New Mandate button, Status filter
- Table: Title, Status (badge), Talents (count), Alignment (%), Created, Actions

### Mandate Detail
- Split layout: Info (2/3) + Pipeline (1/3)
- Kanban: Identified → Contacted → Interview → Offer → Placed
- Aligned Talents section with 8D scores

### Talents List
- Header: Title, Add Talent button, Search, Filters
- Table/Grid: Name, Title, Status (badge), Skills (tags), Actions
- Card view option with 8D mini-radar

### Talent Detail
- Tabs: Profile, 8D Analysis, History, Mandates
- 8D radar chart visualization
- Activity timeline

---

# PART E: IMPLEMENTATION

## 29. QUICK REFERENCE

### Colors (Copy-Paste)
```css
--ink-navy: #0F1A2E;
--foil-gold: #BF9E59;
--ivory: #F6F1E7;
--white: #FFFFFF;
--stone: #CFC8BB;
```

### Key Dimensions
| Element | Value |
|---------|-------|
| Button radius | 6px |
| Card radius | 8px |
| Card padding | 24px |
| Section gap | 80px |
| Header height | 64px |
| Sidebar width | 240px |
| Touch target | min 44px |
| Max content width | 1280px |

---

## 30. VALIDATION CHECKLIST

| Page | Spec ✓ | Mockup | Code |
|------|--------|--------|------|
| Homepage | ✓ | ○ | ○ |
| Executive Search | ✓ | ○ | ○ |
| Approach | ✓ | ○ | ○ |
| About | ✓ | ○ | ○ |
| References | ✓ | ○ | ○ |
| Contact | ✓ | ○ | ○ |
| Login | ✓ | ○ | ○ |
| Tailor Shift | ✓ | ○ | ○ |
| Paris | ✓ | ○ | ○ |
| Console: Dashboard | ✓ | ○ | ○ |
| Console: Mandates | ✓ | ○ | ○ |
| Console: Talents | ✓ | ○ | ○ |

---

*Document created: 2024-12-27*
*Version 3.0 restructured: 2024-12-27*
*Structure: Foundations → Components → Brand → Pages*
