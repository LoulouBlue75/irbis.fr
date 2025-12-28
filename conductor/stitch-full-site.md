# IRBIS Partners — Complete Site Architecture

> **Purpose:** This document contains everything needed to build the complete IRBIS website. It includes the sitemap, all page content (wording), design specifications, and component definitions.

---

## 1. BRAND IDENTITY

### Company
**Irbis Partners** — Premium executive search firm based in Paris, France.

**Domain:** www.irbis.fr

**Tagline:** "High standards. Shared ambition."

### The Name
"Irbis" = Snow leopard in Russian. A rare, powerful, and elusive predator thriving in demanding environments. Embodies: precision, discretion, excellence.

### Positioning
- **Premium:** Demanding clients, strategic mandates
- **Methodical:** Structured process (8D methodology)
- **Human:** Technology serves people, never the reverse
- **Committed:** We own the outcome, we don't hide behind process

---

## 2. DESIGN SYSTEM

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Ink Navy** | `#0F1A2E` | Primary text, logo, footer background |
| **Foil Gold** | `#BF9E59` | Primary CTA buttons ONLY (use sparingly) |
| **Ivory** | `#F6F1E7` | Section backgrounds (alternating) |
| **White** | `#FFFFFF` | Cards, header |
| **Stone** | `#CFC8BB` | Secondary text, subtle elements |

### Typography
| Usage | Font Family | Weight |
|-------|-------------|--------|
| Headlines | Serif (Playfair Display, Georgia) | Bold/Semibold |
| Body/UI | Sans-serif (Inter, Geist, system) | Regular/Medium |

### Design Rules
1. **ONE gold button per viewport** — all other actions are text links
2. **Headlines: 5 words max** — Body: 12 words max
3. **Generous whitespace** — empty space is intentional
4. **No stock photos** of people in suits shaking hands
5. **No gradients, no flashy effects** — calm, controlled, premium
6. **Hierarchy is everything** — one focal point per section
7. **Serif for titles, sans for body** — never the reverse

### Vocabulary (Strict)
| Never Say | Always Say |
|-----------|------------|
| Candidate | **Talent** |
| Job offer | **Mandate** |
| Matching | **Alignment** |
| Dashboard | **Console** |
| Recruiter | **Partner** |
| CV / Resume | **Profile** |

---

## 3. SITE ARCHITECTURE

```
www.irbis.fr
│
├── MARKETING SITE (public)
│   ├── / ........................... Homepage
│   ├── /approach ................... The Approach (methodology)
│   ├── /executive-search ........... Executive Search (flagship service)
│   ├── /references ................. References (case studies)
│   ├── /about ...................... About (vision, team, AI transparency)
│   └── /contact .................... Contact (form)
│
├── PORTALS (public, branded separately)
│   ├── /tailor-shift ............... Tailor Shift (luxury retail)
│   └── /paris ...................... Paris (career guidance, 8D test)
│
├── AUTH
│   ├── /login ...................... Login
│   ├── /signup ..................... Sign up
│   └── /forgot-password ............ Password reset
│
└── CONSOLE (authenticated, app)
    ├── /console/dashboard .......... Overview
    ├── /console/mandates ........... Mandates list
    ├── /console/mandates/[id] ...... Mandate detail
    ├── /console/mandates/new ....... Create mandate
    ├── /console/talents ............ Talents list
    ├── /console/talents/[id] ....... Talent detail
    ├── /console/talents/new ........ Add talent
    └── /console/settings ........... Settings
```

---

## 4. GLOBAL COMPONENTS

