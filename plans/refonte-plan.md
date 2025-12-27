# Plan de Refonte Complet pour Irbis

Ce document fournit un guide exhaustif pour la refonte du site et de la plateforme Irbis en intégrant les différents volets du projet : Matrice Hunting, Tailor Shift et Paris. Il synthétise les informations trouvées dans le dépôt (sitemap, stratégie de copywriting, améliorations du design system, structure multi-produits, prompts de design) et décrit les modifications à effectuer.

## 1. Contexte Général

Irbis évolue vers une plateforme multi-produits qui regroupe :

- **Irbis Corporate (Executive Search)** : Vitrine publique présentant l’expertise en chasse de têtes et la méthodologie d’alignement 8D.
- **Matrice Hunting** : Cockpit de recrutement interne permettant de gérer les mandats, les talents et les intégrations de CV. Il s’agit d’une application privée accessible aux collaborateurs après authentification.
- **Tailor Shift** : Service de recrutement haut de gamme pour la distribution de luxe (Auxerre et Mittal). Ce projet sera hébergé sur un site distinct, mais l'interface Irbis doit en présenter la valeur ajoutée et rediriger vers le site externe.
- **Paris (L’Outil de carrière)** : Plateforme d’orientation et de coaching basée sur la matrice 8D. Elle est également hébergée séparément et fera l’objet d’une page de présentation et d’un lien sortant depuis Irbis.
- **Interface d’administration** : Outil réservé à l’équipe interne pour gérer les utilisateurs, les intégrations, la facturation et les logs.

L’objectif de la refonte est de fédérer ces différents volets dans une structure claire et cohérente, tout en améliorant l’expérience utilisateur, l’uniformité visuelle et la qualité du code. Le design system existant doit être consolidé et le vocabulaire harmonisé.

## 2. Sitemap Détailé et Pages Clés

Le tableau suivant décrit l’arborescence cible avec le type de contenu attendu sur chaque route et les modifications à réaliser :

