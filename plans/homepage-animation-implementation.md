# 🎬 Plan d'Implémentation — Homepage Animée IRBIS

> **Date** : 2025-12-27  
> **Status** : Phase 1 (Base) - En cours  
> **Objectif** : Créer homepage bureau minimaliste avec animation jour→nuit au scroll

---

## 📊 ÉTAT ACTUEL

**Fichier actuel** : `src/app/(marketing)/page.tsx`
- ✅ Structure Next.js 15 fonctionnelle
- ✅ Copy en anglais de qualité
- ✅ Design system configuré
- ❌ **Aucune image de bureau**
- ❌ Pas de structure visuelle layers
- ❌ Pas d'animation

---

## 🎯 PLAN EN 2 PHASES

### 🟢 PHASE 1 : IMPLÉMENTATION DE BASE (ACTUEL)

**Objectif** : Créer la structure visuelle statique du bureau avant toute animation.

#### 1.1 Assets Images Nécessaires

| Asset | Description | Format | Taille |
|-------|-------------|--------|--------|
| **office-day.jpg** | Bureau vue jour (baseline) | WebP | 1920×1080 |
| **office-night.jpg** | Bureau vue nuit (même angle) | WebP | 1920×1080 |
| **window-light.png** | Overlay lumière fenêtre | PNG transparent | Variable |
| **shutter-left.png** | Volet gauche | PNG transparent | Variable |
| **shutter-right.png** | Volet droit | PNG transparent | Variable |
| **lamp-off.png** | Lampe éteinte | PNG transparent | Variable |
| **lamp-on.png** | Lampe allumée avec glow | PNG transparent | Variable |

**Options pour obtenir les images** :
1. **Midjourney** (Prompts fournis ci-dessous)
2. **Images stock** (Unsplash, Pexels)
3. **Photos existantes** (si disponibles)

#### 1.2 Structure HTML (Layers)

```tsx
<section className="hero-office">
  {/* Layer 0: Base bureau */}
  <div className="office-base">
    <Image src="/images/office-day.webp" fill priority />
  </div>
  
  {/* Layer 1: Fenêtres lumière */}
  <div className="windows-overlay" />
  
  {/* Layer 2: Volets (initialement hors cadre) */}
  <div className="shutters">
    <div className="shutter shutter-1" />
    <div className="shutter shutter-2" />
    <div className="shutter shutter-3" />
  </div>
  
  {/* Layer 3: Lampes (initialement éteintes) */}
  <div className="lamps">
    <div className="lamp lamp-1" />
    <div className="lamp lamp-2" />
  </div>
  
  {/* Layer 4: Tableaux services */}
  <div className="service-boards">
    <div className="board board-1">
      <h3>Strategy</h3>
      <p>Transform your business</p>
    </div>
    <div className="board board-2">
      <h3>Technology</h3>
      <p>Digital solutions</p>
    </div>
    <div className="board board-3">
      <h3>Growth</h3>
      <p>Scale your impact</p>
    </div>
  </div>
  
  {/* Layer 5: Hero text */}
  <div className="hero-content">
    <h1>IRBIS</h1>
    <p>High standards. Shared ambition.</p>
  </div>
</section>
```

#### 1.3 Architecture CSS (Z-index)

```css
.hero-office {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Layer 0: Base */
.office-base {
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* Layer 1: Fenêtres */
.windows-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: radial-gradient(/* lumière fenêtres */);
}

/* Layer 2: Volets */
.shutters {
  position: absolute;
  inset: 0;
  z-index: 3;
}

.shutter {
  position: absolute;
  /* Position spécifique par volet */
  transform: translateX(-100%); /* Hors cadre initialement */
}

/* Layer 3: Lampes */
.lamps {
  position: absolute;
  inset: 0;
  z-index: 4;
}

.lamp {
  position: absolute;
  /* Position spécifique par lampe */
  opacity: 0; /* Éteintes initialement */
}

/* Layer 4: Tableaux */
.service-boards {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem;
}

.board {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 2rem;
  opacity: 0.3; /* Léger initialement */
  transition: all 0.3s ease;
}

.board:hover {
  opacity: 1;
  transform: translateY(-4px);
}

/* Layer 5: Hero text */
.hero-content {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
```

#### 1.4 Responsive (Mobile)

```css
@media (max-width: 768px) {
  .service-boards {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
  
  .board {
    min-height: 150px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
```

---