### Header (Marketing Site)
```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]           Approach | Executive Search | References | Contact           [Start a conversation] │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 64px
- Background: White #FFFFFF
- Position: Fixed (sticky on scroll)
- Shadow: Subtle, appears on scroll

**Logo (left):**
- Snow leopard icon + "IRBIS" (navy) + "PARTNERS" (gold)
- Or just "IRBIS" in navy if space constrained

**Navigation (center):**
- Links: `Approach` | `Executive Search` | `References` | `Contact`
- Font: Sans-serif, 16px, navy #0F1A2E
- **4 links maximum**
- **NO:** Home, About, Services, Use Cases, Clients, Candidates

**CTA (right):**
- Text: "Start a conversation"
- Style: Gold button #BF9E59, white text
- Radius: 6px

### Footer (All Pages)
```
┌─────────────────────────────────────────────────────────────────┐
│ IRBIS          Services              Company            Connect │
│ [logo]         Executive Search      About              Contact │
│                Tailor Shift          Approach           LinkedIn│
│                Paris                 References                 │
│─────────────────────────────────────────────────────────────────│
│ © 2025 Irbis Partners                           Privacy · Terms │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Navy #0F1A2E
- Logo: White
- Column titles: 14px, semibold, white
- Links: 14px, regular, stone #CFC8BB
- Separator: White line at 10% opacity
- Copyright: 12px, stone

---

## 5. PAGE CONTENT & WORDING

---

### PAGE: HOMEPAGE `/`

#### Hero Section
**Background:** Ivory #F6F1E7 | **Height:** 100vh | **Layout:** Centered

```
High standards.
Shared ambition.

Executive search. Adaptive precision.

[Start a conversation]

The approach →
```

| Element | Specs |
|---------|-------|
| Main headline | Serif, 56px, bold, navy, centered |
| Subheadline | Sans-serif, 18px, regular, navy 80% opacity |
| Primary CTA | Gold button #BF9E59, white text, 16px |
| Secondary CTA | Sans-serif, 16px, navy, text link with arrow |

**Spacing:**
- Between headline lines: 8px
- Headline → subheadline: 24px
- Subheadline → button: 32px
- Button → text link: 24px

---

#### Section: What We Do
**Background:** White | **Layout:** 3 equal cards side by side | **No section title**

| Card | Title | Description | Link |
|------|-------|-------------|------|
| 1 | Executive Search | Leadership roles. Rare specialists. End-to-end. | Explore → |
| 2 | Sparring Partner | We challenge the brief. You own the decision. | — |
| 3 | Ecosystem | Specialised ventures. Same standard. | — |

**Card Specs:**
- Background: White #FFFFFF
- Border: 1px #E5E5E5
- Radius: 8px
- Padding: 24px
- Title: Sans-serif, 24px, semibold, navy
- Body: Sans-serif, 16px, regular, gray #525252
- Link: Sans-serif, 14px, medium, navy

---

#### Section: The Method
**Background:** Ivory #F6F1E7

**Title:** "Four steps. Full commitment."
- Serif, 32px, semibold, navy, centered

| Step | Word | Subtext |
|------|------|---------|
| 01 | Align | Stakes. Success. Non-negotiables. |
| 02 | Map | Research. Access. Reality. |
| 03 | Understand | Trajectory. Judgement. Fit. |
| 04 | Decide | Support. Control. Close. |

**Block Specs:**
- Background: White #FFFFFF
- Radius: 8px
- Padding: 24px
- Number: Sans-serif, 14px, bold, gold #BF9E59
- Word: Sans-serif, 20px, semibold, navy
- Subtext: Sans-serif, 14px, regular, gray

---

#### Section: Why Irbis
**Background:** White | **Layout:** Centered vertical list (no cards)

**Title:** "Three commitments."
- Serif, 32px, semibold, navy, centered

```
1. We share your ambition.
2. We own the outcome.
3. We respect people.
```

**Specs:**
- Sans-serif, 20px, medium, navy
- Spacing between items: 16px

---

#### Section: Ecosystem
**Background:** Ivory #F6F1E7 | **Layout:** 2×2 grid

**Title:** "The ecosystem."
- Serif, 32px, semibold, navy, centered

| Card | Name | Line | CTA |
|------|------|------|-----|
| 1 | Executive Search | Flagship service. | Explore → |
| 2 | Tailor Shift | Luxury retail. | Visit → |
| 3 | Paris | Career clarity. | Visit → |
| 4 | Next | In development. | Contact → |

**Card Specs:** Same as "What We Do" section, grid gap: 24px

---

#### Section: Final CTA
**Background:** Navy #0F1A2E | **Layout:** Full width, centered

```
Let's talk.

[Start a conversation]
```

