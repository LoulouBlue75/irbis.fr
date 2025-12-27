# IRBIS — Brand & UX Specification v4.0

> **Impact maximum. Mots minimum.**

---

# A. DESIGN SYSTEM

## 1. Colors

```
--ink:    #0F1A2E    Text, structure
--gold:   #BF9E59    CTA only (rare)
--ivory:  #F6F1E7    Backgrounds
--white:  #FFFFFF    Cards, forms
--stone:  #CFC8BB    Secondary
```

| Semantic | Hex |
|----------|-----|
| success | #059669 |
| warning | #D97706 |
| error | #DC2626 |

**Règle** : Gold = 1 CTA max par écran.

---

## 2. Typography

| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| display | 56px | 700 | Hero only |
| h1 | 40px | 600 | Page titles |
| h2 | 32px | 600 | Sections |
| h3 | 24px | 600 | Cards |
| body | 16px | 400 | Text |
| caption | 12px | 400 | Meta |

**Fonts** : Serif (headlines) · Geist Sans (body)

---

## 3. Spacing

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 48px |
| 2xl | 80px |

**Section gap** : 80px (desktop) · 48px (mobile)

---

## 4. Components

### Buttons
| Variant | Style | Usage |
|---------|-------|-------|
| Primary | Gold bg, white text | 1 max/screen |
| Secondary | Outline ink | Alt actions |
| Ghost | Text only | Navigation |

**Specs** : Height 44px · Radius 6px · Font 500

### Cards
| Variant | Background | Border |
|---------|------------|--------|
| Default | White | 1px gray |
| Editorial | Ivory | 1px gray |
| Interactive | White | Shadow on hover |

**Specs** : Padding 24px · Radius 8px · Gap 24px

### Inputs
**Specs** : Height 44px · Radius 6px · Border 1px
**Focus** : Gold border · 2px ring

### Badges
| State | Colors |
|-------|--------|
| Active | Green bg/text |
| Progress | Amber bg/text |
| Closed | Gray bg/text |

---

## 5. Layout

| Element | Spec |
|---------|------|
| Max width | 1280px |
| Header | 64px fixed |
| Sidebar | 240px / 64px collapsed |
| Footer | Ink bg, 64px padding |

**Breakpoints** : 640 · 768 · 1024 · 1280

---

# B. COPY RULES

## Densité

| Élément | Max |
|---------|-----|
| Headline | 5 mots |
| Body | 12 mots |
| CTA | 3 mots |

## Lexique

| ❌ | ✓ |
|----|---|
| Candidate | Talent |
| Job | Mandate |
| Match | Alignment |
| Dashboard | Console |
| CV | Profile |

## CTA Hierarchy

| Level | Style | Example |
|-------|-------|---------|
| Primary | Gold | "Start a conversation" |
| Secondary | Outline | "The approach →" |
| Tertiary | Text | "Learn more →" |

---

# C. PAGES

## Homepage

```
┌─────────────────────────────────┐
│ HEADER                          │
├─────────────────────────────────┤
│ HERO                            │
│ "High standards. Shared         │
│  ambition."                     │
│ Executive search. Adaptive      │
│ precision.                      │
│ [Start a conversation]          │
├─────────────────────────────────┤
│ WHAT WE DO — 3 cards            │
├─────────────────────────────────┤
│ METHOD — 4 steps                │
│ "Four steps. Full commitment."  │
├─────────────────────────────────┤
│ WHY — 3 statements              │
│ "Three commitments."            │
├─────────────────────────────────┤
│ ECOSYSTEM — 4 cards             │
├─────────────────────────────────┤
│ CTA                             │
│ "Let's talk."                   │
├─────────────────────────────────┤
│ FOOTER                          │
└─────────────────────────────────┘
```

### Hero
| Element | Copy |
|---------|------|
| Headline | High standards. Shared ambition. |
| Sub | Executive search. Adaptive precision. |
| CTA | Start a conversation |

### What We Do
| Card | Title | Body |
|------|-------|------|
| 1 | Executive Search | Leadership roles. Rare specialists. End-to-end. |
| 2 | Sparring Partner | We challenge the brief. You own the decision. |
| 3 | Ecosystem | Specialised ventures. Same standard. |

### Method
**Headline** : Four steps. Full commitment.

| # | Word | Sub |
|---|------|-----|
| 1 | Align | Stakes. Success. Non-negotiables. |
| 2 | Map | Research. Access. Reality. |
| 3 | Understand | Trajectory. Judgement. Fit. |
| 4 | Decide | Support. Control. Close. |

### Why Irbis
**Headline** : Three commitments.

