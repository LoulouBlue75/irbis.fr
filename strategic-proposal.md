# IRBIS — Proposition Stratégique Fondationale

> **Version** : 1.0  
> **Date** : 24 décembre 2024  
> **Statut** : Document de Référence Stratégique  
> **Langage** : Français (avec éléments de marque en Anglais)

---

## 1. PRÉAMBULE & CONTEXTE STRATÉGIQUE

### 1.1 Diagnostic du Projet Actuel

Le projet Irbis, dans son état actuel, souffre de déficiences structurelles qui compromettent son positionnement premium et sa crédibilité auprès d'une clientèle de cadres dirigeants. L'analyse révèle quatre axes de défaillance majeurs :

**Absence de vision informationnelle cohérente** — Le sitemap existant, bien que fonctionnel, a été construit de manière incrémentale sans véritable hiérarchisation stratégique. Les routes sont organisées par fonctionnalité plutôt que par intention utilisateur, créant une navigation qui reflète les silos internes de l'entreprise plutôt que les parcours décisionnels des clients.

**Identité de marque fragmentée** — Les documents de branding existants (branding_strategy.md, copywriting_strategy.md) contiennent des éléments de qualité mais manquent d'intégration systémique. La plateforme de marque, le système verbal et les recommandations visuelles coexistent sans véritable hiérarchie ni règles de gouvernance.

**Copywriting inhomogène** — Le ton de voix oscille entre plusieurs registres sans fil conducteur clair. Les micro-textes applicatifs et les contenus marketing utilisent des vocabulaires distincts, créant une dissonance cognitive pour l'utilisateur qui navigue entre les différentes surfaces.

**Expérience utilisateur non systématisée** — Le design system fournit des spécifications techniques mais les principes d'interaction, les parcours utilisateurs et les moments de vérité ne sont pas documentés de manière actionnable.

### 1.2 Objectifs de Cette Proposition

Cette proposition stratégique vise à établir un socle foundational unique qui corrige ces déficiences tout en respectant les contraintes suivantes :

- **Positionnement premium** — Chaque élément doit refléter l'excellence attendue dans le secteur du recrutement de cadres dirigeants
- **Scalabilité architecturale** — La structure doit anticiper l'évolution vers des services additionnels (Tailor Shift, outils-carrière)
- **Cohérence absolue** — Tous les éléments développés doivent fonctionner en synergie parfaite
- **Opérationnalité immédiate** — Le document doit servir de feuille de route pour les équipes de conception et de développement

---

## 2. ARCHITECTURE INFORMATIONNELLE

### 2.1 Principes Directeurs

L'architecture informationnelle d'Irbis repose sur une métaphore structurelle puissante : **l'Observatoire** (point de vue élevé, perspective, clarté) et **la Maison** (lieu d'accueil, d'intimité, de décision). Cette dualité guide l'organisation de l'ensemble des contenus et fonctionnalités.

La structure suit trois niveaux d'intention utilisateur distincts :

**Découverte** — L'utilisateur explore, évalue, compare. Il recherche des signaux de crédibilité et une première impression de professionnalisme.

**Engagement** — L'utilisateur s'investit dans une relation, partage des informations sensibles, commence un processus de recrutement ou de candidature.

**Exécution** — L'utilisateur travaille dans l'application, gère des mandats, consulte des profils, prend des décisions.

### 2.2 Sitemap Stratégique

Le sitemap est organisé en quatre zones distinctes, chacune avec son propre rythme, tonalité et niveau d'intimité.

#### Zone A — Présence (Marketing Public)

Cette zone constitue la vitrine de marque et le premier point de contact avec les prospects. Elle est caractérisée par une communication éditoriale soignée, des visuels de haute qualité et des parcours de découverte non linéaires.