**Specs:**
- Headline: Serif, 40px, semibold, white #FFFFFF
- CTA: Gold button #BF9E59, white text
- Padding: 80px vertical

---

### PAGE: APPROACH `/approach`

#### Hero
**Background:** Ivory

```
Method. Heart.

Precision without warmth is just process.
```

---

#### Section: Four Pillars
4 cards in a row

| Pillar | Title | Description |
|--------|-------|-------------|
| 1 | Discipline | Structure protects decisions. |
| 2 | Presence | Every conversation matters. |
| 3 | Illumination | We reveal what others miss. |
| 4 | Elevation | We raise the standard. |

---

#### Section: The Process
Detailed 4-step breakdown

| Step | Title | Description |
|------|-------|-------------|
| 01 | Align | We define the stakes, success criteria, and non-negotiables. Before we search, we challenge. |
| 02 | Map | We map the market, identify targets, and gain access to talent others can't reach. |
| 03 | Understand | We assess trajectory, judgement, and cultural fit through structured conversation. |
| 04 | Decide | We support your decision with clarity, control, and commitment to the close. |

---

#### Section: Confidentiality
```
Confidentiality is not a feature.
It's designed into the system.
```

---

#### Final CTA
```
Ready to talk method?

[Start a conversation]
```

---

### PAGE: EXECUTIVE SEARCH `/executive-search`

#### Hero
**Background:** Ivory

```
Appointments that land.

Leadership roles. Rare specialists. End-to-end.
```

---

#### Section: Sparring Partner
```
We don't just fill briefs.
We challenge them.

Executive search as a sparring partnership.
You own the decision. We own the outcome.
```

---

#### Section: 8D Methodology
**Visual:** Radar chart with 8 axes

| Dimension | Description |
|-----------|-------------|
| Competencies | Technical and functional expertise |
| Leadership Style | How they lead and influence |
| Trajectory | Career path and growth pattern |
| Values | Personal and professional principles |
| Potential | Capacity for future growth |
| Culture | Organizational fit and adaptability |
| Adaptability | Response to change and ambiguity |
| Vision | Strategic thinking and ambition |

```
8 dimensions.
One alignment score.
Zero guesswork.
```

---

#### Section: What to Expect
Process timeline (not with dates, just phases)

| Phase | Title | Description |
|-------|-------|-------------|
| Week 1-2 | Alignment | Brief challenge, success criteria, market positioning |
| Week 3-4 | Mapping | Market research, target identification, outreach |
| Week 5-6 | Engagement | Structured conversations, 8D assessment |
| Week 7-8 | Decision | Shortlist presentation, offer support, close |

---

#### Section: Contact Form
Embedded form with fields:
- Name (required)
- Email (required)
- Company (required)
- Role you're hiring for (optional)
- Message

CTA: "Start a conversation"

---

### PAGE: REFERENCES `/references`

#### Hero
**Background:** Ivory

```
Proof.

The work speaks.
```

---

#### Section: Case Studies
3-6 anonymized case studies

**Format per case:**
| Element | Content |
|---------|---------|
| Industry | e.g., "Luxury Retail" |
| Challenge | 1-2 sentences |
| Approach | 1-2 sentences |
| Outcome | Key metric + result |

**Example:**
```
LUXURY RETAIL
A leading maison needed a new Retail Director for EMEA.
After two failed searches with other firms, they came to us.
8 weeks. One offer. Three years and counting.
```

---

#### Section: Testimonials
2-3 quotes

**Format:**
```
"Quote text here."
— Name, Title, Company (if authorized)
```

**Example:**
```
"They challenged our brief in ways that made us uncomfortable.
And then they delivered exactly what we needed."
— CEO, Private Equity Portfolio Company
```

---

#### Section: Key Metrics
3 stats displayed prominently

| Metric | Value | Label |
|--------|-------|-------|
| Success rate | 95%+ | Placements that last beyond 24 months |
| Timeline | 8 weeks | Average time to signed offer |
| Retention | 90%+ | Talents still in role after 3 years |

---

#### Final CTA
```
Ready to join them?

[Start a conversation]
```

---

### PAGE: ABOUT `/about`

