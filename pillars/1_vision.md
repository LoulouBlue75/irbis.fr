# P1 : VISION & SCOPE

## 1.A — Mission & Problème
**Mission** : Plateforme d'orchestration de tâches et d'analyse de données pour le recrutement et la chasse de têtes, basée sur la méthodologie Matrice.
**Problème** : Les processus de chasse de têtes sont manuels, déstructurés et sous-utilisent la data historique.
**Situation Avant** : Recruteurs noyés sous les CVs PDF, pas de mémoire centralisée, matching manuel fastidieux.

## 1.B — Business Model
**Cible** : B2B (Cabinets de recrutement, Chasseurs) et B2C (Candidats).
**Modèle** : SaaS B2B.

## 1.C — Scope & Limites
**MVP (Must Have)** :
- [x] Auth (Supabase)
- [x] Ingestion CV (PDF -> Structuré)
- [x] Recherche Sémantique (Vector)
- [x] Admin Interface

**Out of Scope (V2)** :
- [ ] CRM complet (Salesforce-like)
- [ ] Intégration LinkedIn native (API officielle)

## 1.D — Success Metrics
- Temps de traitement d'un CV < 30s.
- Pertinence du matching (Feedback recruteur).
