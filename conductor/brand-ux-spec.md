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

## 7. PAGE: ABOUT

### Structure

```
┌─────────────────────────────────────────┐
│ HERO                                    │
├─────────────────────────────────────────┤
│ VISION — Founder energy                 │
├─────────────────────────────────────────┤
│ VALUES — 4 pillars                      │
├─────────────────────────────────────────┤
│ AI-AUGMENTED — Transparency             │
├─────────────────────────────────────────┤
│ METHOD + CONNECTION — Stats             │
├─────────────────────────────────────────┤
│ CTA                                     │
└─────────────────────────────────────────┘
```

### Hero

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Method-obsessed. Human-led. |
| **Subhead** | Irbis is built on a conviction: high-stakes decisions deserve disciplined method — and method must remain connected to human reality. |

### Vision

| Element | Content (EN) |
|---------|--------------|
| **Headline** | One vision. One method. |
| **Body** | We observed that traditional approaches focus too often on technical skills at the expense of the human dimensions that make the difference between a good hire and an excellent one. Our 8D methodology is the fruit of this reflection: a rigorous framework that captures the essence of each talent and each mandate. |
| **Quote** | "We don't use technology to replace the human. We use technology to amplify the human." |

### Values (4 cards)

| Pillar | Title | Body |
|--------|-------|------|
| 1 | Discipline | We apply methodical rigour at every step — from mandate definition to final integration. Discipline is not a constraint — it's the foundation of excellence. |
| 2 | Presence | We are engaged at every moment, available to answer questions and adjust our approach to your needs. Presence means being there when it matters. |
| 3 | Illumination | We bring new clarity through our 8D methodology, revealing insights others might miss. Illumination transforms uncertainty into opportunity. |
| 4 | Elevation | We elevate the standards of Executive Search, transforming each mandate into an opportunity for mutual growth. Elevation is our shared ambition. |

### AI-Augmented Section

| Element | Content (EN) |
|---------|--------------|
| **Headline** | AI-augmented. Human-guided. |
| **Subhead** | Our technology is not a black box. It's a transparent tool that helps us make more informed decisions, while keeping the human at the centre of every interaction. |

**4 principles (cards)**:

| # | Title | Body |
|---|-------|------|
| 1 | AI is an assistant, not a decider | All recommendations are validated by human experts. AI proposes, humans decide. |
| 2 | Confidential by design | Sensitive data is never shared with third parties. Our infrastructure respects the highest security standards. |
| 3 | Explainable decisions | We can explain why a profile is recommended. Transparency is essential for trust. |
| 4 | Continuous improvement | Every interaction teaches us. We use these learnings to constantly improve our algorithms and processes. |

### Method + Connection

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Method + Connection |
| **Body** | The best methodology is useless without genuine connection. At Irbis, we invest time to understand your culture, your challenges, and your aspirations. This connection transforms a process into a partnership. |

**Stats row**:

| Stat | Label |
|------|-------|
| 8D | Dimensions of alignment |
| 100% | Commitment until appointment |
| ∞ | Potential for shared growth |

### CTA

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Ready to raise your standards? |
| **Primary CTA** | Explore our services |
| **Secondary CTA** | Start a conversation |

---

## 8. PAGE: REFERENCES

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

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Proof in the work. |
| **Subhead** | Selected mandates and outcomes from our executive search practice. |

### Case Studies (example format)

| Element | Structure |
|---------|-----------|
| **Title** | [Sector] — [Role level] |
| **Challenge** | 1-2 sentences on the context |
| **Outcome** | Result with alignment score if relevant |
| **Timeline** | Duration from brief to appointment |

**Example cards**:

| Card | Title | Challenge | Outcome |
|------|-------|-----------|---------|
| 1 | Tech — CTO Placement | High-growth startup needed a technical leader who could scale. | 95% alignment. Appointed in 8 weeks. |
| 2 | Luxury Retail — Operations Director | Global brand needed a director with luxury DNA and operational rigour. | 100% alignment. Timeline reduced by 40%. |
| 3 | Finance — CFO Search | PE-backed company required a CFO for pre-IPO phase. | Successful placement. Still in role 2 years later. |

### Testimonials

| Element | Structure |
|---------|-----------|
| **Quote** | "..." |
| **Author** | Role, Company (anonymised if needed) |