#### Hero
**Background:** Ivory

```
Method-obsessed.
Human-led.
```

---

#### Section: Vision
Founder quote block

```
"Executive search is broken because it's treated as a transaction.
We treat it as a partnership. We step into the arena together."
```
— Founder, Irbis Partners

---

#### Section: Values
4 pillars (same as Approach)

| Value | One-liner |
|-------|-----------|
| Discipline | Structure protects decisions. |
| Presence | Every conversation matters. |
| Illumination | We reveal what others miss. |
| Elevation | We raise the standard. |

---

#### Section: AI Transparency
```
Technology amplifies. Humans decide.
```

4 principles:

| Principle | Explanation |
|-----------|-------------|
| Augmentation | AI helps us see more. It never decides. |
| Transparency | We tell you exactly how we use technology. |
| Confidentiality | Your data is never used to train models. |
| Control | You always know what's automated and what's human. |

---

#### Section: Stats
3 metrics

| Metric | Value | Meaning |
|--------|-------|---------|
| 8D | Dimensions | Our proprietary alignment framework |
| 100% | Commitment | We own every outcome |
| ∞ | Relationships | We don't do one-offs |

---

#### Final CTA
```
See the method in action.

The approach →
```

---

### PAGE: CONTACT `/contact`

#### Hero
**Background:** Ivory

```
Let's talk.

The first conversation is free. The value isn't.
```

---

#### Form Section
**Layout:** Form on left, sidebar on right

**Form Fields:**
| Field | Type | Required |
|-------|------|----------|
| Name | Text | Yes |
| Email | Email | Yes |
| Company | Text | Yes |
| Role you're hiring for | Text | No |
| Message | Textarea | Yes |

**CTA:** "Send message" (gold button)

**Sidebar:**
```
Paris, France

We respond within 24 hours.

Already a client?
Access the Console →
```

---

### PAGE: TAILOR SHIFT `/tailor-shift`

#### Hero
**Background:** Ivory

```
Luxury retail.
Adaptive precision.

The talent behind the temple.
```

---

#### Section: Mission
3 cards

| Card | Title | Description |
|------|-------|-------------|
| 1 | Boutique Directors | The leaders who set the tone. |
| 2 | Department Managers | The orchestrators of excellence. |
| 3 | Sales Advisors | The artists of the client experience. |

---

#### Section: Expertise
**Maisons we work with:** (logos or text)
- Fashion Houses
- Watchmakers
- Jewelers
- Hospitality

**Roles we fill:**
- Store Directors
- Client Advisors
- Visual Merchandisers
- Training Managers

---

#### Section: 8D Applied to Luxury
Radar visual adapted for luxury retail dimensions

| Dimension | Luxury Context |
|-----------|----------------|
| Product Knowledge | Deep expertise in maison codes and heritage |
| Client Relationship | Art of cultivating lasting connections |
| Visual Sensitivity | Eye for presentation and detail |
| Ceremony | Mastery of the luxury experience ritual |

---

#### Section: Stats
| Metric | Value |
|--------|-------|
| Placements | 150+ |
| Retention | 92% |
| Maisons | 25+ |

---

#### Final CTA
```
Looking for exceptional retail talent?

[Contact us]
```

**Back link:** ← Back to Irbis

---

### PAGE: PARIS `/paris`

#### Hero
**Background:** Ivory

```
Know your profile.

Clarity before career moves.
```

---

#### Section: 8D Test
```
Discover your unique professional signature
through our 8-dimension assessment.

20 minutes. Zero guesswork. One profile.
```

**CTA:** "Take the test" (external link or form)

---

#### Section: Benefits
3 cards

| Card | Title | Description |
|------|-------|-------------|
| 1 | Self-awareness | Know your strengths and growth areas. |
| 2 | Positioning | Understand how the market sees you. |
| 3 | Direction | Make career moves with confidence. |

---

#### Section: Coaching
```
Want to go deeper?

Personal coaching sessions to translate
your 8D profile into action.
```

**Offerings:**
- Profile Debrief (1 session)
- Career Strategy (3 sessions)
- Transition Support (ongoing)

---