```
/accueil
  ├── Hero : Proposition de valeur principale
  ├── Preuve : Sociographie et signaux de crédibilité
  ├── Méthode : Processus et différenciation
  ├── Écosystème : Vue d'ensemble des services
  └── CTA : Demande de contact ou accès plateforme

/a-propos
  ├── Vision : Mission et conviction fondatrice
  ├── Équipe : Philosophie et approche humaine
  ├── Technologie : Positionnement AI-augmented
  └── Valeurs : Discipline, Présence, Illumination, Élévation

/nos-services
  ├── Executive Search : Service flagship
  ├── Conseil en décision : Accompagnement stratégique
  └── Écosystème : Vue d'ensemble (Tailor Shift, etc.)

/methodologie
  ├── Notre processus : Les 4 phases
  ├── 8D Matching : Différenciation technique
  └── Confidentialité : Garanties et principes

/contact
  ├── Formulaire de contact
  ├── Localisation : Paris
  └── Accès sécurisé : Console (pour clients)

/carrieres (futur)
  ├── Offres de postes
  ├── Candidature spontanée
  └── Équipe Irbis : Valeurs et culture
```

#### Zone B — Écosystème (Portails de Services)

Cette zone héberge les services additionnels sous forme de portails distincts, chacun avec son identité propre tout en restant connectÉ à la maison mère Irbis.

```
/tailor-shift (-service)
  ├── Landing dédiée
  ├── Plateforme de recrutement retail luxe
  └── Navigation vers Irbis (retour)

//(carrieres) (futur)
  ├── Outil de perspective de carrière
  ├── Tests et assessments
  └── Connexion Irbis
```

#### Zone C — Console (Application Protégée)

Cette zone constitue le cœur opérationnel de la plateforme. L'accès est restreint aux utilisateurs authentifiés et elle est caractérisée par une interface fonctionnelle, efficace et confidentielle.

```
/console (tableau de bord principal)
  ├── Métriques : Vue d'ensemble des mandats
  ├── Activité : Flux d'événements récents
  └── Accès rapide : Actions principales

/console/mandats
  ├── Liste : Mandats actifs, en cours, clos
  ├── Créer : Nouveau mandat
  └── [id] : Cockpit du mandat
      ├── Aperçu : Spécifications et contexte
      ├── Recherche : Cartographie du marché
      ├── Matching : Profils recommandés
      ├── Pipeline : Vue Kanban des candidats
      └── Communications : Historique

/console/talents
  ├── Base : Profils qualifiés
  ├── Recherche : Moteur sémantique
  └── [id] : Profil360
      ├── Parcours : Expérience et formation
      ├── Analyse : Évaluation AI
      ├── Historique : Interactions passées
      └── Actions : Contact, ajouter au pipeline

/console/ingestion
  ├── Upload : Import de CVs
  ├── Intégrations : LinkedIn, email, WhatsApp
  └── Statut : Santé des connecteurs

/console/parametres
  ├── Profil : Gestion du compte
  ├── Préférences : Notifications, interface
  └── Sécurité : Authentification
```

#### Zone D — Système (Administration)

Zone technique réservée aux administrateurs pour la gestion de la plateforme.

```
/admin
  ├── Utilisateurs : Gestion des accès
  ├── Mandats : Supervision globale
  ├── Audit : Logs et traçabilité
  └── Configuration : Paramètres système
```

### 2.3 Évolution vers Services Additionnels

L'architecture a été conçue pour accueillir de nouveaux services sans refonte majeure. Chaque service additionnel suit le pattern suivant :

**Portail dédié** — Chaque service dispose de sa propre URL et de son propre design (within brand guidelines), créant une expérience cohérente mais distincte.

**Connexion Irbis** — Des points d'ancrage permettent la navigation entre services (CTA, footer, header).

**Données partagées** — L'architecture technique permet le partage sécurisé de données entre services (avec consentement).

**Gouvernance unifiée** — Un système de permissions centralisé gère les accès multi-services.

---

## 3. IDENTITÉ DE MARQUE

### 3.1 Plateforme de Marque

#### Essence de Marque

**Irbis est un observatoire que l'on peut franchir — une maison de perspective pour les leaders qui prennent des décisions qui façonnent les organisations et les vies.**

