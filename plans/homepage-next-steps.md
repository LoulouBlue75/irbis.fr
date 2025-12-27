# 🎬 Homepage Animation — Phase 1 Complétée ✅

> **Date** : 2025-12-27  
> **Status** : Phase 1 (Base) terminée — Prêt pour test visuel  
> **Phase suivante** : Validation visuelle → Phase 2 (Animations GSAP)

---

## ✅ CE QUI A ÉTÉ FAIT (Phase 1)

### 1. Structure Composant
**Fichier créé** : `src/components/office-hero.tsx`
- ✅ Composant React fonctionnel
- ✅ 6 layers organisés (z-index 1 à 10)
- ✅ Props configurables (boards services)
- ✅ Type-safe (TypeScript)

### 2. Styles CSS
**Fichier créé** : `src/components/office-hero.css`
- ✅ Architecture layers complète
- ✅ Placeholders gradients (simulent bureau bois + fenêtres)
- ✅ Volets, lampes, tableaux positionnés
- ✅ Responsive mobile (breakpoints 768px, 480px)
- ✅ Accessibility (prefers-reduced-motion)
- ✅ États hover sur tableaux
- ✅ Animations subtiles (sunlight pulse, bounce indicator)

### 3. Intégration Homepage
**Fichier modifié** : `src/app/(marketing)/page.tsx`
- ✅ Import OfficeHero
- ✅ Remplacement ancien hero par nouveau composant
- ✅ Rest du contenu préservé

### 4. Documentation
**Fichiers créés** :
- ✅ `plans/homepage-animation-implementation.md` (Plan complet)
- ✅ `plans/homepage-next-steps.md` (Ce fichier)

---

## 🎨 RÉSULTAT ACTUEL (À TESTER)

### Ce que tu devrais voir maintenant :
1. **Hero plein écran** (100vh)
2. **Gradient placeholder** simulant :
   - Ciel bleu en haut (fenêtres)
   - Transition vers bois chaud
   - Dégradé bois du bureau en bas
3. **3 zones de lumière** animées (effet sunlight pulsant)
4. **3 tableaux services** en bas :
   - Strategy
   - Technology
   - Growth
5. **Hero text** centré :
   - "IRBIS." (grand titre)
   - "High standards. Shared ambition."
   - Indicateur scroll qui bounce
6. **Hover sur tableaux** :
   - Lift effect
   - Bordure colorée (bleu/violet/amber)
   - Shadow

### Responsive Mobile
- Tableaux empilés verticalement
- Texte adapté
- Fenêtres simplifiées (2 au lieu de 3)

---

## 🚀 COMMANDE POUR TESTER

```bash
# Si le serveur dev n'est pas lancé
cd c:/Users/louis/Desktop/irbis
npm run dev

# Ouvrir dans le navigateur
# http://localhost:3000
```

### Points à vérifier :
1. **Desktop** : Proportions correctes, lisible
2. **Mobile** : Layout adapté (resize browser)
3. **Hover** : Tableaux réagissent au survol
4. **Performance** : Chargement rapide
5. **Pas d'erreurs** : Check console browser (F12)

---

## 🔵 PHASE 2 : ANIMATIONS GSAP (Prochaine étape)

**Ne démarrer que quand Phase 1 validée visuellement !**

### Installation requise :
```bash
npm install gsap
```

### Fichier à créer :
`src/components/office-hero-animated.tsx`

### Animations prévues :
1. **Pin hero scene** au scroll (scène reste fixe)
2. **Volets fermeture** séquentielle (0-40% scroll)
3. **Lumière jour diminue** (0-40% scroll)
4. **Lampes s'allument** avec bounce elastique (40-70%)
5. **Tableaux révélés** progressivement (40-70%)
6. **Hero text fade-out** (0-70%)
7. **Unpin** à 70% → page scroll normalement

### Durée scroll prévue :
- **3× viewport height** (~4500px desktop)
- Utilisateur contrôle vitesse via scroll
- Smooth 60fps

---

## 🎨 PHASE 1.5 : VRAIES IMAGES (Optionnel avant Phase 2)

Si tu veux remplacer les placeholders par de vraies images **avant** d'ajouter les animations :

### Option A : Images Midjourney

**Prompts fournis dans** : `plans/homepage-animation-implementation.md`

**À placer dans** : `/public/images/office/`
- `office-day.webp` (image principale jour)
- `office-night.webp` (même angle, nuit)

**Modifier dans** : `src/components/office-hero.tsx`
```tsx
// Remplacer
<div className="office-placeholder" />

// Par
<Image 
  src="/images/office/office-day.webp" 
  alt="IRBIS Office"
  fill
  priority
  className="object-cover"
/>
```

### Option B : Images Stock