### 🔵 PHASE 2 : ANIMATIONS GSAP (Après validation Phase 1)

**Cette phase ne démarre que quand la Phase 1 est validée visuellement.**

#### 2.1 Installation GSAP

```bash
npm install gsap
```

#### 2.2 Animation Timeline

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-office',
    start: 'top top',
    end: '+=300%',
    scrub: true,
    pin: true,
  }
});

// Volets fermeture (0-40%)
tl.to('.shutter-1', { x: '0%', duration: 0.15 })
  .to('.shutter-2', { x: '0%', duration: 0.15 }, 0.1)
  .to('.shutter-3', { x: '0%', duration: 0.15 }, 0.2);

// Lumières allumées (40-70%)
tl.to('.lamp-1', { 
  opacity: 1, 
  filter: 'drop-shadow(0 0 20px rgba(255, 213, 128, 0.8))',
  duration: 0.1,
  ease: 'elastic.out(1, 0.5)'
}, 0.4);

// Tableaux révélés (40-70%)
tl.to('.board-1', { opacity: 1, duration: 0.1 }, 0.4)
  .to('.board-2', { opacity: 1, duration: 0.1 }, 0.5)
  .to('.board-3', { opacity: 1, duration: 0.1 }, 0.6);
```

---

## 📝 PROMPTS MIDJOURNEY (Pour Phase 1)

### Prompt 1 : Bureau Jour (Baseline)

```
/imagine prompt: Minimalist modern office interior, warm oak wood desk and shelves, 
large floor-to-ceiling windows with bright natural daylight, 
built-in wooden bookshelves with 3 large black framed chalkboards mounted on them, 
architectural photography style, ultra realistic, warm Scandinavian design, 
clean lines, professional corporate space, golden hour soft lighting, 
view from center of room, symmetrical composition, 
ultra high resolution 8K --ar 16:9 --style raw --v 6 --seed 42
```

### Prompt 2 : Bureau Nuit (Même Angle)

```
/imagine prompt: Same modern office interior, evening ambiance, 
window shutters closed, warm pendant lamps glowing with soft tungsten light, 
cozy night atmosphere, same wooden desk and bookshelves, 
same 3 black framed chalkboards visible, architectural photography, 
ultra realistic, warm amber lighting from lamps, 
ultra high resolution 8K --ar 16:9 --style raw --v 6 --seed 42
```

### Prompt 3 : Assets Isolés

```
/imagine prompt: Wooden window shutter, closed position, 
dark walnut wood texture, modern minimalist design, 
isolated on transparent background, studio lighting, 
product photography style --v 6
```

---

## ✅ CHECKLIST PHASE 1

### Pré-requis
- [ ] Décider source des images (Midjourney / Stock / Existantes)
- [ ] Définir les 3 services sur tableaux (Strategy/Tech/Growth ou autre)
- [ ] Confirmer priorité (Base complète vs minimal)

### Implémentation
- [ ] Créer dossier `/public/images/office/`
- [ ] Obtenir/placer images (office-day.webp, office-night.webp)
- [ ] Créer composant `<OfficeHero />` dans `/src/components/`
- [ ] Implémenter structure HTML layers
- [ ] Créer CSS module avec z-index layers
- [ ] Tester responsive (mobile + desktop)
- [ ] Optimiser images (WebP, srcset)

### Validation
- [ ] Desktop : Proportions correctes, lisible
- [ ] Mobile : Layout adapté
- [ ] Performance : LCP < 2s
- [ ] Accessibilité : Alt texts, contrast
- [ ] **Validation visuelle utilisateur** ✋

---

## 🚀 ACTIONS IMMÉDIATES

### Option A : Midjourney (Si tu veux générer)
1. Je te fournis les prompts optimisés (ci-dessus)
2. Tu génères dans Midjourney
3. Tu places dans `/public/images/office/`
4. Je crée le composant avec ces images

### Option B : Images Stock (Solution rapide)
1. Je trouve des images stock similaires
2. Je les place en placeholder
3. On valide la structure
4. Tu remplaces par tes images finales plus tard

### Option C : Minimal (Ultra rapide)
1. Je crée la structure avec placeholders CSS (gradients)
2. On valide le layout
3. On ajoute les vraies images après

**Quelle option préfères-tu pour démarrer ?** 🎨

---

**Version** : 1.0  
**Dernière mise à jour** : 2025-12-27  
**Status** : Attente choix utilisateur (Option A/B/C)
