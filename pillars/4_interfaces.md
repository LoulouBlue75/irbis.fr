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

## 2. Design System
- **Framework** : Tailwind CSS
- **Components** : shadcn/ui
- **Icons** : Lucide React
- **Font** : Geist Sans / Geist Mono

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