| Domaine              | Route Cible              | Contenu et Modifications Détailées | Accès    |
|----------------------|--------------------------|------------------------------------|----------|
| **Corporate (Irbis)** | /                        | Page d’accueil avec titre accrocheur (« Excellence isn’t found. It’s detected. »), présentation de la proposition de valeur (« Executive Search with Adaptive Precision »), explication des piliers (Adaptive Precision, Absolute Confidentiality, Enlightened Choices) et CTA vers la page Approach. Intégrer un composant héro réutilisable et des sections illustrées. | Public  |
|                      | /approach                | Description détaillée de la méthodologie 8D (8 dimensions d’alignement), étapes du processus, preuves de succès. Utiliser un design narratif avec des cartes pour chaque dimension et des témoignages. | Public  |
|                      | /executive-search        | Page expliquant l’expertise d’Irbis en chasse de têtes, les secteurs adressés et la différence de l’approche IRBIS. Inclure un formulaire de prise de contact (« Nous confier un mandat ») et un bouton de connexion pour accéder au cockpit. | Public  |
|                      | /references              | Section présentant des études de cas et témoignages clients (C-level placés, taux de réussite). Utiliser des carrousels ou des cards. | Public  |
|                      | /contact                 | Formulaire de contact simple avec des champs préconfigurés et carte interactive. Utiliser le composant <Input> et <Textarea> du design system refondu. | Public  |
|                      | /login                   | Page de connexion et inscription unifiée pour accéder au cockpit. Microcopy : « Let’s catch the uncatchable. » Prévoir l’authentification unique pour l’ensemble des applications IRBIS. | Public  |
| **Matrice Hunting**  | /hunting/dashboard       | Tableau de bord bento grid présentant les mandats en cours, indicateurs clés (nombre de talents alignés, étapes du processus), filtres. Remplacer les composants personnalisés par des <Card> et <Badge> du design system. | Privé   |
|                      | /hunting/mandates        | Liste des mandats (opportunités) avec fonction de recherche et filtres. Règles : utiliser la terminologie Mandat au lieu d’offre, Talent au lieu de candidat; créer des composants de tableau réutilisables avec tri et pagination. | Privé   |
|                      | /hunting/mandates/create | Formulaire de création d’un nouveau mandat. Regrouper les champs en sections logiques (mission, soft skills, hard skills) et utiliser des <Input>, <Select> et <Textarea> réutilisables. | Privé   |
|                      | /hunting/mandates/[id]   | Page dédiée à un mandat : synthèse, pipeline des talents (prospect, short list, entretien), notes, historique des interactions. Utiliser des tabs et des badges pour indiquer les étapes. | Privé   |
|                      | /hunting/talents         | Bibliothèque des talents avec fiche pour chaque profil. La page liste doit permettre le tri par score d’alignement, date, localisation. Prévoir un composant TalentCard affichant photo, score 8D, statut et actions. | Privé   |
|                      | /hunting/talents/[id]    | Détail d’un talent : informations personnelles (présentation, compétences, appétences), diagramme radar de la matrice 8D, historique des interactions. Utiliser un layout split screen et des composants de graphique (radar). | Privé   |
|                      | /hunting/ingestion       | Outil d’ingestion des CV avec drag-and-drop, parseur de CV et intégration aux API LinkedIn/Indeed. Prévoir un composant <Dropzone> réutilisable, un spinner pendant le traitement et des messages d’erreur uniformisés. | Privé   |
| **Tailor Shift (page de présentation)** | /tailor-shift | Présenter la verticale Tailor Shift (recrutement pour le luxe) : mission, expertise retail, approche 8D appliquée aux métiers luxe (références, photos de boutiques). À la fin, un bouton « Accéder au site Tailor Shift » ouvrant le site externe. Utiliser le design system IRBIS, tout en évoquant l'univers luxe : palette de couleurs raffinées, typographie élégante. | Public  |
| **Paris (page de présentation)** | /paris | Page consacrée à l’outil de carrière : présentation du test 8D pour découvrir son profil, exemples de parcours et offres de coaching. Inclure un bouton « Accéder au site Paris » qui redirige vers le site externe. La page doit présenter les bénéfices pour les talents et souligner la synergie avec Irbis. | Public  |
| **Admin**            | /admin/dashboard         | Tableau de bord administratif : statistiques globales (utilisateurs, mandats, actions), accès aux logs. | Restreint |
|                      | /admin/users             | Gestion des utilisateurs, des rôles et des permissions (ajout, édition, suppression). Utiliser des composants Table/Modal pour une meilleure ergonomie. | Restreint |
|                      | /admin/integrations      | Gestion des intégrations (LinkedIn, Indeed, messagerie) et de la facturation. | Restreint |
|                      | /admin/logs              | Vue sur les logs et exports pour la conformité et la sécurité. Prévoir des filtres et un bouton d’export CSV. | Restreint |

Cette structure s'appuie sur les routes décrites dans la sitemap d'origine et les étend en tenant compte du multi-produits. Les pages pour Tailor Shift et Paris servent d'introduction et redirigent vers leurs plateformes respectives.

## 3. Ligne Éditoriale et Copywriting

Pour assurer la cohérence de la communication sur l’ensemble des produits, le plan de copywriting défini dans le dépôt doit être appliqué :

### 3.1 Tagline et Proposition de Valeur

- Tagline principale : « Executive Search with Adaptive Precision ».
- UVP : « The alliance of human intuition and algorithmic precision ».
- Slogan marketing sur la page d’accueil : « Excellence isn’t found. It’s detected. ».

### 3.2 Piliers Narratifs

- **Adaptive Precision** : Mettre en avant l’alignement 8D (compétences, valeurs, potentiel), le scoring contextuel et l’algorithme de matching.
- **Absolute Confidentiality** : Souligner que les talents ne sont visibles que s’ils correspondent au mandat, que les budgets et identités sensibles sont masqués et que la plateforme respecte la confidentialité par conception.
- **Enlightened Choices** : Promouvoir la transparence des données et l’accès en temps réel aux informations pour les recruteurs comme pour les talents.

### 3.3 Lexique à Respecter