**Example**:
- "Irbis exceeded our expectations with their precise approach." — CEO, Tech Company
- "A recruitment experience without equal." — HR Director, Industry Leader

### Stats Row

| Stat | Value | Label |
|------|-------|-------|
| 1 | 95%+ | Alignment success rate |
| 2 | 8 weeks | Average time to placement |
| 3 | 90% | Still in role after 2 years |

### CTA

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Ready to join them? |
| **Primary CTA** | Discuss a search |

---

## 9. PAGE: LOGIN

### Structure

```
┌─────────────────────────────────────────┐
│ CENTERED FORM                           │
│ Tagline + Form + CTAs                   │
└─────────────────────────────────────────┘
```

### Content

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Enter the Console |
| **Tagline** | Where decisions take shape. |
| **Fields** | Email, Password |
| **Primary CTA** | Log in |
| **Secondary CTA** | Sign up |
| **Link** | Forgot password? |

**Notes**:
- Minimal, centered design
- Dark/navy background option for premium feel
- Link back to homepage

---

## 10. PAGE: TAILOR SHIFT (Portal)

### Structure

```
┌─────────────────────────────────────────┐
│ HERO — Tailor Shift branding            │
├─────────────────────────────────────────┤
│ MISSION — Luxury recruitment            │
├─────────────────────────────────────────┤
│ EXPERTISE — Sectors served              │
├─────────────────────────────────────────┤
│ 8D APPLIED — Luxury dimensions          │
├─────────────────────────────────────────┤
│ STATS — Key metrics                     │
├─────────────────────────────────────────┤
│ CTA — External site                     │
├─────────────────────────────────────────┤
│ BACK TO IRBIS                           │
└─────────────────────────────────────────┘
```

### Hero

| Element | Content (EN) |
|---------|--------------|
| **Logo** | TAILOR SHIFT (wordmark) |
| **Headline** | Luxury retail recruitment with adaptive precision. |
| **Subhead** | An exclusive expertise dedicated to luxury houses, prestige retailers, and iconic brands. We identify talents who embody high-end retail excellence. |
| **Primary CTA** | Visit Tailor Shift |

### Mission (3 cards)

| Card | Title | Body |
|------|-------|------|
| 1 | Service Excellence | We recruit professionals who understand the art of client service in the luxury universe. Every interaction must be a memorable experience. |
| 2 | Retail Expertise | Deep knowledge of luxury codes, prestige houses, and the expectations of demanding international clientele. |
| 3 | 8D Alignment | Our exclusive 8D alignment methodology guarantees precise matching between house requirements and talent potential. |

### Expertise (2 columns)

**Luxury Houses**:
- Fashion and accessories brands
- Fine watchmaking and jewellery
- Prestige perfumery and cosmetics
- Leather goods and artisan crafts

**Key Roles**:
- Boutique Directors
- Department Managers
- Expert Sales Advisors
- Regional Managers

### 8D Applied to Luxury

| Dimension | Title | Description |
|-----------|-------|-------------|
| 1 | Competencies | Technical expertise and craft know-how |
| 2 | Values | Adherence to luxury codes and ethics |
| 3 | Potential | Capacity for evolution and leadership |
| 4 | Culture | Affinity with brand universe |
| 5 | Soft Skills | Relational and emotional intelligence |
| 6 | Adaptability | Flexibility facing retail demands |
| 7 | Engagement | Passion for service excellence |
| 8 | Vision | Understanding of strategic challenges |

### Stats

| Stat | Value | Label |
|------|-------|-------|
| 1 | 95% | Placement success rate |
| 2 | 50+ | Luxury houses served |
| 3 | 200+ | C-level talents placed |

### CTA

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Ready to find excellence? |
| **Subhead** | Discover how Tailor Shift can transform your luxury recruitment. |
| **Primary CTA** | Visit Tailor Shift |

### Back Link

**Text**: ← Back to Irbis Corporate

---

## 11. PAGE: PARIS (Portal)

### Structure

```
┌─────────────────────────────────────────┐
│ HERO — Paris branding                   │
├─────────────────────────────────────────┤
│ 8D TEST — Profile discovery             │
├─────────────────────────────────────────┤
│ BENEFITS — For talents                  │
├─────────────────────────────────────────┤
│ COACHING — Offerings                    │
├─────────────────────────────────────────┤
│ SYNERGY — Paris × Irbis                 │
├─────────────────────────────────────────┤
│ CTA                                     │
└─────────────────────────────────────────┘
```

