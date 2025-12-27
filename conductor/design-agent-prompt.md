# Design Agent Prompt — IRBIS v4.0

> **Pour** : Gemini, GPT-4V, Claude Vision
> **Principe** : Impact maximum. Mots minimum.

---

## CONTEXTE

**IRBIS** — Executive search premium. Panthère des neiges.

**Positionnement** : High-end, méthodique, humain. Cabinet d'avocats top-tier × SaaS moderne.

**Mots-clés** : Demanding. Benevolent. Engaged.

---

## RÈGLES NON-NÉGOCIABLES

### Copy
```
Headline : ≤ 5 mots
Body     : ≤ 12 mots
CTA      : ≤ 3 mots
```

### Couleurs
```
--ink:    #0F1A2E    Texte, structure
--gold:   #BF9E59    CTA uniquement (1 max/écran)
--ivory:  #F6F1E7    Fonds
--white:  #FFFFFF    Cartes
--stone:  #CFC8BB    Secondaire
```

### Typo
- Headlines : Serif, 56px max
- Body : Sans (Geist), 16px
- Poids : 400 body, 600-700 headlines

### Espacements
- Section gap : 80px
- Card padding : 24px
- Radius buttons : 6px
- Radius cards : 8px

---

## ESTHÉTIQUE

### OUI
- Blanc, espace négatif
- Typographie dominante
- Photos muettes, profondeur de champ
- Animations calmes (fade, pas bounce)
- Densité visuelle, pas textuelle

### NON
- Gradients
- Couleurs vives
- Illustrations playful
- Texte explicatif
- Stock photos clichés

### Références (esprit)
- Apple.com — whitespace
- Stripe — clarté
- Aesop — premium minimal
- Bottega Veneta — silence luxueux

---

## PAGES — STRUCTURE

### Homepage
```
HEADER
─────────────────
HERO (full viewport)
"High standards. Shared ambition."
[Start a conversation]
─────────────────
3 CARDS — What we do
─────────────────
4 STEPS — Method
"Four steps. Full commitment."
─────────────────
3 STATEMENTS — Why
"Three commitments."
─────────────────
4 CARDS — Ecosystem
─────────────────
CTA
"Let's talk."
─────────────────
FOOTER (ink bg)
```

### Console (App)
```
SIDEBAR 240px │ CONTENT
──────────────┼─────────────────
Overview      │ Stats cards (4)
Mandates      │ Activity feed
Talents       │
Settings      │
```

---

## OUTPUT

Format : PNG haute fidélité
Naming : `[page]-[viewport].png`

Viewports :
- Desktop : 1440px
- Mobile : 375px

---

## VALIDATION

Avant livraison :

- [ ] 1 seul CTA gold par écran
- [ ] Headlines ≤ 5 mots
- [ ] Pas de texte superflu
- [ ] Whitespace généreux
- [ ] Feeling premium, pas corporate

---

*v4.0 — Ciselé*
