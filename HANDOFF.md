# HANDOFF — Irbis Design System Implementation

> **Date**: 29 décembre 2024
> **Status**: Phase 1 Foundation — TERMINÉE
> **Source of Truth**: `Matrice_dev/knowledge/design_system_irbis.md`
> **Visual Identity**: "Sanctuaire Sculptural" (Light Theme)

---

## 1. Contexte

### 1.1 Décision

Le design system précédent (succession d'itérations) a été jugé **non satisfaisant**.
Décision prise de faire **table rase** et de repartir sur une base solide.

**Actions effectuées** :
- [x] Audit du design existant
- [x] Archivage dans `_archive/` (brand-ux-spec, layout-ux-spec, unified-strategy)
- [x] Reset de `globals.css` à l'état minimal ("Clean Slate")
- [x] Création du nouveau Design System dans la Matrice

### 1.2 Source of Truth

Le **SEUL** document de référence pour le design est :

```
C:\Users\louis\Desktop\Matrice_dev\knowledge\design_system_irbis.md
```

Ce document contient :
- Design Tokens (couleurs, typo, spacing, motion)
- Specs composants (Navbar, Hero, ProductCard, Buttons, etc.)
- Animations GSAP premium
- Guidelines responsive et accessibilité
- Config Tailwind prête à l'emploi

---

## 2. Ce qui est CONSERVÉ

### 2.1 Sitemap (Structure des pages)

**Source** : `design/sitemap.md`

```
PUBLIC (Marketing)
├── /                    ← Landing Page
├── /approach            ← Méthodologie
├── /executive-search    ← Services
├── /contact             ← Formulaire
└── /login               ← Authentification

APPLICATION (Cockpit) — Phase 2
├── /dashboard
├── /dashboard/mandates
├── /dashboard/talents
└── /dashboard/ingestion

PRODUITS (Liens externes)
├── /tailorshift         ← Présentation → tailorshift.co
└── /paris               ← Coming Soon
```

### 2.2 Wording / Copywriting

**Source** : `_archive/unified-strategy.md` + `_archive/copywriting_strategy.md`

| Élément | Valeur |
|---------|--------|
| **Tagline** | "Executive Search with Adaptive Precision." |
| **UVP** | "The alliance of human intuition and algorithmic precision." |
| **Signature** | "Irbis is a House of Perspective." |
| **Tone** | Prestigious yet Modern, Lucid Catalyst, Confidential |

### 2.3 Structure Technique

Le projet Next.js reste intact :
- Next.js 16.1.0
- Tailwind v4
- GSAP (déjà installé)
- Supabase
- shadcn/ui base components

---

## 3. Ce qui est À RECONSTRUIRE

### 3.1 Design Tokens

Remplacer le contenu minimal de `globals.css` par les tokens du Design System Irbis.

**Palette** :
```css
--irbis-navy: #1A1F36      /* Primary */
--irbis-gold: #C9A962      /* Accent */
--irbis-cream: #FAF8F5     /* Light */
```

**Typographie** :
- Display/Heading : Cormorant Garamond
- Body : Inter

### 3.2 Composants UI

Tous les composants doivent être recréés selon les specs du Design System :

| Composant | Priorité | Fichier cible |
|-----------|----------|---------------|
| `Navbar` | P0 | `components/layout/navbar.tsx` |
| `Footer` | P0 | `components/layout/footer.tsx` |
| `Hero` | P0 | `components/sections/hero.tsx` |
| `Button` | P0 | `components/ui/button.tsx` (update) |
| `ProductCard` | P1 | `components/cards/product-card.tsx` |
| `ComingSoon` | P1 | `app/coming-soon/page.tsx` |
| `Container` | P0 | `components/layout/container.tsx` |

### 3.3 Pages Marketing

Reconstruire avec le nouveau design :

| Page | Status | Notes |
|------|--------|-------|
| `/` (Landing) | À reconstruire | Hero + Vision + Portfolio + Contact CTA |
| `/tailorshift` | À créer | Présentation produit → CTA tailorshift.co |
| `/coming-soon` | À créer | Page générique pour Paris |
| `/approach` | À reconstruire | Garder le wording |
| `/contact` | À reconstruire | Garder le formulaire |

### 3.4 Animations GSAP

Implémenter les animations premium :
- Scroll reveal (stagger fade-in)
- Parallax hero layers
- Text split reveal
- Page transitions
- Navbar shrink on scroll
- Magnetic buttons

---

## 4. Plan d'Implémentation

### Phase 1 : Foundation (Priorité immédiate)

```
1. globals.css          → Injecter tous les design tokens
2. tailwind.config.ts   → Configurer la palette Irbis
3. layout.tsx           → Setup fonts (Cormorant, Inter)
4. Container            → Composant layout de base
5. Button               → Mise à jour avec nouveaux styles
```

### Phase 2 : Layout Components

```
6. Navbar               → Fixed, blur on scroll, animations
7. Footer               → Liens, légal, social
8. PageTransition       → Wrapper Framer Motion
```

### Phase 3 : Pages Marketing

```
9. Landing (/)          → Hero + sections
10. /tailorshift        → Product page
11. /coming-soon        → Generic coming soon
12. /approach           → Rebuild avec nouveau design
13. /contact            → Rebuild formulaire
```

### Phase 4 : Animations Premium

```
14. GSAP ScrollTrigger setup
15. Parallax effects
16. Text reveal animations
17. Micro-interactions
```

### Phase 5 : Polish & QA

```
18. Responsive testing
19. Accessibility audit
20. Performance optimization
21. Cross-browser testing
```

---

## 5. Fichiers de Référence

### Design System (Source of Truth)
```
Matrice_dev/knowledge/design_system_irbis.md
```

### Contenu conservé
```
irbis/design/sitemap.md
irbis/_archive/unified-strategy.md
irbis/_archive/copywriting_strategy.md
```

### Code archivé (ne pas utiliser)
```
irbis/_archive/brand-ux-spec.md
irbis/_archive/layout-ux-spec.md
irbis/design/design_system.md (OBSOLÈTE)
irbis/design/theme.md (OBSOLÈTE)
```

---

## 6. Dépendances à Installer

Déjà installées :
- [x] GSAP (`gsap`)
- [x] Tailwind v4
- [x] shadcn/ui (radix)
- [x] Lucide icons

À ajouter :
- [ ] Framer Motion (`framer-motion`) — pour page transitions
- [ ] GSAP ScrollTrigger — déjà inclus dans gsap

---

## 7. Checklist Implémentation

### Phase 1 — Foundation (TERMINÉE)

- [x] Design System documenté dans la Matrice
- [x] Visual Identity "Sanctuaire Sculptural" définie
- [x] Sitemap validé
- [x] Wording/Copywriting identifié
- [x] CSS reset effectué
- [x] HANDOFF rédigé
- [x] Fonts ajoutées (Cormorant, Inter) → `layout.tsx`
- [x] Tokens injectés dans globals.css (Light Theme)
- [x] Container component créé → `components/layout/container.tsx`
- [x] Section component créé → `components/layout/section.tsx`
- [x] Button component mis à jour → `components/ui/button.tsx`

### Effets visuels signature (dans globals.css)

- [x] `.mask-reveal` — Clip-path reveal au scroll
- [x] `.text-emerge` — Blur + fade emergence
- [x] `.depth-shadow` — Ombre sculpturale
- [x] `.gold-line` — Fil conducteur doré
- [x] `.veil` — Brume cream aux bords

---

## 8. Notes Importantes

### Visual Identity : "Sanctuaire Sculptural"

Fusion de deux directions créatives :
- **Atelier secret** : Révélation progressive, rien n'est donné, tout se mérite
- **Minimal sculptural** : Espace sacré, un seul geste fort par section

| Principe | Application |
|----------|-------------|
| **Révélation** | Masques au scroll, texte qui émerge |
| **Espace sacré** | 70%+ d'espace négatif |
| **Un geste fort** | UN élément dominant par section |
| **Profondeur** | Ombres douces, blur subtil, layers |
| **Émergence** | Typographie qui "apparaît", transitions lentes |

### Différenciation avec TailorShift

| Aspect | Irbis (Corporate) | TailorShift |
|--------|-------------------|-------------|
| Dominante | Cream (#FAF8F5) | Cream (#FAF8F5) |
| Accent | Gold + Navy typo forte | Gold (#C9A962) |
| Ton | Sculptural, monumental | Intimiste/Luxe |
| Densité | Très aéré, 1 élément/section | Sections denses |
| Échelle typo | Grande, monumentale | Élégante |
| Public | B2B, Investisseurs | Talents, Brands |

### Cohérence Familiale

- Même famille typographique (Cormorant)
- Même accent gold (#C9A962)
- Même fond cream (#FAF8F5)
- Même niveau de qualité animation
- Différenciation par l'ESPACE et l'ÉCHELLE, pas la couleur

---

## 9. Contact & Ownership

| Rôle | Responsable |
|------|-------------|
| Design System | Matrice (design_system_irbis.md) |
| Implémentation | Claude Code / Kilo Code |
| Validation | Louis |

---

**Next Step** : Phase 2 — Layout Components (Navbar, Footer, PageTransition)

### Fichiers modifiés cette session

| Fichier | Action |
|---------|--------|
| `Matrice_dev/knowledge/design_system_irbis.md` | Ajout Visual Identity "Sanctuaire Sculptural" |
| `src/app/globals.css` | Tokens complets Light Theme + effets visuels |
| `src/app/layout.tsx` | Fonts Cormorant + Inter |
| `src/components/layout/container.tsx` | NOUVEAU — Composant Container |
| `src/components/layout/section.tsx` | NOUVEAU — Composant Section |
| `src/components/ui/button.tsx` | MIS À JOUR — Styles Irbis Design System |