### Hero

| Element | Content (EN) |
|---------|--------------|
| **Logo** | PARIS (wordmark) |
| **Headline** | The career tool par excellence. |
| **Subhead** | Discover your unique profile through our exclusive 8-dimension alignment methodology. Understand your strengths, identify your opportunities, and build your professional future. |
| **Primary CTA** | Visit Paris |

### 8D Test Section

| Element | Content (EN) |
|---------|--------------|
| **Headline** | The 8D Test: Discover Your Unique Profile |

**Two cards**:

| Card | Title | Content |
|------|-------|---------|
| 1 | 8 Dimensions | Our methodology evaluates your profile across 8 key dimensions: Competencies, Values, Potential, Culture, Soft Skills, Adaptability, Engagement, Vision |
| 2 | Personalised Results | Receive a detailed report with: Overall alignment score, Dominant strengths, Development axes, Personalised career recommendations |

### Benefits (3 cards)

| Card | Title | Body |
|------|-------|------|
| 1 | Career Clarity | Identify your strengths and areas for improvement to build a coherent professional trajectory. |
| 2 | Precise Guidance | Benefit from personalised recommendations based on your unique 8D profile. |
| 3 | Self-Confidence | Understand what makes you unique and value your differentiating assets. |

### Coaching

| Offering | Title | Features |
|----------|-------|----------|
| 1 | Individual Coaching | Face-to-face sessions, Personalised action plan, Progress tracking |
| 2 | Group Coaching | Thematic workshops, Practical exercises, Peer networking |

### Synergy Section

| Element | Content (EN) |
|---------|--------------|
| **Headline** | The Paris × Irbis Synergy |
| **Subhead** | Paris and Irbis work together to offer you a complete career development experience. |

**Two cards**:

| Card | Title | Body |
|------|-------|------|
| For Talents | Use Paris to discover your profile and benefit from our personalised coaching offers. |
| For Companies | Irbis identifies talents aligned with your mandates through our exclusive 8D methodology. |

### CTA

| Element | Content (EN) |
|---------|--------------|
| **Headline** | Ready to discover your potential? |
| **Primary CTA** | Visit Paris |
| **Secondary CTA** | Back to Irbis Corporate |

---

## 12. CONSOLE (HUNTING) — DETAILED

### Navigation (Sidebar)

| Item | Route | Icon suggestion |
|------|-------|-----------------|
| Overview | /hunting/dashboard | Grid/Home |
| Mandates | /hunting/mandates | Briefcase |
| Talents | /hunting/talents | Users |
| Settings | /hunting/settings | Cog |

---

### 12.1 DASHBOARD

**Layout**: Bento grid with stats + activity feed

**Header row**:
| Element | Content (EN) |
|---------|--------------|
| **Title** | Overview |
| **Quick actions** | New Mandate (primary), Talent Pool (secondary) |

**Stats cards (4)**:
| Card | Title | Value example | Trend |
|------|-------|---------------|-------|
| 1 | Active Mandates | 12 | +2 this week |
| 2 | Talents in Pipeline | 47 | — |
| 3 | Alignments Generated | 156 | +23 this week |
| 4 | Placements YTD | 8 | — |

**Recent Activity feed**:
| Element | Format |
|---------|--------|
| Item | [Action] — [Object] — [Time ago] |
| Examples | "New talent added — Marie D. — 2h ago" |
| | "Alignment completed — CTO mandate — 1d ago" |

**System status widget**:
| Element | Content |
|---------|---------|
| Status indicator | Green dot + "Matching Engine: Active" |
| User info | Logged in as [email] |

---

### 12.2 MANDATES LIST

**Header row**:
| Element | Content (EN) |
|---------|--------------|
| **Title** | Mandates |
| **Primary CTA** | New Mandate |
| **Filters** | Status (All, Active, Closed, Draft) |

**Table columns**:
| Column | Width | Content |
|--------|-------|---------|
| Title | 30% | Mandate name |
| Status | 15% | Badge (Active, In progress, Closed) |
| Talents | 15% | Count in pipeline |
| Alignment | 15% | Average alignment % |
| Created | 15% | Date |
| Actions | 10% | View, Edit |