Le projet doit adopter systématiquement le vocabulaire IRBIS : talent (candidat), mandat (offre), opportunité (job), alignement (matching), mandat (mission), etc. Ce changement nécessite de renommer les fichiers et composants concernés (par exemple candidate-form.tsx devient talent-form.tsx).

### 3.4 Micro-copy et CTAs

Des suggestions de micro-copy sont fournies dans le fichier de stratégie. Exemple :

- Accueil : bouton « Découvrir l’approche » dirigeant vers /approach. Autres CTAs : « Découvrir nos services », « Lire les références ».
- Page de connexion : phrase d’accroche « Let’s catch the uncatchable. ».
- Mandat création : texte rassurant « Chaque mandat est unique, partagez vos attentes ».

Ces micro-copy doivent être adaptés à chaque verticale (Tailor Shift et Paris) pour refléter leur univers spécifique.

## 4. Améliorations du Design System

Le document ameliorations-design-system.md identifie de nombreuses failles et propose un plan d’action priorisé. Voici les modifications à mettre en œuvre :

- **Harmonisation du thème** : Supprimer l’ancien dark mode et adopter définitivement le thème clair. Mettre en place des variables CSS (--color-primary, --color-secondary, --space-8, etc.) pour centraliser les couleurs, espaces et typographies.
- **Uniformité du vocabulaire** : Renommer tous les fichiers et imports pour utiliser les termes talent, mandate, alignment, etc. Mettre à jour les labels et messages dans l’interface.
- **Composants réutilisables** : Créer ou intégrer des composants tels que <Input>, <Button>, <Card>, <Badge>, <Select>, <Textarea>, <Table>, <Tabs>, <Avatar>, <Tooltip>, <Alert>, <Skeleton>, <Dropdown>. Utiliser la bibliothèque shadcn/ui comme base et personnaliser le style IRBIS.
- **Système d’espacement et de typographie** : Utiliser des variables et des classes utilitaires (ex. var(--space-8), var(--text-h1)) pour assurer une grille uniforme.
- **Gestion des états et des feedbacks** : Standardiser l’affichage des chargements (spinner, skeleton) et des erreurs (Alert). Centraliser les appels API et messages d’erreur.
- **Accessibilité** : Ajouter des labels, des aria-labels, des rôles, assurer la navigation au clavier et un contraste suffisant. Prévoir un audit d’accessibilité et l’intégration d’un linter (eslint-plugin-jsx-a11y).
- **Typographie hiérarchisée** : Définir une échelle typographique cohérente (H1, H2, body) et l’appliquer systématiquement.
- **Tests et documentation** : Mettre en place des tests unitaires et E2E avec Playwright et Storybook. La planification recommande de commencer par migrer les composants clés, puis d’écrire des tests pour chaque page.
- **Quick wins** : Traduire toutes les chaînes en français, ajouter des metatags pour le SEO, mettre en place un sitemap.xml, et utiliser next/image pour optimiser les images.

## 5. Structure Multi-Produits et Organisation du Code

Le fichier multi-product-structure.md préconise d’utiliser des groupes de routes dans Next.js pour séparer les verticales. Adaptations à prévoir :

- **Groupes de routes** : Créer des dossiers racines : (marketing) pour Irbis Corporate, (hunting) pour Matrice Hunting, (taylor-shift) et (paris) pour les pages de présentation avec redirection vers les sites externes, et (admin) pour l’interface d’administration.
- **Partage de composants et d’authentification** : Factoriser les composants et utiliser un wrapper d’authentification pour toutes les routes privées. L’authentification doit être unique pour toutes les verticales.
- **Navigation et cross-sell** : Ajouter un menu global permettant de naviguer entre les produits et d'accéder aux pages de présentation de Tailor Shift et Paris. Sur le dashboard, prévoir des liens promouvant les autres services (ex. un encart « Découvrez Paris pour évaluer vos talents »).
- **Monorepo et conventions de nommage** : Renommer les dossiers et fichiers selon le nouveau lexique, séparer la logique métier par verticale, documenter les patterns de programmation. Prévoir un README par dossier de produit expliquant sa structure et ses composants.

