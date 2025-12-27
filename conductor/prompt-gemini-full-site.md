# Prompt Gemini/Kilocode — IRBIS Full Site

---

## CONTEXTE

Tu vas coder le site complet IRBIS, une plateforme d'executive search premium.

**Stack** :
- Next.js 15 + React 19
- TypeScript
- TailwindCSS 4
- Shadcn/UI
- Lucide icons

**Principe design** : Impact maximum. Mots minimum. Premium minimal.

---

## FICHIERS DE RÉFÉRENCE

Lis ces fichiers AVANT de coder :

| Fichier | Contenu |
|---------|---------|
| `conductor/brand-ux-spec.md` | Design system complet + copy de chaque page |
| `conductor/layout-ux-spec.md` | Wireframes ASCII + structure UX |
| `conductor/copy-v4-chiseled.md` | Tous les textes exacts |
| `conductor/homepage-build-steps.md` | Exemple détaillé pour Homepage |

---

## DESIGN SYSTEM (Mémorise)

### Couleurs
```
ink:     #0F1A2E   ← Texte, headers, footer bg
gold:    #BF9E59   ← CTA primary UNIQUEMENT (1 max/écran)
ivory:   #F6F1E7   ← Backgrounds sections alternées
white:   #FFFFFF   ← Cards, forms
stone:   #CFC8BB   ← Texte secondaire
gray-200: #E5E5E5  ← Borders
```

### Typography
```
display: 56px, serif, 700     ← Hero headlines
h1:      40px, serif, 600     ← Page titles
h2:      32px, serif, 600     ← Section titles
h3:      24px, sans, 600      ← Card titles
body:    16px, sans, 400      ← Paragraphs
caption: 12px, sans, 400      ← Meta, labels
```

### Spacing
```
Section gap:  80px (desktop), 48px (mobile)
Card padding: 24px
Card gap:     24px
Button:       height 44px, radius 6px
Card:         radius 8px
```

### Règle Copy
```
Headline: ≤ 5 mots
Body:     ≤ 12 mots
CTA:      ≤ 3 mots
```

---

## STRUCTURE FICHIERS

```
src/app/
├── (marketing)/
│   ├── page.tsx                 ← Homepage
│   ├── layout.tsx               ← Header + Footer marketing
│   ├── executive-search/
│   │   └── page.tsx
│   ├── approach/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── references/
│       └── page.tsx
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── layout.tsx               ← Layout minimal auth
├── (tailor-shift)/
│   └── tailor-shift/
│       └── page.tsx
├── (paris)/
│   └── paris/
│       └── page.tsx
└── (hunting)/                   ← Console app
    ├── layout.tsx               ← Sidebar + Header app
    ├── dashboard/
    │   └── page.tsx
    ├── mandates/
    │   ├── page.tsx             ← Liste
    │   └── [id]/
    │       └── page.tsx         ← Détail
    └── talents/
        ├── page.tsx             ← Liste
        └── [id]/
            └── page.tsx         ← Détail
```

---

## ORDRE D'EXÉCUTION (Séquentiel strict)

### Phase 0 : Setup
```
Step 0.1 — Vérifie/update tailwind.config.ts avec les couleurs
Step 0.2 — Crée les composants de base (si absents)
```

### Phase 1 : Composants partagés
```
Step 1.1 — Button (primary, secondary, ghost)
Step 1.2 — Card (default, editorial, interactive)
Step 1.3 — Input (text, textarea, select)
Step 1.4 — Badge (active, progress, closed)
Step 1.5 — Header marketing
Step 1.6 — Footer
Step 1.7 — Sidebar console
```

