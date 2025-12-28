# IRBIS — Brief Complet pour Google Stitch

---

## 1. QUI EST IRBIS

### L'entreprise
**Irbis Partners** est un cabinet français d'executive search (chasse de têtes) premium basé à Paris. Spécialisé dans le recrutement de dirigeants et talents rares pour des organisations ambitieuses.

### Le nom
"Irbis" = la panthère des neiges en russe. Animal rare, discret, puissant, qui évolue dans des environnements exigeants.

### Le positionnement
- **Haut de gamme** : clients exigeants, mandats stratégiques
- **Méthodique** : processus structuré (méthodologie 8D)
- **Humain** : technologie au service de l'humain, jamais l'inverse
- **Engagé** : on ne se cache pas derrière un process, on assume le résultat

### Le site existant
www.irbis.fr — à refaire complètement avec la nouvelle identité

---

## 2. LOGO & IDENTITÉ VISUELLE

### Le logo
```
[Tête de panthère stylisée]  IRBIS PARTNERS
        Navy #0F1A2E          Navy   Gold #BF9E59
```

**Description du logo :**
- Tête de panthère des neiges de profil (regardant vers la gauche)
- Style : lignes épurées, géométrique, moderne
- Couleur : Navy #0F1A2E (bleu marine très foncé)
- Le mot "IRBIS" en navy, majuscules, sans-serif bold
- Le mot "PARTNERS" en gold #BF9E59, majuscules, sans-serif light

### Palette couleurs
| Nom | Hex | Usage |
|-----|-----|-------|
| **Ink Navy** | #0F1A2E | Texte principal, logo, footer |
| **Foil Gold** | #BF9E59 | CTA principal uniquement (rare) |
| **Ivory** | #F6F1E7 | Fonds de sections |
| **White** | #FFFFFF | Cartes, header |
| **Stone** | #CFC8BB | Texte secondaire |

### Typographie
| Usage | Font | Style |
|-------|------|-------|
| Headlines | Serif (Playfair Display, Georgia) | Élégant, éditorial |
| Body/UI | Sans-serif (Inter, Geist) | Clean, lisible |

---

## 3. TON & ESPRIT

### Personnalité de marque
| Trait | Signification |
|-------|---------------|
| **Exigeant** | Standards élevés, pas de compromis |
| **Bienveillant** | Respectueux, humain, pas froid |
| **Engagé** | On s'implique, on assume |

### Ce qu'on dit
- "Talent" (jamais "candidat")
- "Mandat" (jamais "offre d'emploi")
- "Alignement" (jamais "matching")
- "Console" (jamais "dashboard")

### Ce qu'on ne dit JAMAIS
- "Nos experts..."
- "Best-in-class..."
- "Solution innovante..."
- Tout jargon corporate creux

### Principe de rédaction
```
Headline : maximum 5 mots
Body : maximum 12 mots
Impact > Explication
```

---

## 4. HEADER (Très important)

### Structure exacte
```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]                Nav links                    [CTA gold]   │
└─────────────────────────────────────────────────────────────────┘
```

### Éléments

**Logo (gauche) :**
- Icône panthère + "IRBIS" (navy) + "PARTNERS" (gold)
- OU juste "IRBIS" en navy si espace réduit

**Navigation (centre) :**
SEULEMENT ces liens :
```
Approach    Executive Search    References    Contact
```
- 4 liens maximum
- PAS de : Home, About, Services, Use Cases, Clients, Candidates
- Font : sans-serif, 16px, navy #0F1A2E

**CTA (droite) :**
- Texte : "Start a conversation"
- Style : bouton gold #BF9E59, texte blanc
- Radius : 6px

### Specs header
- Hauteur : 64px
- Fond : blanc #FFFFFF
- Position : fixed (sticky au scroll)
- Pas de bordure, ombre subtile au scroll

---

## 5. HOMEPAGE — STRUCTURE COMPLÈTE

### Vue d'ensemble
```
HEADER (64px, fixed, blanc)
─────────────────────────────
HERO (100vh, fond ivory)
─────────────────────────────
WHAT WE DO (fond blanc, 3 cartes)
─────────────────────────────
METHOD (fond ivory, 4 blocs)
─────────────────────────────
WHY IRBIS (fond blanc, 3 statements)
─────────────────────────────
ECOSYSTEM (fond ivory, 4 cartes)
─────────────────────────────
FINAL CTA (fond navy)
─────────────────────────────
FOOTER (fond navy)
```

---

### SECTION : HERO

**Layout :** Plein écran (100vh), contenu centré verticalement et horizontalement

**Fond :** Ivory #F6F1E7 (couleur unie, pas d'image)

**Contenu :**
```
              High standards.
              Shared ambition.

     Executive search. Adaptive precision.

           [Start a conversation]

              The approach →
```

**Specs :**
| Élément | Style |
|---------|-------|
| "High standards." | Serif, 56px, bold, navy, centré |
| "Shared ambition." | Serif, 56px, bold, navy, centré |
| Sous-titre | Sans-serif, 18px, regular, navy 80% opacity |
| CTA bouton | Gold #BF9E59, texte blanc, 16px, padding 16px 32px |
| CTA texte | Sans-serif, 16px, navy, "The approach →" |

