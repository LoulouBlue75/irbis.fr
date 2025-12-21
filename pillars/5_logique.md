# P5 : LOGIQUE & RÈGLES

## 5.A — Context Engineering (Core Logic)
Le cœur du système repose sur le pattern **Gather -> Augment -> Execute**.

### 1. Gather (Collecte)
- **Sources** : PDF, API, DB.
- **Stratégie** : Fetch parallèle avec fallback.
- **Outil** : Inngest `step.run`.

### 2. Augment (Enrichissement)
- **Structuration** : Conversion du texte brut en JSON via LLM.
- **Compression** : Sélection des chunks pertinents pour le contexte.
- **Temporalité** : (Pour Abyss) Pondération des données par leur date de fraîcheur.

### 3. Execute (Action)
- **Query** : Interrogation du LLM avec le contexte structuré.
- **Validation** : Vérification Zod de la réponse.

## 5.B — Workflows Critiques
### Ingestion CV
1. Upload PDF -> Storage.
2. Trigger Inngest `cv/uploaded`.
3. Extract Text (OCR).
4. Generate Embedding -> Store in `vectors`.
5. Extract Structured Data (Skills, Exp) -> Store in `candidates`.

### Matching
1. Job Created -> Trigger `job/created`.
2. Generate Job Embedding.
3. Vector Search (Top 50 candidates).
4. LLM Reranking (Top 10 with justification).
5. Notify Recruiter.
