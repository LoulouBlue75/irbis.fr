# Architecture de Contenu et d'Information (ACI)

## 1. Dashboard (`/dashboard`)
**Objectif**: Vue d'ensemble de l'activité et accès rapide.

### Composants
- **Header**: Titre "Dashboard", Actions rapides (Ajouter Candidat, Créer Job).
- **Stats Cards**:
  - Total Candidats (Nombre)
  - Jobs Actifs (Nombre)
  - Matchs à valider (Nombre)
  - Nouveaux cette semaine (Nombre)
- **Recent Activity**: Liste chronologique des dernières actions (Candidat ajouté, Match validé, Note ajoutée).
- **Realtime Widget**: Indicateur de statut temps réel.

## 2. Liste Candidats (`/dashboard/candidates`)
**Objectif**: Gestion et recherche de la base candidats.

### Composants
- **Header**: Titre, Boutons (Import CV, Saisie Manuelle).
- **Search Bar**:
  - Champ texte (Recherche sémantique ou mot-clé).
  - Filtres (Compétences, Expérience).
- **Data Table**:
  - Colonnes: Nom, Email, Compétences (Tags), Expérience (Années), Date d'ajout.
  - Actions par ligne: Voir, Éditer, Supprimer.
- **Pagination**: Contrôles de navigation (Page précédente/suivante).

## 3. Détail Candidat (`/dashboard/candidates/[id]`)
**Objectif**: Vue 360° du candidat et CRM.

### Composants
- **Header**: Retour liste, Nom du candidat, Actions (Éditer, Supprimer).
- **Layout 2/3 - 1/3**:
  - **Gauche (Profil)**:
    - **Info Personnelle**: Email, Téléphone, Liens.
    - **Résumé**: Bio générée ou extraite.
    - **Compétences**: Liste de tags.
    - **Expérience**: Timeline des postes.
    - **Formation**: Liste des diplômes.
    - **Matchs**: Liste des jobs correspondants avec score de matching.
  - **Droite (CRM)**:
    - **Timeline Activité**: Historique des interactions (Notes, Appels, Emails).
    - **Ajout Rapide**: Formulaire pour ajouter une note ou logger un appel.
    - **Statut**: Sélecteur de statut global (Nouveau, Qualifié, Rejeté).

## 4. Liste Jobs (`/dashboard/jobs`)
**Objectif**: Suivi des mandats de recrutement.

### Composants
- **Header**: Titre, Bouton "Créer Job".
- **Data Table**:
  - Colonnes: Titre, Statut (Ouvert/Fermé), Date de création, Nombre de candidats matchés.
  - Actions: Voir, Éditer, Clôturer.

## 5. Détail Job (`/dashboard/jobs/[id]`)
**Objectif**: Gestion d'un mandat et des candidats associés.

### Composants
- **Header**: Titre du poste, Statut, Actions.
- **Description**: Texte complet de l'offre.
- **Critères**: Liste des compétences et pré-requis.
- **Matching Candidates**:
  - Liste triée par score de pertinence.
  - Cartes candidat: Nom, Score (%), Résumé du fit (IA), Actions (Accepter/Rejeter).

## 6. Upload CV (`/upload`)
**Objectif**: Point d'entrée pour l'ingestion de documents.

### Composants
- **Dropzone**: Zone de glisser-déposer large.
- **Feedback Visuel**: Indicateur de chargement, barre de progression.
- **Résultat**: Affichage immédiat des données extraites pour validation rapide.
