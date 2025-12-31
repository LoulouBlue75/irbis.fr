# P3 : DONNEES & SCHEMA

> **Version** : 1.0 (31/12/2025)
> **Reference** : Matrice v4.1 — Chantier 3
> **Database** : Supabase PostgreSQL + pgvector

---

## 3.A — ENTITES PRINCIPALES

### Vue d'Ensemble

| Domaine | Tables |
|---------|--------|
| **CORE** | projects, pillars, context_sources |
| **RAG** | source_chunks, chunk_embeddings, insights |
| **METIER** | candidates, jobs, matches |
| **CRM** | activities |
| **WORKFLOWS** | workflow_runs, workflow_steps |
| **STORAGE** | storage.objects (bucket cvs) |

### Liste des Entites

| Entite | Type | Description | Migration |
|--------|------|-------------|-----------|
| projects | Core | Projet/Tenant principal | 001 |
| pillars | Core | Pillars Matrice par projet | 001 |
| context_sources | Core | Sources de donnees (PDFs) | 001 |
| candidates | Metier | Talents/Candidats | 006 |
| jobs | Metier | Mandats de recrutement | 008 |
| matches | Metier | Associations job-candidat | 008 |
| activities | CRM | Timeline d'activites | 010 |
| source_chunks | RAG | Chunks pour embedding | 002 |
| chunk_embeddings | RAG | Vecteurs embedding | 002 |
| insights | Analytics | Insights generes par IA | 003 |
| workflow_runs | System | Executions Inngest | 003 |
| workflow_steps | System | Etapes de workflow | 003 |

---

## 3.B — ATTRIBUTS PAR ENTITE

### candidates (Talents)

| Champ | Type | Nullable | Description |
|-------|------|:--------:|-------------|
| id | UUID | Non | PK |
| source_id | UUID | Oui | FK vers CV source |
| project_id | UUID | Non | FK vers projet |
| name | TEXT | Oui | Nom complet |
| email | TEXT | Oui | Email (indexe) |
| skills | TEXT[] | Oui | Array de competences |
| experience | JSONB | Non | Experiences structurees |
| education | JSONB | Non | Formations structurees |
| embedding | vector(1536) | Oui | Embedding OpenAI |
| created_at | TIMESTAMPTZ | Non | Date creation |
| updated_at | TIMESTAMPTZ | Non | Date modification |

### jobs (Mandats)

| Champ | Type | Nullable | Description |
|-------|------|:--------:|-------------|
| id | UUID | Non | PK |
| project_id | UUID | Non | FK vers projet |
| title | TEXT | Non | Titre du poste |
| description | TEXT | Oui | Description complete |
| requirements | TEXT[] | Oui | Liste des criteres |
| embedding | vector(1536) | Oui | Embedding matching |
| status | TEXT | Non | open/closed/draft |

### matches

| Champ | Type | Nullable | Description |
|-------|------|:--------:|-------------|
| id | UUID | Non | PK |
| job_id | UUID | Non | FK vers mandat |
| candidate_id | UUID | Non | FK vers candidat |
| score | FLOAT | Oui | Score similarite (0-1) |
| status | TEXT | Non | pending/reviewed/accepted/rejected |
| notes | TEXT | Oui | Notes recruteur |

### activities (CRM)

| Champ | Type | Nullable | Description |
|-------|------|:--------:|-------------|
| id | UUID | Non | PK |
| project_id | UUID | Non | FK vers projet |
| candidate_id | UUID | Non | FK vers candidat |
| type | TEXT | Non | note/call/email/meeting/status_change |
| content | TEXT | Oui | Contenu |
| created_at | TIMESTAMPTZ | Non | Date |
| created_by | UUID | Oui | FK vers user |

### context_sources

| Champ | Type | Nullable | Description |
|-------|------|:--------:|-------------|
| id | UUID | Non | PK |
| project_id | UUID | Non | FK vers projet |
| type | TEXT | Non | pdf/api/manual |
| name | TEXT | Non | Nom du fichier |
| storage_path | TEXT | Oui | Chemin storage |
| status | TEXT | Non | pending/processing/ready/error |
| raw_metadata | JSONB | Non | Metadonnees |
| token_count | INT | Non | Tokens |
| processed_at | TIMESTAMPTZ | Oui | Date traitement |

---

## 3.C — RELATIONS

### Diagramme ERD

    projects
       │
       ├──< pillars
       ├──< context_sources ──< source_chunks ──< chunk_embeddings
       │         │
       │         └──< candidates ──< matches >── jobs
       │                   │
       │                   └──< activities
       │
       ├──< insights
       └──< workflow_runs ──< workflow_steps

