# Technology Stack

## Tech Arbitrator
| Layer | Choice | Version | Justification |
|-------|--------|---------|---------------|
| Frontend | Next.js | 16.1.0 | Framework React moderne, Server Components |
| Auth | Supabase Auth | Latest | Intégré, sécurisé, facile à utiliser |
| DB | Supabase (Postgres) | 17 | Relationnel + Vector (pgvector) |
| Styles | Tailwind CSS | 4.0 | Rapidité de développement, standard |
| Orchestration | Inngest | 3.48.1 | Gestion des workflows asynchrones et durables |
| Validation | Zod | 4.2.1 | Validation de schéma TypeScript-first |

## Resource Discovery (Build vs Reuse)
| Feature | Solution | Type | Decision |
|---------|----------|------|----------|
| UI Components | Shadcn/UI (prévu) | Library | Reuse |
| Vector Search | Supabase pgvector | DB Ext | Reuse |
| PDF Parsing | pdf-parse / LangChain | Library | Reuse |
| Context Eng. | Custom Inngest Flows | Pattern | Build |

## AI Tools
- **LLM** : OpenAI (GPT-4o) / Anthropic (Claude 3.5 Sonnet)
- **Embeddings** : OpenAI (text-embedding-3-small)
- **Orchestration** : Inngest (AI Gateway pattern)

## Context Engineering (Matrice Integration)
- **Gathering** : Inngest workflow pour collecter des données multi-sources (PDF, API, DB).
- **Augmentation** : Structuration et compression du contexte avant envoi au LLM.
- **Execution** : Sélection dynamique du modèle et validation des outputs.

## Infrastructure & Deploy
- **Prod** : Vercel
- **DB** : Supabase (Managed)
- **CI/CD** : GitHub Actions (via Vercel)