## 6. Plan de Mise en Œuvre (Timeline Indicative)

Le plan d’amélioration priorisé du design system sert de base pour la feuille de route :

### Semaine 1 : Fondations

- Mettre en place les variables CSS globales (couleurs, espaces, typographie) et documenter le thème clair.
- Configurer la bibliothèque shadcn/ui et créer les premiers composants (Input, Button, Card).
- Refactoriser la navigation : créer les groupes (marketing), (hunting), (taylor-shift) et (paris) et mettre à jour la root layout.tsx.
- Migrer le lexique : renommer les fichiers et variables (candidate → talent, job → mandate).

### Semaine 2 : Refactoring et Conception

- Migrer les pages principales : refactoriser /hunting/mandates et /hunting/talents en utilisant les nouveaux composants réutilisables et le nouveau vocabulaire.
- Créer les pages de présentation : développer /taylor-shift et /paris avec contenu marketing et lien externe. Adapter le style pour refléter respectivement l’univers luxe et l’orientation professionnelle.
- Repenser les layouts : uniformiser la grille et les marges du dashboard en s’appuyant sur la grille Bento et sur un spacing cohérent.
- Ajouter les composants manquants : Tabs, Table, Avatar, Badge, Alert, Skeleton.

### Semaine 3 : Accessibilité et Tests

- Traduire toutes les chaînes de caractères en français tout en conservant l’ADN verbal IRBIS.
- Améliorer l’accessibilité : audit, ajout d’attributs ARIA, vérification du contraste, navigation clavier.
- Mettre en place les tests automatisés : tests unitaires des composants, tests E2E des parcours clés (création de mandat, ajout d’un talent, ingestion de CV) avec Playwright.
- Créer un Storybook pour documenter les composants et favoriser la cohérence visuelle.
- Optimiser la performance et le SEO : lazy-loading des images, ajout des meta tags, génération de sitemap.xml.

Ce calendrier est indicatif ; il peut être adapté selon les priorités business et les ressources disponibles.

## 7. Recommandations Complémentaires

- **Automatisation du vocabulaire** : Mettre en place des scripts de linting pour détecter l’usage d’anciens termes (e.g. candidate, job) et proposer des corrections.
- **Documentation continue** : Chaque nouvelle page ou composant doit être accompagné d’un contrat d’écran (design + copywriting) et d’un test. Utiliser des fichiers Markdown et Storybook pour garder une trace.
- **Suivi des indicateurs** : Mesurer l’adoption des composants réutilisables, le pourcentage de pages conformes au design system, le score d’accessibilité et la couverture des tests.
- **Communication interne** : Partager la roadmap avec l’équipe, organiser des points hebdomadaires pour suivre l’avancement et ajuster les priorités.

## 8. Conclusion

Cette refonte complète vise à transformer Irbis en une plateforme cohérente et évolutive, capable d'agréger plusieurs verticales tout en offrant une expérience utilisateur haut de gamme. Le présent document compile toutes les modifications nécessaires : nouvelle structure de routes, adoption d'un vocabulaire IRBIS unifié, mise en œuvre d'un design system solide, création de pages de présentation pour Tailor Shift et Paris avec liens externes, et plan d'action détaillé. En suivant cette feuille de route, vous pourrez structurer votre code, améliorer la qualité visuelle et éditoriale et préparer l’intégration de futurs services.

**Références :**
- [copywriting_strategy.md](https://raw.githubusercontent.com/LoulouBlue75/irbis.fr/9187904fd953c0d5a594290bae12eebe7ae6af53/design/copywriting_strategy.md)
- [ameliorations-design-system.md](https://raw.githubusercontent.com/LoulouBlue75/irbis.fr/9187904fd953c0d5a594290bae12eebe7ae6af53/plans/ameliorations-design-system.md)
- [sitemap.md](https://raw.githubusercontent.com/LoulouBlue75/irbis.fr/9187904fd953c0d5a594290bae12eebe7ae6af53/design/sitemap.md)
- [multi-product-structure.md](https://github.com/LoulouBlue75/irbis.fr/blob/HEAD/plans/multi-product-structure.md)