**Espacement :**
- Entre les 2 lignes headline : 8px
- Headline → sous-titre : 24px
- Sous-titre → bouton : 32px
- Bouton → lien : 24px

---

### SECTION : WHAT WE DO

**Layout :** 3 cartes en ligne (égales)

**Fond section :** Blanc #FFFFFF

**Pas de titre de section** — les cartes parlent seules

**Cartes :**

| Carte | Titre | Body | CTA |
|-------|-------|------|-----|
| 1 | Executive Search | Leadership roles. Rare specialists. End-to-end. | Explore → |
| 2 | Sparring Partner | We challenge the brief. You own the decision. | — |
| 3 | Ecosystem | Specialised ventures. Same standard. | — |

**Specs cartes :**
- Fond : blanc #FFFFFF
- Border : 1px #E5E5E5
- Radius : 8px
- Padding : 24px
- Titre : sans-serif, 24px, semibold, navy
- Body : sans-serif, 16px, regular, gris #525252
- CTA : sans-serif, 14px, medium, navy

---

### SECTION : METHOD

**Layout :** Titre + 4 blocs en ligne

**Fond section :** Ivory #F6F1E7

**Titre :** "Four steps. Full commitment."
- Serif, 32px, semibold, navy, centré

**4 blocs :**

| # | Mot | Sous-texte |
|---|-----|------------|
| 01 | Align | Stakes. Success. Non-negotiables. |
| 02 | Map | Research. Access. Reality. |
| 03 | Understand | Trajectory. Judgement. Fit. |
| 04 | Decide | Support. Control. Close. |

**Specs blocs :**
- Fond : blanc #FFFFFF
- Radius : 8px
- Padding : 24px
- Numéro : sans-serif, 14px, bold, gold #BF9E59
- Mot : sans-serif, 20px, semibold, navy
- Sous-texte : sans-serif, 14px, regular, gris

---

### SECTION : WHY IRBIS

**Layout :** Titre + liste verticale centrée

**Fond section :** Blanc #FFFFFF

**Titre :** "Three commitments."
- Serif, 32px, semibold, navy, centré

**Statements (liste numérotée, centrée) :**
```
1. We share your ambition.
2. We own the outcome.
3. We respect people.
```

**Specs :**
- Sans-serif, 20px, medium, navy
- Espacement entre items : 16px
- PAS de cartes, juste le texte

---

### SECTION : ECOSYSTEM

**Layout :** Titre + grille 2×2 de cartes

**Fond section :** Ivory #F6F1E7

**Titre :** "The ecosystem."
- Serif, 32px, semibold, navy, centré

**4 cartes :**

| Carte | Nom | Ligne | CTA |
|-------|-----|-------|-----|
| 1 | Executive Search | Flagship service. | Explore → |
| 2 | Tailor Shift | Luxury retail. | Visit → |
| 3 | Paris | Career clarity. | Visit → |
| 4 | Next | In development. | Contact → |

**Specs cartes :**
- Identiques à section "What we do"
- Grille 2×2 avec gap 24px

---

### SECTION : FINAL CTA

**Layout :** Pleine largeur, contenu centré

**Fond :** Navy #0F1A2E

**Contenu :**
```
        Let's talk.

   [Start a conversation]
```

**Specs :**
- Headline : serif, 40px, semibold, blanc #FFFFFF
- CTA : bouton gold #BF9E59, texte blanc
- Padding section : 80px vertical

---

### FOOTER

**Layout :** Logo + 3 colonnes de liens + bottom bar

**Fond :** Navy #0F1A2E

**Structure :**
```
IRBIS          Services            Company           Connect
[logo]         Executive Search    About             Contact
               Tailor Shift        Approach          LinkedIn
               Paris               References

─────────────────────────────────────────────────────────────
© 2025 Irbis Partners                      Privacy · Terms
```

**Specs :**
- Logo : blanc
- Titres colonnes : 14px, semibold, blanc
- Liens : 14px, regular, stone #CFC8BB
- Bottom bar : séparée par ligne blanche 10% opacity
- Copyright : 12px, stone

---

## 6. RÈGLES ABSOLUES

1. **UN SEUL bouton gold par écran** — toutes les autres actions = liens texte
2. **Header = 4 liens max** — Approach, Executive Search, References, Contact
3. **Pas de "Home"** — le logo ramène à l'accueil
4. **Beaucoup d'espace blanc** — le vide est un choix
5. **Copy exact** — ne pas reformuler, ne pas ajouter
6. **Pas d'images stock** — couleurs unies ou vraies photos si disponibles
7. **Serif pour titres, sans pour body** — jamais l'inverse

---

## 7. CE QUE JE VEUX

Une homepage qui :
- Respire le premium (comme Apple, Aesop, Bottega Veneta)
- Dit peu mais frappe fort
- A une hiérarchie visuelle claire
- Utilise le gold avec parcimonie
- Donne envie de scroller
- Inspire confiance et ambition

---

## 8. CE QUE JE NE VEUX PAS

- Header surchargé avec 10 liens
- Plusieurs boutons gold sur le même écran
- Texte explicatif/verbeux
- Look "template SaaS"
- Stock photos de gens en costume qui se serrent la main
- Gradients ou effets flashy

---

*Brief pour Google Stitch — IRBIS Homepage*