**Empty state**:
| Element | Content |
|---------|---------|
| **Headline** | No mandates yet |
| **Body** | Create your first mandate to start aligning talents. |
| **CTA** | New Mandate |

---

### 12.3 MANDATE DETAIL

**Layout**: Split screen (2/3 info, 1/3 pipeline)

**Left panel (Info)**:
| Section | Content |
|---------|---------|
| Title | Mandate name |
| Status badge | Active / In progress / Closed |
| Description | Full text |
| Requirements | List |
| Created | Date |
| Actions | Edit, Close, Delete |

**Right panel (Pipeline)**:
| Section | Content |
|---------|---------|
| **Headline** | Talent Pipeline |
| **Kanban columns** | Identified → Contacted → Interview → Offer → Placed |
| **Talent cards** | Name, Alignment %, Status |

**Talent alignment section**:
| Element | Content |
|---------|---------|
| **Headline** | Aligned Talents |
| **Cards** | Talent name, 8D score, Quick actions (View, Contact) |
| **Empty state** | No alignments yet. Run matching to find talents. |
| **CTA** | Run Alignment |

---

### 12.4 TALENTS LIST

**Header row**:
| Element | Content (EN) |
|---------|--------------|
| **Title** | Talent Pool |
| **Primary CTA** | Add Talent |
| **Search** | Semantic search input |
| **Filters** | Status, Skills, Availability |

**Table/Grid**:
| Column | Content |
|--------|---------|
| Name | Full name |
| Title | Current/last role |
| Status | Available, In process, Placed |
| Skills | Top 3 tags |
| Added | Date |
| Actions | View, Edit |

**Card view option**:
| Element | Content |
|---------|---------|
| Avatar | Initials or photo |
| Name | Full name |
| Title | Role |
| 8D Summary | Mini radar or score |
| CTA | View Profile |

---

### 12.5 TALENT DETAIL

**Layout**: Full page with tabs

**Header**:
| Element | Content |
|---------|---------|
| Name | Full name |
| Title | Role |
| Status badge | Available / In process / Placed |
| Actions | Edit, Contact, Archive |

**Tabs**:
| Tab | Content |
|-----|---------|
| Profile | Bio, experience, skills |
| 8D Analysis | Radar chart + dimension breakdown |
| History | Activity timeline |
| Mandates | Linked mandates + alignment scores |

**8D Analysis section**:
| Element | Content |
|---------|---------|
| **Radar chart** | Visual 8D representation |
| **Dimension cards** | Score + description per dimension |
| **Generated by** | "AI analysis on [date]" |

---

### 12.6 VOCABULARY REFERENCE (Console)

| UI Element | Label (EN) |
|------------|------------|
| Job listing | Mandate |
| Candidate card | Talent |
| Match score | Alignment Index |
| Match process | Generate Alignments |
| Status: active | Active |
| Status: wip | In Progress |
| Status: done | Closed |
| Add candidate | Add Talent |
| CV upload | Profile Ingestion |
| Search | Search Talents |

---

## 13. VISUAL PRINCIPLES (for Visily)

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

## 14. NEXT STEPS

### Phase 1: Validate & Mockup
- [ ] Review all page specs (this document)
- [ ] Create Visily mockups for marketing pages (Homepage → Executive Search → About → Approach → Contact → References)
- [ ] Create Visily mockups for portals (Tailor Shift, Paris)
- [ ] Create Visily mockups for Console (Dashboard → Mandates → Talents)

### Phase 2: Design Iteration
- [ ] Review mockups with stakeholders
- [ ] Refine layouts and component patterns
- [ ] Define responsive behaviour (mobile, tablet)
- [ ] Finalize component library specs

### Phase 3: FR Adaptation
- [ ] Translate all copy to French
- [ ] Adjust wording for French market nuances
- [ ] Review with native speaker

### Phase 4: Implementation
- [ ] Apply design system to codebase
- [ ] Implement page-by-page from Visily exports
- [ ] QA responsive and accessibility

---

## 15. PAGE CHECKLIST

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
*Last updated: 2024-12-27*
*Reference: design/unified-strategy.md*