Cette essence capture la dualité fondamentale de la marque : la hauteur de vue (Observatoire) et l'intimité de la décision (Maison). Elle positionne Irbis non comme un simple prestataire de recrutement, mais comme un partenaire de réflexion et d'action pour les dirigeants.

#### Valeurs de Marque

**Discipline** — Méthode rigoureuse, processus structuré, respect de la complexité sans rigidité. Irbis apporte de la structure là où il y a du bruit.

**Présence** — Écoute attentive, lecture des nuances, compréhension de la réalité humaine des décisions. Irbis ne cache pas derrière les données.

**Illumination** — Mise en lumière des signaux, explicitation des arbitrages, clarté pour des décisions défendables. Irbis aide à voir ce qui compte.

**Élévation** — Partage de l'ambition, aide à tirer l'organisation vers le haut. Irbis ne se contente pas de livrer un recrutement — il renforce le jugement.

#### Personnalité de Marque

Irbis s'exprime comme un partenaire exigeant et bienveillant, jamais comme un slogan vide ou un consultant distant. La personnalité se définit par trois traits complémentaires :

**Engagé** — Irbis entre dans l'arène avec ses clients, pas comme spectateur mais comme sparring partner. L'ambition est partagée.

**Exigeant** — Irbis maintient un haut niveau d'excellence, questionne lesbriefs, affine les critères. La rigueur est non négociable.

**Bienveillant** — Irbis respecte toujours les personnes, candidates et clients. L'humain est au centre.

### 3.2 Positionnement Différenciant

#### Énoncé de Positionnement

**Irbis accompagne les dirigeants décisifs qui construisent des organisations qui doivent s'élever.** Nous combinons une méthode disciplinée, une présence humaine et une clarté assistée par l'IA — avec l'humilité de respecter la complexité humaine, et l'engagement envers les résultats.

#### Lignes de Positionnement

Plusieurs formulations sont disponibles selon le contexte d'usage :

- **Haute norme. Ambition partagée.**
- **Méthode. Présence. Élévation.**
- **Dans l'arène, avec vous.**
- **Exigeant sur les décisions. Doux avec les personnes.**
- **Clarté pour les constructeurs.**

#### Différenciateurs Clés

**8D Matching** — Une méthodologie de matching sur 8 dimensions (compétences, leadership, image, trajectoire, etc.) qui dépasse le simple croisement de mots-clés.

**Confidentialité par conception** — Les talents ne sont visibles que s'ils correspondent activement. Les salaires sont vérifiés mais masqués.

**Présence humaine** — L'IA amplifie la recherche et la synthèse, mais le jugement, l'écoute et la responsabilité restent entièrement humains.

### 3.3 Système Verbal

#### Ton de Voix

Le ton Irbis est caractérisé par quatre dimensions :

**Clarté** — Pas de jargon inutile, pas de flou. Chaque phrase a un purpose. Les idées sont exprimées directement.

**Élévation** — Un niveau de langage soutenu mais accessible. Des références à la pensée, à la méthode, à l'excellence.

**Chaleur** — Une dimension humaine et respectueuse. On s'adresse à des personnes, pas à des fonctions.

**Précision** — Le vocabulaire est choisi avec soin. Chaque mot compte. Les concepts sont définis.

#### Champs Lexicaux à Privilégier

**Perspective, clarté, jugement, trajectoire, signal, artisanat, norme, élévation** — Ces termes évoque la rigueur et la vision.

**Lieu, pièce, seuil, bibliothèque, étude** — En touches, jamais partout, ces termes evoquent la maison et l'intimité.

**Construire, élever, ambition, partenaire d'entraînement** — Ces termes evoquent l'action et l'engagement.

#### Champs Lexicaux à Éviter

- "Discret" comme identité — utiliser "confidentiel par défaut" quand nécessaire
- "AI-powered" en titre — l'IA est un moyen, pas une promesse
- Ton d'excuse ou de modestie excessive — la confiance est assumée

#### Vocabulaire Spécialisé