| # | Statement |
|---|-----------|
| 1 | We share your ambition. |
| 2 | We own the outcome. |
| 3 | We respect people. |

### Ecosystem
| Card | Name | Line | CTA |
|------|------|------|-----|
| 1 | Executive Search | Flagship service. | Explore → |
| 2 | Tailor Shift | Luxury retail. | Visit → |
| 3 | Paris | Career clarity. | Visit → |
| 4 | Next | In development. | Contact → |

### Final CTA
| Element | Copy |
|---------|------|
| Headline | Let's talk. |
| CTA | Start a conversation |

---

## Executive Search

### Hero
| Element | Copy |
|---------|------|
| Headline | Appointments that land. |
| Sub | End-to-end. High bar. Real cadence. |

### Sections
| Section | Headline | Content |
|---------|----------|---------|
| Sparring | More than search. | We challenge the brief. Test assumptions. Sharpen criteria. |
| 8D | Eight dimensions. | Radar visual. No extra text. |
| CTA | Discuss a mandate. | Form: Name, Email, Company, Message → Send |

---

## Approach

### Hero
| Element | Copy |
|---------|------|
| Headline | Method. Heart. |
| Sub | Structure that respects complexity. |

### Pillars
| # | Word | Sub |
|---|------|-----|
| 1 | Discipline | Rigour without rigidity. |
| 2 | Presence | Nuance. Human reality. |
| 3 | Illumination | Signal. Trade-offs. Clarity. |
| 4 | Elevation | Standards pulled upward. |

### Confidentiality
| Element | Copy |
|---------|------|
| Headline | Confidential by design. |
| Body | Visibility on match only. Salaries masked. Identities protected. |

---

## About

### Hero
| Element | Copy |
|---------|------|
| Headline | Method-obsessed. Human-led. |

### Vision
| Element | Copy |
|---------|------|
| Quote | "Technology amplifies the human. Never replaces." |

### AI
**Headline** : AI-augmented. Human-guided.

| # | Line |
|---|------|
| 1 | AI proposes. Humans decide. |
| 2 | Data stays here. |
| 3 | Decisions are explainable. |
| 4 | Every interaction teaches. |

### Stats
| Value | Label |
|-------|-------|
| 8D | Dimensions |
| 100% | Commitment |
| ∞ | Potential |

---

## References

### Hero
| Element | Copy |
|---------|------|
| Headline | Proof. |
| Sub | Selected outcomes. |

### Case Format
```
[Sector] — [Role]
[Result]. [Timeline].
```

### Stats
| Value | Label |
|-------|-------|
| 95%+ | Alignment |
| 8 wks | Avg. time |
| 90% | 2yr retention |

---

## Contact

### Hero
| Element | Copy |
|---------|------|
| Headline | Let's talk. |

### Form
Name · Email · Company · Role (opt) · Message → **Send**

### Sidebar
Paris · 24h response · Console →

---

## Login

| Element | Copy |
|---------|------|
| Headline | Console |
| Tag | Where decisions take shape. |
| CTA | Enter |

---

## Tailor Shift

### Hero
| Element | Copy |
|---------|------|
| Headline | Luxury retail. Adaptive precision. |
| CTA | Enter Tailor Shift → |

### Cards
| # | Title | Body |
|---|-------|------|
| 1 | Service | The art of client experience. |
| 2 | Expertise | Luxury codes. International standards. |
| 3 | Alignment | 8D methodology. Precise matching. |

---

## Paris

### Hero
| Element | Copy |
|---------|------|
| Headline | Know your profile. |
| Sub | 8 dimensions. One clarity. |
| CTA | Enter Paris → |

### Cards
| # | Title | Body |
|---|-------|------|
| 1 | Clarity | Strengths. Gaps. Direction. |
| 2 | Guidance | Recommendations based on you. |
| 3 | Confidence | Know what makes you different. |

---

## Console (App)

### Navigation
Overview · Mandates · Talents · Settings

### Dashboard
Stats: Active · Pipeline · Alignments · Placed
Actions: New Mandate · Talent Pool

### Mandates
Table: Title · Status · Talents · Alignment · Created
Empty: "No mandates yet. Create one →"

### Talents
Table: Name · Title · Status · Skills
Empty: "No talents yet. Add one →"

### Talent Detail
Tabs: Profile · 8D · History · Mandates

---

# D. CHECKLIST

## Copy
- [ ] Headline ≤ 5 mots
- [ ] Body ≤ 12 mots
- [ ] Lexique respecté
- [ ] Peut-on couper encore ?

## Design
- [ ] 1 gold CTA max/screen
- [ ] Spacing cohérent
- [ ] Hierarchy claire
- [ ] Mobile vérifié

---

*v4.0 — Ciselé*