Tu peux utiliser temporairement des images de :
- [Unsplash](https://unsplash.com/s/photos/minimalist-office)
- [Pexels](https://www.pexels.com/search/office-interior/)

Chercher : "minimalist office wood scandinavian"

---

## 📝 CHECKLIST VALIDATION PHASE 1

### Visuel
- [ ] Hero s'affiche en plein écran
- [ ] Gradient placeholder visible (ciel → bois)
- [ ] 3 zones de lumière pulsent subtilement
- [ ] 3 tableaux visibles en bas
- [ ] Hero text "IRBIS." centré et lisible
- [ ] Scroll indicator bounce

### Interactions
- [ ] Hover sur tableaux fonctionne
- [ ] Clic sur tableaux navigue vers /executive-search
- [ ] Responsive mobile : tableaux empilés

### Technique
- [ ] Aucune erreur console (F12)
- [ ] Pas de warning React/Next
- [ ] CSS chargé correctement
- [ ] Performance OK (pas de lag)

### Accessibilité
- [ ] Texte contraste suffisant
- [ ] Animations pausent si prefers-reduced-motion
- [ ] Navigation clavier possible (Tab sur tableaux)

---

## 🛠️ TROUBLESHOOTING

### Problème : Le composant ne s'affiche pas
**Solution** :
```bash
# Vérifier que le serveur dev est relancé
npm run dev

# Vérifier pas d'erreur dans terminal
# Vérifier console browser (F12)
```

### Problème : CSS ne charge pas
**Solution** :
```tsx
// Vérifier import dans office-hero.tsx
import './office-hero.css'; // ✅ Doit être présent
```

### Problème : "Module not found"
**Solution** :
```bash
# Vérifier que les fichiers existent bien :
ls src/components/office-hero.tsx
ls src/components/office-hero.css
```

### Problème : Gradient ne s'affiche pas bien
**Attendu** : C'est un placeholder temporaire
**Solution** : Remplacer par vraies images (Phase 1.5)

---

## 💡 DÉCISIONS À PRENDRE

### 1. Validation Visuelle Phase 1
**Question** : Est-ce que le layout/structure te convient ?
- ✅ Oui → On passe à Phase 2 (animations)
- 🔧 Non → On ajuste (position tableaux, couleurs, etc.)

### 2. Images
**Question** : Quand veux-tu ajouter les vraies images ?
- **Option A** : Maintenant (Phase 1.5) → Je t'aide avec prompts Midjourney
- **Option B** : Après animations (Phase 2) → On anime d'abord avec placeholders
- **Option C** : Jamais → Placeholder suffit (moins immersif)

### 3. Services sur Tableaux
**Question** : Les 3 services affichés sont-ils corrects ?
- Actuellement : Strategy / Technology / Growth
- Alternative : Executive Search / Decision Partnership / Ecosystem
- Ou : Tes 3 services réels d'IRBIS

---

## 📊 MÉTRIQUES PHASE 1

| Métrique | Valeur |
|----------|--------|
| **Fichiers créés** | 3 |
| **Lignes de code** | ~500 |
| **Layers implémentés** | 6 |
| **Responsive breakpoints** | 2 |
| **Animations CSS** | 2 (sunlight, bounce) |
| **States préparés pour GSAP** | 6 |
| **Performance target** | < 2s LCP |

---

## 🚀 PROCHAINE ACTION IMMÉDIATE

**1. Lance le serveur** (si pas déjà fait) :
```bash
npm run dev
```

**2. Ouvre** : http://localhost:3000

**3. Observe** le nouveau hero

**4. Décide** :
- ✅ Ça me plaît → On ajoute les animations (Phase 2)
- 🎨 Je veux de vraies images d'abord → Phase 1.5
- 🔧 Faut ajuster → Dis-moi quoi

**5. Réponds-moi** avec :
- Screenshot du résultat (optionnel)
- Tes commentaires
- Décision pour la suite

---

## 📞 SUPPORT

### Questions Fréquentes

**Q : Les placeholders sont moches, c'est normal ?**  
R : Oui ! Ce sont des gradients CSS temporaires. Ils seront remplacés par de belles images Midjourney ou stock.

**Q : Je ne vois pas les volets/lampes ?**  
R : Normal ! Ils sont hors cadre (volets) ou éteints (lampes) dans l'état initial. Ils apparaîtront avec les animations GSAP en Phase 2.

**Q : Les tableaux sont trop transparents ?**  
R : C'est voulu (opacity 0.4). Au hover ils passent à opacity 1. En Phase 2, ils seront révélés progressivement au scroll.

**Q : Ça marche pas sur mobile ?**  
R : Vérifie le responsive (resize browser). Si problème, dis-moi et j'ajuste.

**Q : Je veux changer les textes des tableaux ?**  
R : Modifie dans `src/components/office-hero.tsx` le tableau `defaultBoards`.

---

## 🎉 FÉLICITATIONS

**Phase 1 est complète !** 

Tu as maintenant une structure solide prête pour les animations GSAP. La séparation planification/implémentation a été respectée, exactement comme prescrit dans le workflow animation avancée.

**Prochain rendez-vous** : Validation visuelle + Décision Phase 2 🎬

---

**Version** : 1.0  
**Auteur** : Cline  
**Date** : 2025-12-27  
**Status** : ✅ Phase 1 terminée — En attente validation utilisateur