| Terme Standard | Terme Irbis | Justification |
|----------------|-------------|---------------|
| Candidat | Talent | Plus valorisant, focus sur le potentiel |
| Offre d'emploi | Mandat | Code du recrutement executive |
| Matching | Alignement | Évocation de l'harmonie |
| CV | Empreinte professionnelle | Plus holistique |
| Tableau de bord | Console | Pilotage et précision |
| Recruteur | Consultant / Partenaire | Accomagnement stratégique |

### 3.4 Recommandations Visuelles

#### Palette de Couleurs

**Couleurs Principales**

| Nom | Code | Usage |
|-----|------|-------|
| Ink Navy | #0F1A2E | Texte, structure, profondeur |
| Foil Gold | #BF9E59 | Accent rare, rituel, CTA |
| Ivory | #F6F1E7 | Fond principal, papier |
| Stone | #CFC8BB | UI secondaire, règles |

**Couleurs Fonctionnelles**

| Nom | Code | Usage |
|-----|------|-------|
| Royal Blue | #2563EB | Actions principales |
| Forest Green | #059669 | Succès, matches |
| Amber | #f59e0b | Avertissements |
| Red | #dc2626 | Erreurs |

**Règle d'Or** — L'or doit rester un événement, jamais un surlignage permanent. Reserved pour les CTA, les moments de seal, les highlights clés.

#### Typographie

**Titres** — Une serif editoriale (Playfair Display, Cormorant Garamond) pour l'intemporalité et la pensée.

**Corps et UI** — Une sans-serif moderne (Geist, Inter) pour la méthode et la clarté.

**Règles** — Petites caps pour les labels de section. Chiffres tabulaires dans les tableaux.

#### Iconographie

**Style** — Line icons ultra-simples, dans l'esprit observatoire.

**Motif Panthère** — Utilisé comme guardian, sentinel. Jamais comme "prédateur marketing". En aplat, emboss léger ou filigrane.

#### Photographie

**Direction Artistique** — Architecture, lumière rasante, matières minérales, horizons, bureaux, bibliothèques. Editorial portraits only if they feel real. Avoid tech cliché imagery.

#### Layout & Grille

**Système** — Grille suisse 12 colonnes, marges extérieures généreuses, rythme de ligne fort.

**Sections "Cartes"** — Les sections apparaissent comme des cartons, des invitations, avec des bordures fines.

**Lignes** — Règles fines à 2-5% d'opacité pour créer un sentiment cartographique.

---

## 4. STRATÉGIE DE CONTENU

### 4.1 Piliers de Contenu

Le contenu Irbis s'organise autour de quatre piliers qui reflètent les valeurs de marque et les besoins informationnels des audiences cibles.

#### Pilier 1 — La Méthode

**Objectif** — Démontrer la rigueur et la différenciation technique d'Irbis.

**Formats** — Articles de fond sur le 8D Matching, études de cas process, vidéos explicatives, white papers méthodologiques.

**Angles** — "Comment nous trouvons l'excellence", "Au-delà du matching par mots-clés", "La science de l'évaluation".

#### Pilier 2 — La Présence

**Objectif** — Établir la dimension humaine et relationnelle d'Irbis.

**Formats** — Témoignages clients, portraits de consultants, reflections sur le leadership, contenus sur la relation recruteur/candidat.

**Angles** — "L'art de comprendre un parcours", "Ce que les dirigeants nous apprennent", "La conversation qui change tout".

#### Pilier 3 — L'Éclairage

**Objectif** — Positionner Irbis comme source d'intelligence sur le marché du leadership.

**Formats** — Baromètre des rémunérations, analyses sectorielles, tendances du recrutement C-level, insights sur les compétences émergentes.

**Angles** — "Ce que révèle le marché", "Les nouvelles exigences du leadership", "Tendances et anticipations".

#### Pilier 4 — L'Écosystème

**Objectif** — Présenter l'offre de services dans sa globalité et sa cohérence.

**Formats** — Pages de service détaillées, comparatifs entre services, présentations de Tailor Shift, roadmaps produits.

**Angles** — "Une vision globale du recrutement", "L'écosystème Irbis", "Chaque service a sa place".

