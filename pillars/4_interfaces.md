# P4 : INTERFACES & DESIGN

> **Version** : 2.1 (Iteration 01/01/2026)
> **Reference** : Matrice v4.1 — Chantier 4
> **Design System** : Matrice_dev/projects/irbis/design_system.md

---

## 1. SITEMAP PAR ROLE

### Recruteur (B2B) — PRIMARY

| Route | Ecran | Priorite |
|-------|-------|----------|
| `/hunting/dashboard` | Dashboard temps reel | P0 |
| `/hunting/talents` | Liste talents (vivier) | P0 |
| `/hunting/talents/new` | Ajout talent / Upload CV | P0 |
| `/hunting/talents/[id]` | Profil talent complet | P0 |
| `/hunting/mandates` | Liste mandats | P0 |
| `/hunting/mandates/new` | Creation mandat | P0 |
| `/hunting/mandates/[id]` | Detail mandat + pipeline | P0 |
| `/settings` | Preferences personnelles | P1 |

### Admin (Interne)

| Route | Ecran | Priorite | Status |
|-------|-------|----------|--------|
| `/admin/dashboard` | Stats globales | P1 | Done |
| `/admin/users` | Gestion utilisateurs (CRUD complet) | P1 | Done |
| `/admin/integrations` | Config LinkedIn, etc. | P2 | Done |
| `/admin/settings` | Parametres plateforme | P2 | Done |

> Implementation: 01/01/2026 - Layout RBAC + 4 pages admin

### Candidat (B2C) — V2

| Route | Ecran | Note |
|-------|-------|------|
| `/login` | Connexion | V1 (auth partagee) |
| `/profile` | Mon Profil | V2 |
| `/applications` | Suivi candidatures | V2 |

---

## 2. DESIGN SYSTEM

> **Source of Truth** : `Matrice_dev/projects/irbis/design_system.md`
> **Theme** : Light Only — "L'Edition Architecturale"

### Stack Technique

| Couche | Technologie |
|--------|-------------|
| Framework CSS | Tailwind CSS v4 |
| Component Library | shadcn/ui (Radix primitives) |
| Icons | Lucide React |
| Typography | Cormorant Garamond (display) + Inter (body) |
| Animations | GSAP (marketing) + Framer Motion (Console) |

### Palette Console (Light)

```css
/* Paper & Ink */
--paper-cream: #F9F7F1;
--paper-white: #FFFEFC;
--ink-black: #121212;
--ink-navy: #0B1121;
--ink-light: #4A4A4A;
--foil-gold: #C6A87C;

/* Semantic */
--success: #2E7D6B;
--warning: #D4A74A;
--error: #B54B4B;
--info: #4A7DB5;
```

### Principes Visuels Console

- **Whitespace Genereux** : min 24px padding
- **Borders Subtiles** : 1px rgba(11, 17, 33, 0.08)
- **Typography Hierarchisee** : Semibold titres, Regular body
- **Ombres Legeres** : max shadow-md
- **Transitions Rapides** : 200ms hover, 300ms modals

---

## 3. COMPOSANTS

### shadcn/ui Installes

```
button, card, input, select, dialog, table, badge,
tabs, form, dropdown-menu, avatar, progress, skeleton,
alert, textarea, tooltip
```

### Composants Custom Irbis

| Composant | Priorite | Status | Fichier |
|-----------|----------|--------|---------|
| `talent-card-paper` | P0 | Done | `src/components/talent-card-paper.tsx` |
| `mandate-card` | P0 | Todo | - |
| `match-score` | P0 | Todo | - |
| `activity-timeline` | P0 | Done | `src/components/crm/activity-timeline.tsx` |
| `stats-card` | P0 | Done | `src/components/dashboard-stats.tsx` |
| `empty-state` | P0 | Done | `src/components/ui/empty-state.tsx` |
| `error-page` | P0 | Todo | Voir `pillars/ui_states.md` |
| `nudge-card` | P1 | Done | `src/components/nudge-card.tsx` |
| `nudge-context` | P1 | Done | `src/contexts/nudge-context.tsx` |

---

## 4. ETATS UI

> **Documentation complete** : `pillars/ui_states.md`

### Synthese

| Etat | Description | Status |
|------|-------------|--------|
| Empty | Message + CTA quand liste vide | Documente |
| Loading | Skeletons par ecran | A implementer |
| Error | Types + messages + retry | Documente |
| Success | Toast + redirect | A implementer |

### Ecrans avec Empty State

| Ecran | Message | CTA |
|-------|---------|-----|
| Dashboard | "Bienvenue ! Creez votre premier mandat..." | Ajouter talent |
| Talents | "Aucun talent dans votre vivier" | Ajouter talent |
| Mandates | "Aucun mandat en cours" | Creer mandat |
| Search | "Aucun resultat" | Effacer filtres |

---

## 5. NUDGE SYSTEM

> **Documentation complete** : `pillars/nudge_system.md`

### Nudges Dashboard

| ID | Prio | Condition | Message |
|----|------|-----------|---------|
| NUD-001 | 3 | Vivier vide | "Ajoutez votre premier talent" |
| NUD-002 | 4 | Pas de mandat | "Creez un mandat" |
| NUD-003 | 5 | Nouveaux matches | "X nouveaux matches" |
| NUD-004 | 4 | Mandat inactive 7j | "Mandat en attente" |
| NUD-008 | 2 | Erreur analyse | "Erreur d'analyse" |

