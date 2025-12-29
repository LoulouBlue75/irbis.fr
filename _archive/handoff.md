# Handoff Document — IRBIS

## 🎯 Status Général du Projet

### Core Features (A-E) : ✅ Implémentées
- ✅ **CV Ingestion** (PDF Upload, Extraction, Storage)
- ✅ **Multi-Channel Ingestion** (Email, WhatsApp)
- ✅ **Matching Engine** (Vector Search + LLM Scoring)
- ✅ **Admin UI** (Jobs, Matches)
- ✅ **Dashboard** (Stats, Candidates)

### New Feature (F) : ✅ Advanced Candidate Management
- ✅ **Manual Entry** : `/dashboard/candidates/new`
- ✅ **Semantic Search** : `/dashboard/candidates` avec barre de recherche

---

## 🎨 CHANGEMENTS MAJEURS — 22/12/2024

### ✅ Design System Implémenté (Swiss Minimalism)

**Problème identifié** : 
- Absence totale de Design System structuré
- Seules 2 variables CSS dans globals.css
- shadcn/ui déclaré mais non installé
- Aucune direction visuelle cohérente

**Solution apportée** :

#### 1. **Documentation Design System** (`design/design_system.md`)
- ✅ Palette complète (thème blanc uniquement)
- ✅ Spacing system (4px base)
- ✅ Typography scale (Geist Sans)
- ✅ Component variants (buttons, cards, badges)
- ✅ Layout patterns (Bento Grid, Split-Screen)
- ✅ Animation guidelines

#### 2. **globals.css Refactorisé** (`src/app/globals.css`)
- ✅ 90+ variables CSS (colors, spacing, typography, shadows)
- ✅ Utility classes (.card, .badge, .bento-grid)
- ✅ Base styles (typography, links)
- ✅ Animations (@keyframes pulse, fadeIn)
- ✅ Suppression du dark mode (light only)

#### 3. **Screen Contracts Formalisés** (`screen_contracts/`)
- ✅ `dashboard-overview.yaml` : Specs complètes dashboard
- ✅ `candidate-profile.yaml` : Specs profil candidat (Split-Screen)
- 🔄 `dashboard-realtime.yaml` : Existant, à mettre à jour

#### 4. **P4_interfaces.md Enrichi**
- ✅ Section Design System complète
- ✅ Palette de couleurs documentée
- ✅ Paradigmes spatiaux par écran
- ✅ Liste des composants shadcn à installer
- ✅ Composants custom IRBIS à créer

---

## 🚧 PROCHAINES ÉTAPES PRIORITAIRES

### Phase 1 : Setup shadcn/ui (EN COURS)
```bash
# En cours d'exécution
npx shadcn@latest init --yes --defaults

# À exécuter ensuite
npx shadcn@latest add button card input select dialog table badge tabs form dropdown-menu avatar progress skeleton
```

### Phase 2 : Créer les Composants Custom IRBIS
Créer dans `src/components/custom/` :
- [ ] `talent-card.tsx` : Card candidat avec badges, metrics
- [ ] `mandate-card.tsx` : Card mission avec status badge
- [ ] `compatibility-score.tsx` : Affichage % matching avec couleur
- [ ] `8d-radar-chart.tsx` : Graphique dimensions (Leadership, Image, etc.)
- [ ] `activity-timeline.tsx` : Timeline CRM avec icônes
- [ ] `stats-card.tsx` : Card metric avec trend indicator

### Phase 3 : Refonte Pages avec Design System
- [ ] `/dashboard` : Appliquer bento-grid, stats-cards, activity-feed
- [ ] `/dashboard/candidates` : Table épurée avec TalentCard
- [ ] `/dashboard/candidates/[id]` : Split-screen avec 8D dimensions
- [ ] `/dashboard/jobs/[id]` : Split-screen avec matches sidebar

### Phase 4 : Real-time & Integrations
- [ ] **Supabase Realtime** : Updates dashboard en temps réel
- [ ] **LinkedIn Integration** : Page admin + OAuth flow
- [ ] **CRM Actions** : Modal "Initier Approche"

---

## 📚 CHANGEMENTS TECHNIQUES (22/12/2024)

### Fichiers Créés
- ✅ `design/design_system.md` (900+ lignes)
- ✅ `screen_contracts/dashboard-overview.yaml`
- ✅ `screen_contracts/candidate-profile.yaml`

### Fichiers Modifiés
- ✅ `src/app/globals.css` (20 lignes → 300+ lignes)
- ✅ `pillars/4_interfaces.md` (section Design System ajoutée)

### Fichiers Non Modifiés (Existants)
- ✅ `src/app/(app)/dashboard/candidates/new/page.tsx`
- ✅ `src/components/candidate-form.tsx`
- ✅ `src/app/actions/candidates.ts`
- ✅ `src/components/candidate-search.tsx`
- ✅ Toutes les pages et composants existants

---

## 🎯 DÉCISIONS STRATÉGIQUES

### Design
- **Style** : Swiss Minimalism (épuré, professionnel)
- **Thème** : Light Only (pas de dark mode)
- **Inspiration** : Apple Business, Linear, Stripe Dashboard
- **Priorité** : Clarté > Créativité

### Vocabulaire IRBIS (Maintenu)
- ✅ "Talent" (pas "Candidat")
- ✅ "Mandat" (pas "Job Offer")
- ✅ "Alignement" (pas "Match")
- ✅ "Empreinte Professionnelle" (pas "CV")
- ✅ "Initier l'Approche" (pas "Contacter")

### Paradigmes Spatiaux
| Écran | Pattern | Raison |
|-------|---------|--------|
| Dashboard | Bento Grid | Stats + Activity lisibles |
| Profile | Split-Screen | Analysis (2/3) + CRM (1/3) |
| List | Full-Width Cards | Scannable, aéré |

---

## 🐛 TECHNICAL DEBT (Inchangé)

### Existant (À adresser ultérieurement)
- ⚠️ `generate-candidate-embedding` : Vérifier event `candidate.created`
- ⚠️ Semantic search : Ensure API keys (`text-embedding-004` / Google)
- ⚠️ Pagination : Ajuster pour semantic search vs standard pagination

### Nouveau (Suivi Design System)
- 🔄 shadcn/ui : Installation à finaliser
- 🔄 Composants custom : À créer
- 🔄 Pages : Refonte visuelle progressive

---

## 🔗 RESSOURCES

### Documentation Projet
- `design/design_system.md` : Source de vérité pour le style
- `screen_contracts/*.yaml` : Specs détaillées par écran
- `pillars/4_interfaces.md` : Vue d'ensemble UX/UI

### Références Externes
- shadcn/ui : https://ui.shadcn.com/
- Radix UI : https://www.radix-ui.com/
- Lucide Icons : https://lucide.dev/
- Geist Font : https://vercel.com/font

---

## 🎬 COMMANDES UTILES

```bash
# Installer shadcn/ui
cd C:\Users\louis\Desktop\IRBIS
npx shadcn@latest init

# Ajouter des composants
npx shadcn@latest add button card input table

# Lancer le dev server
npm run dev

# Type checking
npm run type-check
```

---

## 📊 ENVIRONNEMENT (Inchangé)

- **Supabase** : Tables `candidates`, `jobs`, `matches`, `context_sources`
- **Inngest** : Functions registered in `src/app/api/inngest/route.ts`
- **Next.js** : 15.x avec App Router
- **TypeScript** : Strict mode
- **Tailwind** : v4 (via @import)

---

**Dernière mise à jour** : 22/12/2024 20:52  
**Auteur** : Cline (Matrice v4.2)  
**Mode** : ITERATION (Design System Focus)
