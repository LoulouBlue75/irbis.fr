# IRBIS Design System — Swiss Minimalism

> **Version** : 1.0  
> **Style** : Épuré, Thème Blanc, Professional  
> **Philosophy** : "Executive Search with Adaptive Precision" traduit visuellement

---

## 🎨 PALETTE DE COULEURS

### Base Colors
```css
/* Backgrounds */
--background-primary: #ffffff;      /* Pure White */
--background-secondary: #fafafa;    /* Subtle Gray for cards */
--background-tertiary: #f5f5f5;     /* Hover states */

/* Text */
--text-primary: #171717;            /* Deep Charcoal - Body */
--text-secondary: #737373;          /* Medium Gray - Labels */
--text-tertiary: #a3a3a3;           /* Light Gray - Hints */

/* Borders */
--border-primary: #e5e5e5;          /* Default borders */
--border-secondary: #f0f0f0;        /* Subtle dividers */
--border-strong: #d4d4d4;           /* Emphasized borders */

/* Accents */
--accent-primary: #2563eb;          /* Royal Blue - Actions */
--accent-primary-hover: #1d4ed8;    /* Darker blue on hover */
--accent-success: #059669;          /* Forest Green - Matches/Success */
--accent-warning: #f59e0b;          /* Amber - Warnings */
--accent-danger: #dc2626;           /* Red - Errors/Delete */
```

### Semantic Colors
```css
/* Status Colors */
--status-active: #059669;
--status-pending: #f59e0b;
--status-inactive: #737373;
--status-new: #2563eb;

/* Compatibility Scores */
--score-excellent: #059669;    /* > 85% */
--score-good: #2563eb;         /* 70-85% */
--score-average: #f59e0b;      /* 50-70% */
--score-low: #737373;          /* < 50% */
```

---

## 📐 SPACING SYSTEM

```css
/* Basé sur 4px base unit */
--space-1: 4px;     /* 0.25rem */
--space-2: 8px;     /* 0.5rem */
--space-3: 12px;    /* 0.75rem */
--space-4: 16px;    /* 1rem */
--space-5: 20px;    /* 1.25rem */
--space-6: 24px;    /* 1.5rem */
--space-8: 32px;    /* 2rem */
--space-10: 40px;   /* 2.5rem */
--space-12: 48px;   /* 3rem */
--space-16: 64px;   /* 4rem */
--space-20: 80px;   /* 5rem */
```

### Usage Guidelines
- **Component Padding** : `--space-6` (24px)
- **Section Spacing** : `--space-12` (48px)
- **Page Margins** : `--space-8` à `--space-16` (32-64px)
- **Inline Spacing** : `--space-2` à `--space-4` (8-16px)

---

## 🔤 TYPOGRAPHY

### Font Stack
```css
--font-sans: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Geist Mono', 'SF Mono', Monaco, 'Courier New', monospace;
```

