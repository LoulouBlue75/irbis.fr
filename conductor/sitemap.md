# IRBIS — Sitemap

---

## STRUCTURE GLOBALE

```
www.irbis.fr
│
├── MARKETING SITE (public)
│   ├── / ........................... Homepage
│   ├── /approach ................... The Approach (methodology)
│   ├── /executive-search ........... Executive Search (flagship service)
│   ├── /references ................. References (case studies, testimonials)
│   ├── /about ...................... About (vision, team, AI transparency)
│   └── /contact .................... Contact (form)
│
├── PORTALS (public, branded separately)
│   ├── /tailor-shift ............... Tailor Shift (luxury retail recruitment)
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

## NAVIGATION

### Header (Marketing Site)
```
[Logo]     Approach | Executive Search | References | Contact     [Start a conversation]
```

**4 liens uniquement.** Pas de Home (logo = home), pas de About dans nav principale.

### Header (Console App)
```
[Logo]     ← Back to site                                         [User menu ▼]
```

### Footer (toutes pages)
```
IRBIS          Services              Company            Connect
               Executive Search      About              Contact
               Tailor Shift          Approach           LinkedIn
               Paris                 References

© 2025 Irbis Partners                                  Privacy · Terms
```

---

## PAGES DÉTAILLÉES

### 1. HOMEPAGE `/`

| Section | Contenu |
|---------|---------|
| Hero | Tagline + CTA |
| What We Do | 3 cards (Exec Search, Sparring, Ecosystem) |
| Method | 4 steps (Align, Map, Understand, Decide) |
| Why Irbis | 3 commitments |
| Ecosystem | 4 portal cards |
| Final CTA | "Let's talk" |

---

### 2. APPROACH `/approach`

| Section | Contenu |
|---------|---------|
| Hero | "Method. Heart." |
| Pillars | 4 cards (Discipline, Presence, Illumination, Elevation) |
| Process | 4 steps detailed |
| Confidentiality | Statement |
| CTA | Contact link |

---

### 3. EXECUTIVE SEARCH `/executive-search`

| Section | Contenu |
|---------|---------|
| Hero | "Appointments that land." |
| Sparring Partner | Value proposition |
| 8D Methodology | Radar visual + 8 dimensions |
| What to Expect | Process overview |
| CTA + Form | Contact form |

---

### 4. REFERENCES `/references`

| Section | Contenu |
|---------|---------|
| Hero | "Proof." |
| Case Studies | 3-6 anonymized cases |
| Testimonials | 2-3 quotes |
| Stats | Key metrics (95%+, 8 weeks, 90% retention) |
| CTA | "Ready to join them?" |

---

### 5. ABOUT `/about`

| Section | Contenu |
|---------|---------|
| Hero | "Method-obsessed. Human-led." |
| Vision | Founder quote |
| Values | 4 pillars |
| AI Transparency | 4 principles |
| Stats | 8D, 100%, ∞ |
| CTA | Link to services |

---

### 6. CONTACT `/contact`

| Section | Contenu |
|---------|---------|
| Hero | "Let's talk." |
| Form | Name, Email, Company, Role (opt), Message |
| Sidebar | Location, response time, Console link |

---

### 7. TAILOR SHIFT `/tailor-shift`

| Section | Contenu |
|---------|---------|
| Hero | "Luxury retail. Adaptive precision." |
| Mission | 3 cards |
| Expertise | Maisons + Roles |
| 8D Applied | Luxury dimensions |
| Stats | Metrics |
| CTA | External link or contact |
| Back link | ← Back to Irbis |

---

### 8. PARIS `/paris`

| Section | Contenu |
|---------|---------|
| Hero | "Know your profile." |
| 8D Test | Description |
| Benefits | 3 cards |
| Coaching | Offerings |
| Synergy | Paris × Irbis |
| CTA | External link |
| Back link | ← Back to Irbis |

---

### 9. LOGIN `/login`

| Element | Contenu |
|---------|---------|
| Logo | Centered |
| Headline | "Console" |
| Tagline | "Where decisions take shape." |
| Form | Email, Password |
| CTA | "Enter" |
| Links | Sign up, Forgot password |

---

### 10. CONSOLE — DASHBOARD `/console/dashboard`

| Element | Contenu |
|---------|---------|
| Title | "Overview" |
| Stats | 4 cards (Active, Pipeline, Alignments, Placed) |
| Activity | Recent feed |
| Actions | New Mandate, Talent Pool |

---

### 11. CONSOLE — MANDATES `/console/mandates`

| Element | Contenu |
|---------|---------|
| Title | "Mandates" |
| Actions | New Mandate button, Filters |
| Table | Title, Status, Talents, Alignment, Created |
| Empty state | "No mandates yet. Create one →" |

---

### 12. CONSOLE — MANDATE DETAIL `/console/mandates/[id]`

| Element | Contenu |
|---------|---------|
| Header | Title + Status badge |
| Info | Description, Requirements, Dates |
| Pipeline | Kanban (Identified → Contacted → Interview → Offer → Placed) |
| Alignments | Matched talents with scores |
| Actions | Edit, Run Alignment, Close |

---

### 13. CONSOLE — TALENTS `/console/talents`

| Element | Contenu |
|---------|---------|
| Title | "Talent Pool" |
| Actions | Add Talent, Search, Filters |
| View | Grid cards or Table |
| Empty state | "No talents yet. Add one →" |

---

### 14. CONSOLE — TALENT DETAIL `/console/talents/[id]`

| Element | Contenu |
|---------|---------|
| Header | Name, Title, Status, Contact button |
| Tabs | Profile, 8D, History, Mandates |
| 8D View | Radar chart + dimension breakdown |

---

## RÉCAP VISUEL

```
                            ┌─────────────────┐
                            │    HOMEPAGE     │
                            │        /        │
                            └────────┬────────┘
                                     │
        ┌────────────┬───────────────┼───────────────┬────────────┐
        │            │               │               │            │
        ▼            ▼               ▼               ▼            ▼
   ┌─────────┐ ┌──────────┐ ┌────────────┐ ┌──────────┐ ┌─────────┐
   │Approach │ │ Exec     │ │ References │ │  About   │ │ Contact │
   │/approach│ │ Search   │ │/references │ │ /about   │ │/contact │
   └─────────┘ └──────────┘ └────────────┘ └──────────┘ └─────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
   ┌──────────┐           ┌──────────┐
   │ Tailor   │           │  Paris   │
   │  Shift   │           │ /paris   │
   └──────────┘           └──────────┘


   ┌─────────┐
   │  Login  │
   │ /login  │
   └────┬────┘
        │
        ▼
   ┌─────────────────────────────────────────┐
   │              CONSOLE                    │
   │                                         │
   │  Dashboard ─── Mandates ─── Talents     │
   │      │            │            │        │
   │      │         [id]         [id]        │
   │      │          new          new        │
   │      │                                  │
   │   Settings                              │
   └─────────────────────────────────────────┘
```

---

## POUR STITCH

**Pages à inclure dans le redesign :**

1. Homepage `/`
2. Approach `/approach`
3. Executive Search `/executive-search`
4. References `/references`
5. About `/about`
6. Contact `/contact`
7. Tailor Shift `/tailor-shift`
8. Paris `/paris`
9. Login `/login`

**Console (app) = design séparé, pas dans le redesign marketing.**

---

*Sitemap IRBIS — v1.0*