### 4.2 Messages Clés par Persona

#### Persona 1 — Le Dirigeant d'Entreprise (Decision-Maker)

**Contexte** — CEO, fondateur, DG qui doit recruter un poste clé (CFO, COO, autre C-level).

**Besoins** — Confidentialité, vitesse, qualité du matching, réduction du risque, partenaire de confiance.

**Messages Clés**

- "Nous partageons votre ambition — et nous la rendons exécutable."
- "Vos postes clés méritent une méthode, pas du bruit."
- "Confidentialité par défaut. Résultats garantis."
- "Un partenaire qui questionne le brief pour protéger la décision."

**Ton** — Direct, respectueux du temps, focus sur le résultat.

#### Persona 2 — Le DRH (HR Leader)

**Contexte** — DRH, RRH, talent acquisition manager qui externalise des recherches complexes.

**Besoins** — Gain de temps, visibilité sur le process, reporting, relation de confiance, expertise sectorielle.

**Messages Clés**

- "Libérez votre équipe des tâches de sourcing répétitives."
- "Un processus transparent du brief à la nomination."
- "Des données pour renforcer vos recommandations."
- "L'expertise Irbis complète votre équipe."

**Ton** — Professionnel, collaboratif, orienté solution.

#### Persona 3 — Le Talent Passif (Executive Candidate)

**Contexte** — Cadre supérieur qui ne cherche pas activement mais reste ouvert aux opportunités.

**Besoins** — Discrétion, opportunités de qualité, respect de la confidentialité, perspective de carrière.

**Messages Clés**

- "Votre prochaine étape mérite une approche différente."
- "Nous approchons les talents avec respect et stratégie."
- "Votre parcours reste confidentiel jusqu'à ce que vous choisissiez."
- "Des opportunités alignées avec votre trajectoire."

**Ton** — Exclusif, respectueux, valorisant sans être intrusif.

#### Persona 4 — Le Consultant en Recrutement (Partner)

**Contexte** — Cabine concurrent ou partenaire potentiel.

**Besoins** — Technologie, méthodologie, respect des standards, collaboration possible.

**Messages Clés**

- "Une méthodologie que vous pouvez comprendre et admirer."
- "L'IA au service de l'expertise humaine."
- "Des standards élevés, une approche transparente."
- "Potential pour la collaboration future."

**Ton** — Professionnel, respectueux de la concurrence, ouvert.

### 4.3 Approche de Copywriting

#### Principes Éditoriaux

**English-First** — Les contenus majeurs sont rédigés en anglais puis adaptés en français. Le brand voice est plus naturel en anglais.

**Editorial, pas Marketing** — Irbis s'exprime comme un partenaire de réflexion, pas comme un vendeur. La prose est soignée, les arguments sont développés.

**Evidence-Based** — Les claims sont soutenus par des données, des cas concrets, des témoignages. Jamais de promesses creuses.

**Structured** — La hiérarchie de l'information est claire. Les titres guident la lecture. Les paragraphes sont calibrés (3-5 phrases max).

#### Formats de Contenu

**Headlines** — Courtes, impactantes, centrées sur le bénéfice. Pas de jargon. Exemples : "Excellence isn't found. It's detected." / "High standards. Shared ambition."

**Sous-titres** — Complètent la headline, ajoutent de l'information, créent du rythme.

**Corps** — Développent les arguments avec preuves et exemples. Changement de registre selon les sections (plus narratif pour les témoignages, plus factuel pour la méthodologie).

**CTA** — Clairement formulés, valorisant l'action. "Discuss a search" / "Request an introduction" / "Explore the ecosystem".

#### Micro-Copy Application

**Hero** — "Excellence isn't found. It's detected." / "L'excellence ne se trouve pas. Elle se détecte."

**CTA Principaux** — "Discuter un mandat" / "Demander une introduction"

**Titres de Section** — "Ce que nous faisons" / "Notre approche" / "Pourquoi Irbis"

**Dashboard** — "Console" / "Talents identifiés" / "Mandats actifs" / "Alignements validés"

