# Prompt Gemini/Kilocode — Homepage IRBIS

---

## CONTEXTE

Tu vas coder la Homepage du site IRBIS, une plateforme d'executive search premium.

Le projet utilise :
- Next.js 15 + React 19
- TypeScript
- TailwindCSS 4
- Shadcn/UI components

---

## FICHIERS DE RÉFÉRENCE

Avant de commencer, lis ces fichiers dans l'ordre :

### 1. Design System & Copy
**Fichier** : `conductor/brand-ux-spec.md`
- Couleurs : ink #0F1A2E, gold #BF9E59, ivory #F6F1E7
- Typo : serif headlines, sans body
- Spacing : 80px sections, 24px cards
- Règle copy : headline ≤5 mots, body ≤12 mots

### 2. Layout & Wireframes
**Fichier** : `conductor/layout-ux-spec.md`
- Structure Homepage (7 sections)
- Grid 12 colonnes, 1280px max
- Responsive breakpoints

### 3. Instructions Step by Step
**Fichier** : `conductor/homepage-build-steps.md`
- 52 steps séquentiels
- Chaque élément avec position, dimensions, couleurs exactes
- **SUIS CE FICHIER STEP BY STEP**

### 4. Copy Détaillé (si besoin)
**Fichier** : `conductor/copy-v4-chiseled.md`
- Tous les textes exacts pour chaque section

---

## INSTRUCTIONS

### Règle 1 : Séquentiel
Exécute `homepage-build-steps.md` step by step.
Ne passe au step suivant qu'après avoir terminé le précédent.

### Règle 2 : Confirme après chaque section
Après chaque section terminée, confirme :
- "Header done ✓"
- "Hero done ✓"
- etc.

### Règle 3 : Respecte exactement
- Les couleurs HEX exactes
- Les dimensions exactes
- Le copy exact (pas de variation)
- La hiérarchie typographique

### Règle 4 : Structure fichier
Crée/modifie le fichier : `src/app/(marketing)/page.tsx`

---

## TAILWIND CONFIG

Vérifie que ces couleurs existent dans `tailwind.config.ts` :
```ts
colors: {
  ink: '#0F1A2E',
  gold: '#BF9E59',
  ivory: '#F6F1E7',
  stone: '#CFC8BB',
}
```

Si elles n'existent pas, ajoute-les d'abord.

---

## COMPOSANTS À UTILISER/CRÉER

1. **Button** — `src/components/ui/button.tsx`
   - Variant "primary" : bg-gold, text-white
   - Variant "ghost" : text-ink, no bg

2. **Card** — `src/components/ui/card.tsx`
   - Border 1px gray, radius 8px, padding 24px

---

## ORDRE D'EXÉCUTION

```
1. Vérifie tailwind.config.ts (couleurs)
2. Lis homepage-build-steps.md
3. Code section par section :
   - CONFIG
   - HEADER
   - HERO
   - WHAT WE DO
   - METHOD
   - WHY IRBIS
   - ECOSYSTEM
   - FINAL CTA
   - FOOTER
4. Confirme après chaque section
5. Test responsive (375px, 768px, 1440px)
```

---

## OUTPUT ATTENDU

Un fichier `src/app/(marketing)/page.tsx` complet avec :
- Toutes les sections de la Homepage
- Responsive mobile/tablet/desktop
- Copy exact des specs
- Couleurs exactes des specs

---

## COMMENCE

Lis `conductor/homepage-build-steps.md` et exécute Step 0.1.

Confirme quand prêt.