### Relations 1-N

| Parent | Enfant | FK | On Delete |
|--------|--------|----|-----------|
| projects | candidates | project_id | CASCADE |
| projects | jobs | project_id | CASCADE |
| projects | activities | project_id | CASCADE |
| context_sources | source_chunks | source_id | CASCADE |
| candidates | matches | candidate_id | CASCADE |
| candidates | activities | candidate_id | CASCADE |
| jobs | matches | job_id | CASCADE |

### Relations N-N

| Entite A | Entite B | Table Jonction |
|----------|----------|----------------|
| jobs | candidates | matches |

---

## 3.D — ETATS & WORKFLOW

### context_sources.status

| Etat | Description | Vers |
|------|-------------|------|
| pending | Upload recu | processing |
| processing | Analyse IA | ready, error |
| ready | Termine | - |
| error | Echec | pending (retry) |

### jobs.status

| Etat | Description |
|------|-------------|
| draft | Brouillon |
| open | Mandat actif |
| closed | Termine |

### matches.status

| Etat | Description |
|------|-------------|
| pending | Match IA, non vu |
| reviewed | Vu par recruteur |
| accepted | Candidat retenu |
| rejected | Candidat ecarte |

---

## 3.E — INDEX & PERFORMANCE

### Index Definis

| Table | Index | Type | Usage |
|-------|-------|------|-------|
| candidates | idx_candidates_project | B-tree | Filtre projet |
| candidates | idx_candidates_email | B-tree | Recherche email |
| candidates | idx_candidates_embedding | IVFFlat | Vector search |
| jobs | idx_jobs_project | B-tree | Filtre projet |
| jobs | idx_jobs_embedding | IVFFlat | Vector search |
| matches | idx_matches_job | B-tree | Lookup mandat |
| matches | idx_matches_candidate | B-tree | Lookup candidat |
| activities | idx_activities_candidate | B-tree | Timeline |

### Strategie Cache

| Donnee | TTL | Invalidation |
|--------|-----|--------------|
| Stats dashboard | 5min | Sur mutation |
| Liste talents | 1min | Sur ajout |
| Profil candidat | 10min | Sur modif |
| Matches | Realtime | Pas de cache |

---

## 3.F — SECURITE (RLS)

### Mode Dev (Actuel)

Toutes tables : authenticated = full access

### Mode Prod (A implementer)

| Table | Policy |
|-------|--------|
| candidates | project_id IN user_projects |
| jobs | project_id IN user_projects |
| matches | job_id IN user_jobs |
| activities | created_by = auth.uid() OR is_admin |

---

## 3.G — STORAGE

### Bucket cvs

| Config | Valeur |
|--------|--------|
| Nom | cvs |
| Public | false |
| Max size | 10MB |
| Types | application/pdf |

---

## 3.H — FONCTIONS RPC

### match_candidates()

Recherche semantique de candidats par embedding.

| Param | Type | Description |
|-------|------|-------------|
| query_embedding | vector(1536) | Vecteur requete |
| match_threshold | float | Score min (0.7) |
| match_count | int | Nb max resultats |
| p_project_id | uuid | Filtre projet |

---

## 3.I — COHERENCE P2

| User Story | Tables | Valide |
|------------|--------|:------:|
| US-001 Upload CV | context_sources, candidates | Oui |
| US-002 Recherche semantique | candidates.embedding | Oui |
| US-003 Score matching | matches, jobs | Oui |
| US-004 Creer mandat | jobs | Oui |
| US-005 Liste candidats | candidates | Oui |
| US-006 Profil complet | candidates, activities | Oui |
| US-007 Dashboard KPIs | aggregations | Oui |

---

## 3.J — MIGRATIONS

| N | Fichier | Tables |
|---|---------|--------|
| 001 | core_tables | projects, pillars, context_sources |
| 002 | rag_tables | source_chunks, chunk_embeddings |
| 003 | insights_metrics | insights, workflow_runs/steps |
| 004 | rls_policies | RLS toutes tables |
| 005 | functions | update_updated_at_column |
| 006 | cv_candidates | candidates |
| 007 | storage_bucket | bucket cvs |
| 008 | matching_engine | jobs, matches, match_candidates() |
| 009 | update_embedding | ALTER embedding 1536 |
| 010 | crm_activities | activities |

---

*P3 Donnees & Schema — Irbis v1.0 — 31/12/2025*