**Profils** — "Indice de compatibilité" / "Ce que ce parcours révèle" / "Initier l'approche"

**Upload CV** — "Ingestion de profil" / "Déposer le fichier pour analyse structurelle"

---

## 5. EXPÉRIENCE UTILISATEUR

### 5.1 Principes d'Interaction

L'expérience utilisateur Irbis est guidée par cinq principes qui reflètent les valeurs de marque et les attentes du secteur premium.

#### Principe 1 — Calme Déterminé

L'interface transmet un sentiment de contrôle et de confiance. Les animations sont lentes et précises (150-250ms), jamais "bouncy". Le hover révèle des détails subtils (déplacement léger, filet, accent or). L'utilisateur doit se sentir accompagné, pas stimulé.

#### Principe 2 — Confidentialité Visible

Chaque interaction avec des données sensibles est accompagnée d'un feedback clair sur la protection. Les actions irreversibles demandent confirmation explicite. L'utilisateur comprend à tout moment ce qui est partagé et avec qui.

#### Principe 3 — Clarté des Décisions

Les informations complexes sont présentées avec hiérarchie claire. Les comparaisons sont facilitées par des visualisations sobres. Les recommandations AI sont expliquées, pas présentées comme des boîte noires.

#### Principe 4 — Fluidité des Parcours

Les parcours sont optimisés pour réduire les frictions. L'information est où on l'attend. Les actions fréquentes sont accessibles. Le nombre de clics est minimisé pour les opérations critiques.

#### Principe 5 — Cohérence Absolue

Chaque écran, chaque interaction, chaque micro-texte respecte les mêmes règles. L'utilisateur qui apprend sur une partie de l'interface applique naturellement son apprentissage ailleurs.

### 5.2 Parcours Utilisateur

#### Parcours Découverte (Site Public)

**Objectif** — Convertir un visitor en prospect engaged.

**Étapes**

1. **Landing** — Le hero capture l'attention avec la proposition de valeur. La scroll révèle progressivement la preuve (méthode, écosystème, confiance).

2. **Exploration** — L'utilisateur navigue vers les pages de service selon son intérêt. La navigation est facilitée par des CTA contextuels.

3. **Engagement** — L'utilisateur remplit le formulaire de contact ou demande un accès console. Le-formulaire est court (3-5 champs max) avec inline validation.

4. **Follow-up** — Un email de confirmation envoie les nächsten étapes et positionne Irbis comme partenaire exigeant.

**Points de Friction** — Formulaire trop long, manque de preuves, ton trop commercial.

**Optimisations** — Progressive disclosure, social proof visible, micro-copy rassurant.

#### Parcours Mandat (Application)

**Objectif** — Accompagner le consultant du brief à la nomination.

**Étapes**

1. **Création** — Le consultant définit le mandat avec JD, contexte, critères. L'interface guide la saisie avec des templates et suggestions.

2. **Mapping** — Le système suggère une cartographie du marché. Le consultant valide et affine.

3. **Matching** — Les profils sont présentés avec scores et explanations. Le consultant filtre, compare, sélectionne.

4. **Approche** — Les candidats sélectionnés sont contactés via l'interface intégrée (email, WhatsApp, LinkedIn).

5. **Pipeline** — L'avancement est visualisé dans une vue Kanban. Chaque étape est traçable.

6. **Placement** — Le mandat est cloturé avec feedback et metrics. Les données enrichissent le système.

**Points de Friction** — Saisie fastidieuse, information fragmentée, manque de visibilité sur l'avancement.

**Optimisations** — Auto-remplissage depuis JD existants, vue unifiée du candidat, notifications proactives.

#### Parcours Talent (Candidat)

**Objectif** — Présenter le talent de manière attractive tout en protégeant sa confidentialité.

**Étapes**

1. **Réception** — Le profil est créé via upload CV ou ingestion LinkedIn. Le candidat reçoit une notification.

2. **Validation** — Le talent peut accéder à son profil, vérifier les informations, masquer certains éléments sensibles.