#### Section: Synergy
```
Paris × Irbis

When we recruit for our clients,
we use the same methodology.

Your profile could lead to your next opportunity.
```

---

#### Final CTA
```
Ready to discover your profile?

[Take the 8D test]
```

**Back link:** ← Back to Irbis

---

### PAGE: LOGIN `/login`

#### Layout
Centered card on navy background

#### Content
```
[IRBIS logo - white]

Console

Where decisions take shape.

[Email field]
[Password field]

[Enter] (gold button)

Don't have an account? Sign up
Forgot your password?
```

---

### PAGE: CONSOLE (App)

> Note: Console is a separate application with its own design system. Below are the key screens.

#### Dashboard `/console/dashboard`
| Element | Content |
|---------|---------|
| Title | "Overview" |
| Stats | 4 cards: Active Mandates, Pipeline, Alignments, Placed |
| Activity | Recent activity feed |
| Actions | New Mandate, Talent Pool |

#### Mandates `/console/mandates`
| Element | Content |
|---------|---------|
| Title | "Mandates" |
| Actions | New Mandate button, Filters |
| Table | Title, Status, Talents, Alignment, Created |
| Empty | "No mandates yet. Create one →" |

#### Mandate Detail `/console/mandates/[id]`
| Element | Content |
|---------|---------|
| Header | Title + Status badge |
| Info | Description, Requirements, Dates |
| Pipeline | Kanban: Identified → Contacted → Interview → Offer → Placed |
| Alignments | Matched talents with scores |
| Actions | Edit, Run Alignment, Close |

#### Talents `/console/talents`
| Element | Content |
|---------|---------|
| Title | "Talent Pool" |
| Actions | Add Talent, Search, Filters |
| View | Grid cards or Table |
| Empty | "No talents yet. Add one →" |

#### Talent Detail `/console/talents/[id]`
| Element | Content |
|---------|---------|
| Header | Name, Title, Status, Contact |
| Tabs | Profile, 8D, History, Mandates |
| 8D View | Radar chart + dimension breakdown |

---

## 6. DESIGN REFERENCES

**Spirit (not copy):**
- Apple.com — whitespace and typography
- Stripe.com — clarity and precision
- Aesop.com — premium minimalism
- Bottega Veneta — quiet luxury

---

## 7. WHAT WE WANT

A website that:
- Feels like a top-tier consulting firm, not a SaaS startup
- Says little but communicates power and precision
- Uses gold sparingly (it's precious)
- Makes you want to scroll and explore
- Inspires trust and ambition

---

## 8. WHAT WE DON'T WANT

- Cluttered header with 10 navigation links
- Multiple gold buttons competing for attention
- Verbose explanatory text
- Generic "innovative solutions" language
- Template SaaS aesthetic
- Busy layouts with no breathing room
- Stock photos of people in suits shaking hands
- Gradients or flashy effects

---

## 9. LOGO ASSETS

### Description
- **Icon:** Stylized snow leopard head, profile view, looking left
- **Style:** Clean lines, geometric, modern
- **Color:** Navy #0F1A2E

### Wordmark
- "IRBIS" — Navy #0F1A2E, uppercase, sans-serif bold
- "PARTNERS" — Gold #BF9E59, uppercase, sans-serif light

### Usage
| Context | Format |
|---------|--------|
| Header (light bg) | Icon + "IRBIS" navy + "PARTNERS" gold |
| Footer (dark bg) | Icon + "IRBIS" white + "PARTNERS" gold |
| Favicon | Icon only |
| Mobile | Icon only or "IRBIS" only |

---

## 10. NAVIGATION SUMMARY

### Header Links (4 only)
1. Approach → `/approach`
2. Executive Search → `/executive-search`
3. References → `/references`
4. Contact → `/contact`

### Footer Links
**Services:**
- Executive Search → `/executive-search`
- Tailor Shift → `/tailor-shift`
- Paris → `/paris`

**Company:**
- About → `/about`
- Approach → `/approach`
- References → `/references`

**Connect:**
- Contact → `/contact`
- LinkedIn → external

---

*Complete Site Architecture — IRBIS Partners*
*For Google AI Studio / Stitch*