---

## 6. SCREEN CONTRACTS

> **Dossier** : `screen_contracts/`

### Index

| ID | Screen | Status | Fichier |
|----|--------|--------|---------|
| SC-01 | Dashboard Overview | YAML | `dashboard-overview.yaml` |
| SC-02 | Dashboard Realtime | YAML | `dashboard-realtime.yaml` |
| SC-03 | Talent Profile | YAML | `talent-profile.yaml` |
| SC-04 | Mandate Cockpit | YAML | `mandate-cockpit.yaml` |
| SC-05 | Candidate Profile | YAML | `candidate-profile.yaml` |

### Format Screen Contract Matrice (9 sections)

```yaml
screen:
  route: /path
  name: "Nom"

context:        # D'ou vient l'utilisateur
goal:           # Qu'est-ce qu'il doit faire
nudge_logic:    # Guides contextuels
states:         # default, loading, empty, error
parity:         # Coherence avec autres roles
components:     # Composants utilises
data:           # Donnees necessaires
accessibility:  # A11y + responsive
testing:        # Scenarios E2E
```

---

## 7. NAVIGATION

### Navbar Console (Recruiter)

```
[Logo]  Dashboard  Talents  Mandates     [Search]  [User]
```

### Items par Role

| Item | Recruiter | Admin |
|------|-----------|-------|
| Dashboard | Oui | Oui |
| Talents | Oui | Oui |
| Mandates | Oui | Oui |
| Users | Non | Oui |
| Integrations | Non | Oui |
| Settings | Oui | Oui |

---

## 8. PARITE ROLE-BASED

### Tableau Comparatif

| Element | Recruiter | Admin | Divergence |
|---------|-----------|-------|------------|
| Dashboard | Stats perso | Stats globales | Intentionnel |
| Talents | Ses talents | Tous talents | Intentionnel |
| Mandates | Ses mandats | Tous mandates | Intentionnel |
| Users | - | Full CRUD | Admin only |
| Settings | Perso | Global | Intentionnel |

### Elements Alignes

- Header/Navbar : Identique (memes composants)
- Footer : Identique
- Cards talents/mandates : Memes composants
- Filtres/Search : Identiques

---

## 9. MOCKUPS ASCII

### Dashboard (avec Nudges)

```text
+-----------------------------------------------------------------------+
|  [Logo]  Dashboard   Talents   Mandates                    [User v]   |
+-----------------------------------------------------------------------+
|                                                                       |
|  +---------------------------------------------------------------+   |
|  | [!] Vivier vide — Ajoutez votre premier talent  [Ajouter]     |   |
|  +---------------------------------------------------------------+   |
|                                                                       |
|  Bonjour, Sophie                                                      |
|                                                                       |
|  +----------------+  +----------------+  +----------------+           |
|  | Talents        |  | Matches        |  | Mandats        |           |
|  | 0              |  | 0              |  | 0              |           |
|  +----------------+  +----------------+  +----------------+           |
|                                                                       |
|  +--------------------------------+  +----------------------------+   |
|  |  Activite recente              |  |  Derniers Matches          |   |
|  |                                |  |                            |   |
|  |  (Empty State)                 |  |  (Empty State)             |   |
|  |  Aucune activite               |  |  Aucun match               |   |
|  |                                |  |                            |   |
|  +--------------------------------+  +----------------------------+   |
|                                                                       |
+-----------------------------------------------------------------------+
```

---

## 10. VALIDATION

### Cascades Verifiees (01/01/2026)

| Element P4 | Impact P2 | Impact P3 | Impact P5 | Status |
|------------|-----------|-----------|-----------|--------|
| Sitemap | Routes par role | Tables par role | Middleware auth | Coherent |
| Empty States | First Action | - | Nudge conditions | Coherent |
| Nudges Dashboard | Priorites user | Stats queries | BR/AU rules | Coherent |
| Screen Contracts | User Stories | Data sources | RBAC actions | Coherent |

**Resultat** : Toutes les cascades P4 → P2/P3/P5 sont coherentes.

### Checklist Coherence

- [x] Sitemap documente par role
- [x] Design System reference
- [x] UI States documentes
- [x] Nudge System documente
- [x] Screen Contracts migres format 9 sections (5/5)
- [x] Navigation par role verifiee (01/01/2026)
  - Routes `/hunting/*` : Implementees (/dashboard, /talents, /mandates)
  - Routes `/admin/*` : Implementees (/dashboard, /users, /integrations, /settings)
  - Middleware auth : Fonctionnel (redirect /login si non-auth)
  - RBAC admin : Layout protege avec requireAdmin()
- [x] Responsive configure (01/01/2026)
  - Playwright config: Desktop + Mobile (Pixel 5, iPhone 12) + Tablet (iPad Pro)
  - A valider avec `npm run test:e2e` sur ecrans critiques

---

## 11. REFERENCES

| Document | Chemin |
|----------|--------|
| Design System | `Matrice_dev/projects/irbis/design_system.md` |
| UI States | `pillars/ui_states.md` |
| Nudge System | `pillars/nudge_system.md` |
| Screen Contracts | `screen_contracts/*.yaml` |
| Direction Artistique | `Matrice_dev/projects/irbis/DIRECTION_ARTISTIQUE.md` |

---

*P4 Interfaces & Design — Irbis*
*v2.0 — 31/12/2025*
