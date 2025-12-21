# P2 : ACTEURS & STORIES

## 2.A — Personas
### 1. Le Recruteur (Admin/User)
- **Rôle** : Chasseur de têtes, Consultant en recrutement.
- **Goals** : Trouver le bon candidat rapidement, gérer sa base de CVs, ne pas perdre de temps sur la saisie.
- **Frustrations** : Outils dispersés, CVs PDF inexploitables, recherche par mots-clés limitée.

### 2. Le Candidat (Passif/Actif)
- **Rôle** : Profil chassé ou postulant.
- **Goals** : Être contacté pour des opportunités pertinentes.
- **Données** : CV (PDF), Profil LinkedIn, Historique des échanges.

## 2.B — User Stories (MVP)
### Recruteur
- En tant que **Recruteur**, je veux **uploader un CV PDF** pour qu'il soit automatiquement analysé et structuré.
- En tant que **Recruteur**, je veux **rechercher des candidats** par concept (ex: "Expert React avec expérience Fintech") et pas juste par mot-clé.
- En tant que **Recruteur**, je veux **voir un score de matching** pour chaque candidat par rapport à un job.
- En tant que **Recruteur**, je veux **ajouter manuellement un candidat** si je n'ai pas de CV.

## 2.C — Rôles & Permissions (RBAC)
- **Admin** : Accès total, gestion des utilisateurs, configuration des intégrations.
- **Recruiter** : Accès aux jobs et candidats, upload, recherche.
- **Viewer** : Lecture seule (optionnel pour le futur).
