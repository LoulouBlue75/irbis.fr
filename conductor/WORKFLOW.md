# IRBIS — Workflow Step by Step

---

## PHASE 1 : PRÉPARATION

### Step 1.1 — Sync les fichiers
```bash
cd C:\Users\louis\Desktop\irbis
git pull origin claude/analyze-repo-strategy-2FzJs
```

### Step 1.2 — Vérifie les specs
```
conductor/
├── brand-ux-spec.md       ← Design system + Copy
├── layout-ux-spec.md      ← Wireframes
├── design-agent-prompt.md ← Prompt AI
├── copy-v4-chiseled.md    ← Référence copy
└── WORKFLOW.md            ← Ce fichier
```

---

## PHASE 2 : MOCKUPS

### Step 2.1 — Ouvre Gemini (ou GPT-4V / Claude)

### Step 2.2 — Upload les fichiers
1. `brand-ux-spec.md`
2. `layout-ux-spec.md`
3. `design-agent-prompt.md`

### Step 2.3 — Prompt initial
```
Tu es un UI designer expert.

J'ai uploadé 3 fichiers de specs pour IRBIS, une plateforme d'executive search premium.

Lis attentivement :
1. brand-ux-spec.md — design system et copy
2. layout-ux-spec.md — wireframes et UX
3. design-agent-prompt.md — directives visuelles

Confirme que tu as compris les règles :
- Couleurs (ink #0F1A2E, gold #BF9E59, ivory #F6F1E7)
- Typography (serif headlines, sans body)
- Copy (headline ≤5 mots, body ≤12 mots)
- Layout (grille 12 cols, 80px section gaps)
- Esthétique (premium minimal, whitespace, pas de gradients)
```

### Step 2.4 — Génère page par page

**Homepage :**
```
Génère un mockup haute fidélité de la Homepage IRBIS.

Desktop 1440×900.

Suis exactement :
- layout-ux-spec.md section "Homepage"
- brand-ux-spec.md section "Homepage" pour le copy
- Couleurs et typo du design system

Hero full viewport avec :
- "High standards. Shared ambition." (serif 56px)
- "Executive search. Adaptive precision."
- CTA gold "Start a conversation"
- Fond subtil (image bureau ou couleur ivory)
```

**Executive Search :**
```
Génère le mockup Executive Search.

Inclus :
- Hero : "Appointments that land."
- Section Sparring (split image/texte)
- 8D radar chart octogonal
- Formulaire contact
```

**Approach :**
```
Génère le mockup Approach.

Inclus :
- Hero : "Method. Heart."
- 4 pillars en grid 2×2
- Section Confidentiality (fond ivory, centré)
```

**About :**
```
Génère le mockup About.

Inclus :
- Hero : "Method-obsessed. Human-led."
- Grande citation (serif)
- 4 principes AI numérotés
- 3 stats (8D, 100%, ∞)
```

**Contact :**
```
Génère le mockup Contact.

Split 60/40 :
- Gauche : formulaire (Name, Email, Company, Message, Send)
- Droite : Paris, 24h response, lien Console
```

**Login :**
```
Génère le mockup Login.

Full screen, centré :
- Logo
- "Console"
- "Where decisions take shape."
- Email, Password
- CTA "Enter"
- Fond ink navy ou ivory
```

**Console Dashboard :**
```
Génère le mockup Console Dashboard.

Layout app :
- Sidebar 240px (Overview, Mandates, Talents, Settings)
- 4 stat cards en row
- Activity feed
```

### Step 2.5 — Itère si besoin
```
Ajuste :
- Plus de whitespace
- Headline plus grande
- CTA plus visible
- [autre feedback spécifique]
```

### Step 2.6 — Exporte
- Format PNG
- Naming : `homepage-desktop.png`, `console-dashboard.png`, etc.
- Stocke dans `design/mockups/`

---

## PHASE 3 : REVIEW

### Step 3.1 — Checklist par mockup

| Check | ✓ |
|-------|---|
| 1 seul CTA gold par écran | |
| Headlines ≤ 5 mots | |
| Copy exact (pas de variation) | |
| Couleurs hex correctes | |
| Whitespace généreux | |
| Hierarchy claire | |
| Feeling premium | |

### Step 3.2 — Feedback loop
Si un mockup ne passe pas → retour Step 2.5

---

## PHASE 4 : IMPLÉMENTATION

### Step 4.1 — Structure fichiers
```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx          ← Homepage
│   │   ├── executive-search/
│   │   ├── approach/
│   │   ├── about/
│   │   ├── contact/
│   │   └── references/
│   ├── (auth)/
│   │   └── login/
│   └── (hunting)/            ← Console app
│       ├── dashboard/
│       ├── mandates/
│       └── talents/
```

### Step 4.2 — Design tokens
Vérifie `tailwind.config.ts` :
```ts
colors: {
  ink: '#0F1A2E',
  gold: '#BF9E59',
  ivory: '#F6F1E7',
  stone: '#CFC8BB',
}
```

### Step 4.3 — Composants de base
1. Button (Primary, Secondary, Ghost)
2. Card (Default, Editorial, Interactive)
3. Input (Text, Textarea, Select)
4. Badge (Active, Progress, Closed)
5. Header (Marketing)
6. Sidebar (Console)
7. Footer

### Step 4.4 — Pages une par une
Ordre recommandé :
1. Homepage
2. Login
3. Contact
4. Executive Search
5. Approach
6. About
7. References
8. Console Dashboard
9. Console Mandates
10. Console Talents

### Step 4.5 — Responsive
- Mobile first
- Test à 375px, 768px, 1440px

---

## PHASE 5 : QA

### Step 5.1 — Checklist finale

| Page | Desktop | Tablet | Mobile | Copy OK | A11y |
|------|---------|--------|--------|---------|------|
| Homepage | | | | | |
| Exec Search | | | | | |
| Approach | | | | | |
| About | | | | | |
| Contact | | | | | |
| References | | | | | |
| Login | | | | | |
| Console | | | | | |

### Step 5.2 — Lighthouse
- Performance > 90
- Accessibility > 90
- Best Practices > 90

---

## RÉCAP FICHIERS

| Fichier | Usage |
|---------|-------|
| `brand-ux-spec.md` | Design system + Copy — référence principale |
| `layout-ux-spec.md` | Wireframes — structure des pages |
| `design-agent-prompt.md` | Prompt pour AI — génération mockups |
| `copy-v4-chiseled.md` | Copy détaillé — référence textes |
| `WORKFLOW.md` | Ce guide |

---

## TIMELINE SUGGÉRÉE

| Phase | Durée estimée |
|-------|---------------|
| Mockups (10 pages) | 1-2 jours |
| Review & itérations | 0.5 jour |
| Implémentation | 3-5 jours |
| QA & polish | 1 jour |

---

*Start with Phase 2, Step 2.1.*
