# P4 Interfaces

## 1. Sitemap par Rôle

### 👤 Candidat (B2C)
- `/login` : Connexion / Inscription
- `/profile` : Mon Profil (CV, Préférences)
- `/dashboard` : Suivi des candidatures (si applicable)

### 💼 Recruteur (B2B)
- `/dashboard` : Vue d'ensemble (Activité, Matches récents)
- `/jobs` : Mes Missions
  - `/jobs/new` : Créer une mission
  - `/jobs/[id]` : Détails mission & Matches
- `/candidates` : Vivier Candidats
  - `/candidates/[id]` : Profil complet
- `/settings` : Préférences personnelles

### 🛠️ Admin (Interne)
- `/admin/dashboard` : Stats globales plateforme
- `/admin/users` : Gestion utilisateurs
- `/admin/integrations` : Configuration (LinkedIn, CRM)

## 2. Design System — Swiss Minimalism ✅

> **Statut** : ✅ Implémenté  
> **Documentation** : `design/design_system.md`  
> **Thème** : Light Only (Blanc épuré)

### Stack Technique
- **Framework CSS** : Tailwind CSS
- **Component Library** : shadcn/ui (Radix UI primitives)
- **Icons** : Lucide React
- **Typography** : Geist Sans / Geist Mono (Vercel)
- **Animations** : CSS Transitions (200-300ms)

### Palette de Couleurs
```css
/* Backgrounds */
--background-primary: #ffffff      /* Pure White */
--background-secondary: #fafafa    /* Subtle Gray for cards */
--background-tertiary: #f5f5f5     /* Hover states */

/* Text */
--text-primary: #171717            /* Deep Charcoal */
--text-secondary: #737373          /* Medium Gray */
--text-tertiary: #a3a3a3           /* Light Gray */

/* Accents */
--accent-primary: #2563eb          /* Royal Blue - Actions */
--accent-success: #059669          /* Forest Green - Matches */
--accent-warning: #f59e0b          /* Amber - Warnings */
--accent-danger: #dc2626           /* Red - Errors */
```

### Principes Visuels
- ✅ **Whitespace Généreux** : Minimum 24px (--space-6) pour padding
- ✅ **Borders Subtiles** : 1px #e5e5e5
- ✅ **Typography Hiérarchisée** : Semibold pour titres, Regular/Medium pour body
- ✅ **Ombres Légères Uniquement** : Pas de box-shadow > 16px
- ✅ **Transitions Rapides** : 200ms pour hover, 300ms pour modals

### Paradigmes Spatiaux Utilisés
| Écran | Paradigme | Justification |
|-------|-----------|---------------|
| Dashboard | **Bento Grid** | Stats cards + Activity feed |
| Candidate Profile | **Split-Screen** | Analysis (2/3) + CRM (1/3) |
| Candidate List | **Full-Width Cards** | Table épurée avec search |
| Job Details | **Split-Screen** | Job info + Matches sidebar |

### Composants Disponibles

#### shadcn/ui Components
```bash
# Installed Components
- button (primary, secondary, ghost variants)
- card (default, clean variants)
- input (text, search, email, tel)
- select (dropdown menus)
- dialog (modals)
- table (data tables)
- badge (status indicators)
- tabs (navigation)
- form (form handling)
- dropdown-menu (action menus)
- avatar (user avatars)
- progress (bars for 8D dimensions)
- skeleton (loading states)
```

#### IRBIS Custom Components (À créer)
```
src/components/custom/
├── talent-card.tsx              # Card candidat avec badges
├── mandate-card.tsx             # Card mission avec status
├── compatibility-score.tsx      # Affichage % matching
├── 8d-radar-chart.tsx          # Graphique dimensions
├── activity-timeline.tsx        # Timeline CRM
└── stats-card.tsx              # Card metric avec trend
```

### Références Design
- **Inspiration** : Apple Business, Linear, Stripe Dashboard
- **Accessibility** : WCAG 2.1 Level AA (contraste 4.5:1 minimum)
- **Performance** : Animations 60fps, transform/opacity only

## 3. Mockups (ASCII)

### SC-01: Dashboard Realtime (Recruteur)
```text
+-----------------------------------------------------------------------+
|  [Logo]  Dashboard   Jobs   Candidates   Settings          [User v]   |
+-----------------------------------------------------------------------+
|                                                                       |
|  Bonjour, Louis 👋                                                    |
|                                                                       |
|  +----------------+  +----------------+  +----------------+           |
|  | Candidats      |  | Matches (New)  |  | Missions       |           |
|  | 1,240      ^5% |  | 12         ^2  |  | 5 Active       |           |
|  +----------------+  +----------------+  +----------------+           |
|                                                                       |
|  +--------------------------------+  +----------------------------+   |
|  |  Activité en temps réel        |  |  Derniers Matches          |   |
|  |                                |  |                            |   |
|  |  • Jean D. a postulé (2m)      |  |  Jean D. -> CTO (98%)      |   |
|  |  • Match trouvé: CTO (5m)      |  |  Marie L. -> Dev (85%)     |   |
|  |  • CV analysé: Marie L. (10m)  |  |  Paul R. -> Sales (72%)    |   |
|  |                                |  |                            |   |
|  |  [Voir tout]                   |  |  [Voir tout]               |   |
|  +--------------------------------+  +----------------------------+   |
|                                                                       |
+-----------------------------------------------------------------------+
```

### SC-02: LinkedIn Integration (Admin)
```text
+-----------------------------------------------------------------------+
|  [< Retour]  Intégration LinkedIn                                     |
+-----------------------------------------------------------------------+
|                                                                       |
|  Statut: ● Connecté (Compte: louis@irbis.com)      [Déconnecter]      |
|                                                                       |
|  +----------------------------------------------------------------+   |
|  |  Paramètres de Synchronisation                                 |   |
|  |                                                                |   |
|  |  [x] Import automatique des profils visités                    |   |
|  |                                                                |   |
|  |  Fréquence: [ Temps réel v ]                                   |   |
|  |                                                                |   |
|  |  Champs: [x] Expérience  [x] Formation  [ ] Skills             |   |
|  |                                                                |   |
|  |  [Sauvegarder]                                                 |   |
|  +----------------------------------------------------------------+   |
|                                                                       |
|  +----------------------------------------------------------------+   |
|  |  Journal d'activité                                            |   |
|  |  ------------------------------------------------------------  |   |
|  |  10:42  Sync Profile  Success  Jean Dupont                     |   |
|  |  10:40  Auth          Success  Token refreshed                 |   |
|  +----------------------------------------------------------------+   |
+-----------------------------------------------------------------------+
```

## 4. Screen Contracts Index
| ID | Screen Name | Status | Description |
|----|-------------|--------|-------------|
| SC-01 | Dashboard Realtime | 🔴 Todo | Vue temps réel des activités |
| SC-02 | LinkedIn Integration | 🔴 Todo | Modal/Page de connexion LinkedIn |
| SC-03 | Candidate Profile | 🟢 Done | Vue détaillée candidat (Existing) |
| SC-04 | Job Details | 🟢 Done | Vue mission + matches (Existing) |
`n## 5. Future Features (Backlog)`n- **Collaborative Review**: Client portal for rating/commenting candidates and sharing via Email/Slack.