### Type Scale
```css
/* Display */
--text-display: 3.5rem;      /* 56px - Hero titles */
--text-display-weight: 700;

/* Headings */
--text-h1: 2.5rem;          /* 40px */
--text-h2: 2rem;            /* 32px */
--text-h3: 1.5rem;          /* 24px */
--text-h4: 1.25rem;         /* 20px */
--text-h5: 1.125rem;        /* 18px */

/* Body */
--text-base: 1rem;          /* 16px - Default */
--text-sm: 0.875rem;        /* 14px - Labels */
--text-xs: 0.75rem;         /* 12px - Hints */

/* Weights */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Typography Rules
- **Titles** : Semibold (600) ou Bold (700)
- **Body** : Regular (400) ou Medium (500)
- **Labels** : Medium (500)
- **Emphasis** : Semibold (600)

---

## 🎯 COMPONENTS LIBRARY

### Button Variants

#### Primary (Actions importantes)
```css
.button-primary {
  background: var(--accent-primary);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  border: none;
  transition: background 0.2s ease;
}
.button-primary:hover {
  background: var(--accent-primary-hover);
}
```

#### Secondary (Actions secondaires)
```css
.button-secondary {
  background: white;
  color: var(--text-primary);
  padding: 12px 24px;
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.button-secondary:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}
```

#### Ghost (Actions tertiaires)
```css
.button-ghost {
  background: transparent;
  color: var(--text-secondary);
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.button-ghost:hover {
  background: var(--background-tertiary);
  color: var(--text-primary);
}
```

---

### Card Variants

#### Default Card
```css
.card {
  background: var(--background-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: var(--space-6);
  transition: all 0.2s ease;
}
.card:hover {
  border-color: var(--border-strong);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
```

#### Clean Card (Plus subtil)
```css
.card-clean {
  background: white;
  border: 1px solid var(--border-secondary);
  border-radius: 8px;
  padding: var(--space-6);
}
```

#### Stats Card
```css
.card-stats {
  background: white;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: var(--space-6);
  text-align: left;
}
```

---

### Badge Variants

#### Default
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: var(--text-xs);
  font-weight: 500;
  background: var(--background-tertiary);
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
}
```

#### Status Badges
```css
.badge-active {
  background: #d1fae5;
  color: #065f46;
  border-color: #a7f3d0;
}

.badge-pending {
  background: #fef3c7;
  color: #92400e;
  border-color: #fde68a;
}

.badge-inactive {
  background: #f5f5f5;
  color: #737373;
  border-color: #e5e5e5;
}
```

---

### Input Fields

```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  font-size: var(--text-base);
  background: white;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input::placeholder {
  color: var(--text-tertiary);
}
```

---

## 📊 LAYOUT PATTERNS

### Bento Grid (Dashboard)
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}
```

### Split-Screen (Profiles)
```css
.split-screen {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-8);
}

@media (max-width: 768px) {
  .split-screen {
    grid-template-columns: 1fr;
  }
}
```

### Full-Width Cards (Lists)
```css
.card-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
```

---

## 🎬 ANIMATIONS & TRANSITIONS

### Principles
- **Durée** : 200ms pour les micro-interactions, 300ms pour les transitions complexes
- **Easing** : `ease` ou `cubic-bezier(0.4, 0, 0.2, 1)` (Material ease)
- **Performance** : Utiliser `transform` et `opacity` uniquement

### Standard Transitions
```css
/* Hover Effects */
transition: all 0.2s ease;

/* Modal/Dialog Entry */
transition: opacity 0.3s ease, transform 0.3s ease;

/* Skeleton Loading */
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

---

## 📐 SHADOW SYSTEM

### Subtle Shadows Only
```css
/* Hover Cards */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);

/* Dropdowns/Modals */
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);

/* Floating Elements */
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
```

**Règle** : Pas d'ombres lourdes. Le design repose sur les borders et le whitespace.

---

## 🎯 USAGE GUIDELINES

### DO ✅
- Utiliser whitespace généreusement (minimum `--space-6` pour padding)
- Borders subtiles (1px `--border-primary`)
- Typography hiérarchisée (clear visual hierarchy)
- Accents de couleur réservés aux actions importantes
- Hover states subtils mais visibles

### DON'T ❌
- Pas d'ombres lourdes (box-shadow > 16px)
- Pas de dégradés complexes
- Pas de couleurs saturées (sauf accents)
- Pas de border-radius extrêmes (< 4px ou > 12px)
- Pas d'animations lourdes (> 500ms)

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Tablet portrait */
--breakpoint-md: 768px;   /* Tablet landscape */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Ultra-wide */
```

---

## 🔗 INTEGRATION AVEC SHADCN/UI

### Composants shadcn à installer
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add select
npx shadcn@latest add dialog
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add tabs
npx shadcn@latest add form
npx shadcn@latest add dropdown-menu
npx shadcn@latest add avatar
npx shadcn@latest add progress
npx shadcn@latest add skeleton
```

### Customisation
Tous les composants shadcn seront customisés avec les tokens ci-dessus via `globals.css`.

---

## 📚 RÉFÉRENCES

- **Inspiration** : Apple Business, Linear, Stripe Dashboard
- **Accessibility** : WCAG 2.1 Level AA minimum
- **Typography** : Geist (Vercel)
- **Component Library** : shadcn/ui (Radix UI primitives)

---

**Document créé** : 22/12/2024  
**Statut** : ✅ Ready for Implementation