3. **Matching** — Quand un match est identifié, le talent est contacté avec contexte et confidentialité garantie.

4. **Interaction** — Le talent peut gérer ses préférences de contact et son visibility status.

**Points de Friction** — Crainte de la visibilité, manque de contrôle, communication intrusive.

**Optimisations** — Visibilité par défaut masquée, contrôle total sur les données, communication valorisante.

### 5.3 Composants Clés

#### Navigation

**Header Global** — Logo, navigation principale, accès console ou contact. Fixe, minimal, transitions douces.

**Navigation Secondaire** — Fil d'Ariane, onglets contextuels, sidebar sur les pages application.

**Footer** — Liens vers tous les services, mentions légales, contact, accès sécurisé.

#### Cartes et Conteneurs

**Cards Editoriales** — Sur le site public, les sections utilisent des "cartons" avec double filet, marges généreuses, typographie soignée.

**Cards Fonctionnelles** — Dans l'application, les cards sont plus denses, avec hierarchy claire et actions accessibles.

**Modals** — Pour les actions secondaires (confirmations, formulaires courts). Fermeture facile, backdrop sombre subtil.

#### Listes et Tables

**Tables de Données** — Style minimal, lignes alternées optionnelles, tri et filtrage accessibles, pagination sobre.

**Listes de Profils** — Cards horizontales avec info clé (photo, titre, entreprise actuelle), score de matching, actions quick.

**Kanban** — Pour les pipelines de candidats. Drag & drop fluide, cartes informatives mais pas surchargées.

#### Formulaires

**Style** — Labels above inputs, focus states visibles, inline validation, aide contextuelle.

**Champs** — Types adaptés (date picker, select, autocomplete), erreurs claires, succès feedback.

**Actions** — Primary button clairement identifié, secondary accessible, submit avec loading state.

### 5.4 Responsive et Accessibilité

#### Breakpoints

```
mobile:      < 640px
tablet:      640px - 1024px
desktop:     1024px - 1280px
large:       > 1280px
```

#### Principes Mobile-First

- Navigation hamburger sur mobile
- Cards empilées verticalement
- Touch targets minimum 44x44px
- Pas de hover states sur mobile

#### Accessibilité (WCAG 2.1 AA)

- Contraste texte/fond respecté (4.5:1 minimum)
- Focus visible sur tous les éléments interactifs
- Navigation clavier complète
- Alt texts sur toutes les images
- ARIA labels où nécessaire
- Pas de reliance sur la couleur seule

---

## 6. GOUVERNANCE ET COHÉRENCE

### 6.1 Règles de Cohérence

Pour maintenir la cohérence absolue requise par le positionnement premium, les règles suivantes s'appliquent :

**Unité de Marque** — Tout contenu représente Irbis dans sa globalité. Pas de contradictions entre les différentes surfaces.

**Hiérarchie** — Le site public > l'application > les emails > les documents. Chaque surface a son niveau de formalité approprié.

**Exceptions Documentées** — Toute deviation de ces guidelines doit être documentée et approuvée.

### 6.2 Processus de Validation

**Nouveaux Contenus** — Review par Brand Director avant publication.

**Nouvelles Pages** — Wireframe + copy review par Design + Brand.

**Nouvelles Fonctionnalités** — UX review + brand check + accessibility check.

**Changements Majeurs** — Approbation par les stakeholders clés.

### 6.3 Maintenance

**Quarterly Review** — Audit de cohérence et mise à jour des guidelines.

**Versioning** — Les guidelines sont versionnées. Les changements sont documentés.

**Formation** — Les équipes sont formées sur les guidelines lors de l'onboarding et régulièrement.

---

## 7. ROADMAP D'IMPLÉMENTATION

### Phase 1 — Fondations (Sprint 1-2)

**Objectif** — Établir la base technique et design.

**Livrables**

- [ ] Design system intégré dans globals.css
- [ ] Composants shadcn/ui customisés Irbis
- [ ] Typographie et palette applicuées
- [ ] Layouts de base (header, footer, navigation)

