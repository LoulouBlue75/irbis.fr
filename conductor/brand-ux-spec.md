# IRBIS — Brand & UX Specification

> **Version**: 1.0
> **Status**: Working Document
> **Purpose**: Actionable specs for Visily mockups
> **Language**: English-first (FR adaptation follows)

---

## 1. DECISIONS LOCKED

### Tagline (Final)
**"High standards. Shared ambition."**

### UVP (Final)
**"Executive Search with Adaptive Precision."**

### Tone (3 traits)
| Trait | Meaning | Avoid |
|-------|---------|-------|
| **Engaged** | We step in, we challenge, we carry | Passive observer language |
| **Demanding** | High bar, precise, no fluff | Vague claims, superlatives |
| **Benevolent** | Respectful, human, kind | Cold, transactional, cynical |

### Lexicon (Locked)
| Never | Always |
|-------|--------|
| Candidate | **Talent** |
| Job offer | **Mandate** |
| Matching | **Alignment** |
| Dashboard | **Console** |
| Recruiter | **Partner / Consultant** |
| CV | **Professional footprint** |
| Discreet | **Confidential by design** |

---

## 2. CTA HIERARCHY SYSTEM

### Levels
| Level | Style | Usage | Max per screen |
|-------|-------|-------|----------------|
| **Primary** | Solid gold (#BF9E59), white text | ONE main action | 1 |
| **Secondary** | Outline, navy text | Alternative path | 2 |
| **Tertiary** | Text link, underline on hover | Navigation, explore | Unlimited |

### Global CTAs (vocabulary)
| Action | CTA Text | Context |
|--------|----------|---------|
| Start engagement | "Discuss a search" | Homepage, contact |
| Learn method | "Explore the approach" | Homepage, services |
| Enter app | "Enter the Console" | Logged users |
| Go to portal | "Visit [Portal Name]" | Ecosystem links |
| Submit info | "Submit" / "Send" | Forms |
| View details | "View" / "Explore" | Lists |

---

## 3. HOMEPAGE SPECIFICATION

### Structure (7 sections)

```
┌─────────────────────────────────────────┐
│ HEADER (fixed)                          │
│ Logo | Nav | CTA                        │
├─────────────────────────────────────────┤
│ 1. HERO — The threshold                 │
│    Headline + Subhead + Primary CTA     │
├─────────────────────────────────────────┤
│ 2. WHAT WE DO — The study               │
│    3 pillars (cards)                    │
├─────────────────────────────────────────┤
│ 3. HOW WE WORK — The method             │
│    4 steps (Align, Map, Understand,     │
│    Decide)                              │
├─────────────────────────────────────────┤
│ 4. WHY IRBIS — The difference           │
│    3 value props                        │
├─────────────────────────────────────────┤
│ 5. ECOSYSTEM — The portals              │
│    4 cards (Exec Search, Tailor Shift,  │
│    Paris, Coming next)                  │
├─────────────────────────────────────────┤
│ 6. FINAL CTA — The seal                 │
│    Headline + CTA                       │
├─────────────────────────────────────────┤
│ FOOTER                                  │
│ Links | Legal | Contact                 │
└─────────────────────────────────────────┘
```

### Section 1: HERO

**Layout**: Full viewport height, centered content, animated office visual background

| Element | Content (EN) | Notes |
|---------|--------------|-------|
| **Headline** | High standards. Shared ambition. | Display size, serif |
| **Subhead** | We help ambitious organisations make decisive appointments. | Body large, sans |
| **Primary CTA** | Discuss a search | Gold button |
| **Secondary CTA** | Explore the approach | Text link |

**Visual**: Office/observatory aesthetic, muted, depth of field

---

### Section 2: WHAT WE DO

**Layout**: 3 equal columns (cards)

| Card | Title | Body | Link |
|------|-------|------|------|
| 1 | Executive Search | Leadership appointments and rare specialists — end-to-end, high bar, real cadence. | Explore Executive Search → |
| 2 | Decision Partnership | We spar with you: we challenge the brief, sharpen criteria, and make trade-offs explicit. | (no link) |
| 3 | Ecosystem | Specialised ventures and tools — dedicated sites, aligned with Irbis standard. | (no link) |

**Section headline**: (none — cards speak)

---

### Section 3: HOW WE WORK

**Layout**: 2x2 grid or 4 columns

**Section headline**: A disciplined process — fully engaged.

| Step | Title | Body |
|------|-------|------|
| 1 | Align | Define success, stakes, and non-negotiables. |
| 2 | Map | Research reality and approach the right people. |
| 3 | Understand | Assess trajectory, judgement, and fit with nuance. |
| 4 | Decide | Support the decision and close with control. |

---

### Section 4: WHY IRBIS

**Layout**: 3 columns

**Section headline**: Demanding, benevolent, accountable.

| Card | Title | Body |
|------|-------|------|
| 1 | We share ambition. | We help pull standards upward. |
| 2 | We don't hide behind a process. | We take responsibility for the outcome. |
| 3 | We respect people. | Talents and clients — always. |

---

### Section 5: ECOSYSTEM

**Layout**: 2x2 grid

**Section headline**: An ecosystem built around decisive appointments.

| Card | Title | Body | CTA |
|------|-------|------|-----|
| 1 | Executive Search | The flagship service for critical leadership hires. | Explore Executive Search → |
| 2 | Tailor Shift — by Irbis | Luxury retail recruitment on a dedicated platform. | Visit Tailor Shift → |
| 3 | Paris — by Irbis | Career perspective and guidance on a dedicated platform. | Visit Paris → |
| 4 | Coming next | New specialised services in development. | Discuss your context → |

---

### Section 6: FINAL CTA

**Layout**: Full width, centered, contrasting background

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Let's step into the arena together. |
| **Subhead** | Share the role and the stakes — we'll bring structure, clarity, and a high bar. |
| **Primary CTA** | Discuss a search |
| **Secondary CTA** | Explore Executive Search |

---

### HEADER

**Layout**: Fixed, transparent → solid on scroll

| Element | Content |
|---------|---------|
| Logo | IRBIS (wordmark, navy) |
| Nav links | Approach · Executive Search · References · Contact |
| Right | Tailor Shift · Paris · [Login if auth] |
| CTA (optional) | Discuss a search |

**Notes**:
- Ecosystem links (Tailor Shift, Paris) are secondary, smaller
- Console/Hunting links only visible when logged in

---

### FOOTER

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Services | Company | Connect |
| Executive Search | About | Contact |
| Tailor Shift | Approach | LinkedIn |
| Paris | References | |
| | Careers | |

**Bottom**: © 2025 Irbis Partners. All rights reserved. | Privacy | Terms

---

## 4. PAGE: EXECUTIVE SEARCH

### Structure

```
┌─────────────────────────────────────────┐
│ HERO                                    │
│ Headline + Subhead                      │
├─────────────────────────────────────────┤
│ INTRO — What we do                      │
├─────────────────────────────────────────┤
│ THE SPARRING PARTNER — Differentiation  │
├─────────────────────────────────────────┤
│ WHAT TO EXPECT — Process                │
├─────────────────────────────────────────┤
│ 8D MATCHING — Method                    │
├─────────────────────────────────────────┤
│ CTA — Contact form                      │
└─────────────────────────────────────────┘
```

### Hero

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Leadership appointments that land. |
| **Subhead** | End-to-end executive search for organisations with a high bar. |

### The Sparring Partner

| Element | Content (EN) |
|---------|--------------|
| **Headline** | More than a search — a sparring partnership. |
| **Body** | We challenge the brief, test assumptions, and sharpen criteria. Not to complicate — to protect the decision. Ambition is easier to state than to execute. Our role is to make it executable. |

### What to Expect

4 items (same as homepage HOW WE WORK):
- Align
- Map
- Understand
- Decide

Add line: **"A partner who raises the bar — and stays accountable until the appointment lands."**

### 8D Matching

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Alignment on 8 dimensions. |
| **Body** | We assess fit across competencies, leadership style, trajectory, values, potential, culture, adaptability, and vision. Not a checklist — a structured way to understand complexity. |

Visual: 8-point radar or simple list

### CTA Section

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Ready to discuss a mandate? |
| **Form fields** | Name, Email, Company, Role (optional), Message |
| **Submit CTA** | Submit |

---

## 5. PAGE: APPROACH

### Structure

```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ PILLARS — Discipline, Presence,         │
│           Illumination, Elevation       │
├─────────────────────────────────────────┤
│ PROCESS — 4 steps                       │
├─────────────────────────────────────────┤
│ CONFIDENTIALITY — By design             │
├─────────────────────────────────────────┤
│ CTA                                     │
└─────────────────────────────────────────┘
```

### Hero

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Method, with heart. |
| **Subhead** | A structured process that respects human complexity. |

### Pillars (4 cards)

| Pillar | Title | Body |
|--------|-------|------|
| 1 | Discipline | A structured process that respects complexity without becoming rigid. |
| 2 | Presence | We listen, we read nuance, we hold the human reality of decisions. |
| 3 | Illumination | We surface signal and explain trade-offs — so decisions are defensible. |
| 4 | Elevation | We share your ambition — and help pull the organisation upward. |

### Confidentiality

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Confidential by design. |
| **Body** | Talents are only visible when actively matched. Salaries are verified but masked. Budgets and sensitive identities are protected. This is not discretion — it's structure. |

---

## 6. PAGE: CONTACT

### Structure

```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ FORM + SIDEBAR                          │
│ [Form]        [Info / Location]         │
└─────────────────────────────────────────┘
```

### Hero

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Let's talk. |
| **Subhead** | Share your context — we'll determine together if we can help. |

### Form

| Field | Type | Required |
|-------|------|----------|
| Name | Text | Yes |
| Email | Email | Yes |
| Company | Text | Yes |
| Role to fill | Text | No |
| Message | Textarea | Yes |

**Submit CTA**: Send

### Sidebar

| Element | Content |
|---------|---------|
| **Location** | Paris, France |
| **Response** | We typically respond within 24 hours. |
| **Existing client?** | Enter the Console → |

---

## 7. CONSOLE (HUNTING) — HIGH LEVEL

### Navigation

| Item | Route |
|------|-------|
| Overview | /hunting/dashboard |
| Mandates | /hunting/mandates |
| Talents | /hunting/talents |
| Settings | /hunting/settings |

### Dashboard widgets

| Widget | Content |
|--------|---------|
| Active mandates | Count + list |
| Talents in pipeline | Count |
| Recent activity | Timeline |
| Quick actions | New mandate, Search talents |

### Vocabulary in UI

| Element | Label |
|---------|-------|
| Job listing | Mandate |
| Candidate card | Talent |
| Match score | Alignment index |
| Status badges | Active, In progress, Closed |

---

## 8. VISUAL PRINCIPLES (for Visily)

### Colors
- **Primary**: Ink Navy #0F1A2E (text, structure)
- **Accent**: Foil Gold #BF9E59 (CTAs, highlights — rare)
- **Background**: Ivory #F6F1E7 (main), White #FFFFFF (cards)
- **Secondary text**: Stone #CFC8BB

### Typography
- **Headlines**: Serif (editorial feel)
- **Body/UI**: Sans-serif (Geist)
- **Hierarchy**: Display > H1 > H2 > H3 > Body > Labels

### Spacing
- Section padding: 80px vertical
- Card padding: 24px
- Grid gap: 32px
- Touch targets: min 44x44px

### Components
- Cards: Light border (#e5e5e5), subtle hover shadow
- Buttons: 12px 24px padding, 6px radius
- Forms: Labels above, visible focus state

---

## 9. NEXT STEPS

- [ ] Validate homepage copy (this document)
- [ ] Create Visily mockup for homepage
- [ ] Iterate on executive-search page
- [ ] Define console UI patterns
- [ ] FR adaptation of all copy

---

*Document created: 2024-12-27*
*Reference: design/unified-strategy.md*