### Phase 2 : Pages Marketing
```
Step 2.1 — Homepage (src/app/(marketing)/page.tsx)
           → Suis conductor/homepage-build-steps.md
           → Confirme "Homepage done ✓"

Step 2.2 — Executive Search
           → Hero: "Appointments that land."
           → Sections: Sparring, 8D radar, Form
           → Confirme "Executive Search done ✓"

Step 2.3 — Approach
           → Hero: "Method. Heart."
           → Sections: 4 pillars, Confidentiality
           → Confirme "Approach done ✓"

Step 2.4 — About
           → Hero: "Method-obsessed. Human-led."
           → Sections: Quote, AI principles, Stats
           → Confirme "About done ✓"

Step 2.5 — Contact
           → Hero: "Let's talk."
           → Split: Form 60% / Sidebar 40%
           → Confirme "Contact done ✓"

Step 2.6 — References
           → Hero: "Proof."
           → Sections: Case cards, Stats row
           → Confirme "References done ✓"
```

### Phase 3 : Auth
```
Step 3.1 — Login
           → Full screen centré
           → "Console" + "Where decisions take shape."
           → CTA "Enter"
           → Confirme "Login done ✓"
```

### Phase 4 : Portals
```
Step 4.1 — Tailor Shift
           → Hero: "Luxury retail. Adaptive precision."
           → 3 cards Mission
           → Confirme "Tailor Shift done ✓"

Step 4.2 — Paris
           → Hero: "Know your profile."
           → 3 cards Benefits
           → Confirme "Paris done ✓"
```

### Phase 5 : Console (App)
```
Step 5.1 — Layout Console (sidebar + header)
           → Sidebar: Overview, Mandates, Talents, Settings
           → Confirme "Console Layout done ✓"

Step 5.2 — Dashboard
           → 4 stat cards
           → Activity feed
           → Confirme "Dashboard done ✓"

Step 5.3 — Mandates List
           → Table avec filtres
           → Empty state
           → Confirme "Mandates List done ✓"

Step 5.4 — Mandate Detail
           → Split info/pipeline
           → Confirme "Mandate Detail done ✓"

Step 5.5 — Talents List
           → Grid cards ou table
           → Search + filters
           → Confirme "Talents List done ✓"

Step 5.6 — Talent Detail
           → Tabs: Profile, 8D, History, Mandates
           → Radar chart 8D
           → Confirme "Talent Detail done ✓"
```

### Phase 6 : Responsive
```
Step 6.1 — Test toutes les pages à 375px (mobile)
Step 6.2 — Test toutes les pages à 768px (tablet)
Step 6.3 — Test toutes les pages à 1440px (desktop)
Step 6.4 — Fix les problèmes identifiés
           → Confirme "Responsive done ✓"
```

---

## RÈGLES STRICTES

### 1. Séquentiel
- Termine chaque step avant de passer au suivant
- Confirme après chaque page

### 2. Copy exact
- Utilise le texte EXACT de `brand-ux-spec.md` section C
- Pas de variation, pas d'ajout

### 3. Une seule CTA gold par écran
- Toutes les autres = secondary ou ghost

### 4. Responsive mobile-first
- Commence par mobile, étend vers desktop

### 5. Pas de sur-ingénierie
- Code simple et direct
- Pas d'abstractions inutiles
- Pas de features non demandées

---

## COPY RÉFÉRENCE RAPIDE

### Homepage
```
Hero: "High standards. Shared ambition."
Sub: "Executive search. Adaptive precision."
CTA: "Start a conversation"
```

### Executive Search
```
Hero: "Appointments that land."
Sub: "End-to-end. High bar. Real cadence."
```

### Approach
```
Hero: "Method. Heart."
Sub: "Structure that respects complexity."
```

### About
```
Hero: "Method-obsessed. Human-led."
Quote: "Technology amplifies the human. Never replaces."
```

### Contact
```
Hero: "Let's talk."
```

### Login
```
Headline: "Console"
Tag: "Where decisions take shape."
CTA: "Enter"
```

### Tailor Shift
```
Hero: "Luxury retail. Adaptive precision."
```

### Paris
```
Hero: "Know your profile."
Sub: "8 dimensions. One clarity."
```

---

## COMMENCE

```
1. Lis conductor/brand-ux-spec.md (design system + copy)
2. Lis conductor/layout-ux-spec.md (wireframes)
3. Exécute Phase 0, Step 0.1
4. Confirme quand prêt
```