**Critères de Succès** — Toutes les pages existantes utilisent les nouveaux tokens.

### Phase 2 — Site Public (Sprint 3-4)

**Objectif** — Refondre la présence marketing avec la nouvelle identité.

**Livrables**

- [ ] Homepage avec nouvelle architecture et copywriting
- [ ] Pages à-propos et méthodologie
- [ ] Pages services et contact
- [ ] Responsive design validé

**Critères de Succès** — Audit de cohérence brand passed.

### Phase 3 — Application (Sprint 5-6)

**Objectif** — Appliquer l'identité à la console avec focus UX.

**Livrables**

- [ ] Dashboard avec nouvelles cards et interactions
- [ ] Pages mandats et talents avec nouvelle UI
- [ ] Microcopy applicatif cohérent
- [ ] Animations et transitions calibrées

**Critères de Succès** — Tests utilisateurs validés (tâches completeses > 90%).

### Phase 4 — Écosystème (Sprint 7-8)

**Objectif** — Préparer l'accueil des services additionnels.

**Livrables**

- [ ] Architecture des portails services
- [ ] Design system pour portails enfants
- [ ] Guidelines Tailor Shift
- [ ] Documentation gouvernance

**Critères de Succès** — Nouveau service peut être intégré en < 1 sprint.

---

## 8. ANNEXES

### 8.1 Checklist de Cohérence

**Observatory First**

- [ ] Clarté et perspective
- [ ] Lumière et structure
- [ ] Cartographie et rigueur calme

**House Second**

- [ ] Invitation et cadre
- [ ] Papier et lieu de décision
- [ ] Intimité premium

**Or comme Rituel**

- [ ] Usage rare et cérémoniel
- [ ] Reserved pour CTAs et highlights clés

**Navy comme Structure**

- [ ] Encre et profondeur
- [ ] Texte et structure

**Typographie**

- [ ] Serif pour la pensée
- [ ] Sans pour la méthode

**Vocabulaire**

- [ ] "Confidential" = exigence, pas identité
- [ ] Pas de claims empruntés à une verticale
- [ ] Pas de hype AI en headline
- [ ] Pas de ton apologétique

### 8.2 Ressources

**Documents de Référence**

- [design/design_system.md] — Spécifications techniques
- [design/copywriting_strategy.md] — Détails du système verbal
- [plans/branding_strategy.md] — Addendum branding complet
- [pillars/1_vision.md] — Vision et mission

**Outils Recommandés**

- Figma pour designs
- Storybook pour composants
- Lighthouse pour performance
- axe pour accessibility

### 8.3 Glossaire

| Terme | Définition |
|-------|------------|
| 8D Matching | Méthodologie de matching sur 8 dimensions |
| Console | Interface applicative Irbis |
| Cockpit | Vue détaillée d'un mandat |
| Mandat | Poste à pourvoir (executive search) |
| Talent | Candidat premium |
| Alignement | Matching entre profil et mandat |
| Observatory | Métaphore de la perspective et clarté |
| Maison | Métaphore de l'intimité et décision |

---

## 9. CONCLUSION

Cette proposition stratégique établit le socle foundational sur lequel le projet Irbis peut se développer de manière cohérente, scalable et alignée avec son positionnement premium. Chaque élément — de l'architecture informationnelle à la micro-interaction — a été conçu pour servir un objectif commun : transmettre excellence, rigueur et vision à long terme.

La force de cette proposition réside dans sa cohérence absolue. Le sitemap reflète les valeurs de marque. Le copywriting traduit la plateforme de marque. L'UX matérialise la promesse de marque. Chaque surface parle d'une seule voix.

Ce document doit être considéré comme un living document, évoluant avec le projet tout en restant le gardien de la cohérence. Toute décision significative doit être validée contre ces principes, et tout écart doit être documenté et approuvé.

**Irbis is a House of Perspective — a place to think clearly and decide well.**

---

*Document créé le 24 décembre 2024*  
*Pour toute question : se référer aux documents de référence dans /design et /plans*
