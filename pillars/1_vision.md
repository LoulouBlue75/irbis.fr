# P1 : VISION & SCOPE

> **Version** : 2.0 (01/01/2026)
> **Reference** : Matrice v4.1 - Chantier 1
> **Mode** : Solo Internal Tool

---

## 1.A - MISSION & PROBLEME

### Mission

Plateforme interne d'orchestration pour Executive Search, combinant intuition humaine et precision algorithmique.

### Probleme

| Avant | Apres |
|-------|-------|
| CVs PDF eparpilles | Base centralisee vectorisee |
| Matching manuel fastidieux | Matching semantique IA |
| Memoire dans la tete | Knowledge base persistante |
| Process non reproductible | Workflows standardises |

### Proposition de Valeur

- Reduction du temps de sourcing de 60%
- Matching par competences latentes (embedding)
- Tracabilite complete du pipeline candidat

---

## 1.B - BUSINESS MODEL

### Positionnement

| Element | Valeur |
|---------|--------|
| Type | B2B Executive Search |
| Operateur | Solo |
| Outil | Internal (non commercialise) |

### Fee Structure

| Composante | Standard |
|------------|----------|
| Success Fee | 25% du package annuel |
| Retainer | Selon mission (cadrage) |
| Exclusivite | Optionnelle (+%) |

### Contrats

| Element | Description |
|---------|-------------|
| Template | Modele contrat standard |
| Scripts | Adaptation contexte/cadrage mission |
| Variables | Client, poste, package, timeline, exclusivite |

---

## 1.C - SCOPE & LIMITES

### MVP (L1) - Done

- [x] Auth (Supabase)
- [x] Ingestion CV (PDF -> Structure)
- [x] Recherche Semantique (Vector 1536)
- [x] Matching IA (embedding + LLM rerank)
- [x] Gestion Mandats
- [x] Pipeline Candidat (CRM)
- [x] Dashboard

### V2 - Backlog

| Feature | Priorite |
|---------|:--------:|
| CRM avance (timeline, relances) | P1 |
| Integration LinkedIn (scraping) | P2 |
| Generation contrats auto | P1 |
| Email sequences | P2 |
| Analytics avances | P3 |

### Out of Scope

- Multi-tenant SaaS
- API publique
- White-label

---

## 1.D - SUCCESS METRICS

### KPIs Operationnels

| Metrique | Cible | Mesure |
|----------|:-----:|--------|
| Temps traitement CV | < 30s | Inngest logs |
| Precision matching | > 80% | Feedback manuel |
| Taux placement | > 25% | Missions closed/total |
| Time-to-shortlist | < 48h | Pipeline timestamps |

### KPIs Business

| Metrique | Formule |
|----------|---------|
| CA Mission | Package * 25% |
| CA Annuel | Sum(missions) |
| Missions/mois | Count |
| Pipe value | Sum(mandats open * fee estime) |

### KPIs Techniques

| Metrique | Cible |
|----------|:-----:|
| Uptime | 99.5% |
| Latency P95 | < 500ms |
| Error rate | < 1% |

---

## 1.E - CONTRAINTES

### Budget

| Poste | Mensuel |
|-------|--------:|
| Vercel | $0 (hobby) / $20 (pro) |
| Supabase | $0 (free) / $25 (pro) |
| OpenAI | ~$10-50 (usage) |
| Inngest | $0 (free tier) |
| **Total** | **$35-95** |

### Ressources

| Element | Valeur |
|---------|--------|
| Dev | Solo |
| Maintenance | < 5h/semaine |
| Support | Self |

### Techniques

| Contrainte | Impact |
|------------|--------|
| Rate limits OpenAI | Queue Inngest |
| Storage 1GB Supabase free | Upgrade si > 500 CVs |
| Vercel 100GB bandwidth | Suffisant usage solo |

---

## 1.F - RISQUES

### Matrice Risques

| Risque | Probabilite | Impact | Mitigation |
|--------|:-----------:|:------:|------------|
| OpenAI pricing increase | Moyenne | Moyen | Budget buffer, fallback models |
| Supabase downtime | Faible | Haut | Backup local, PITR |
| Perte donnees | Faible | Critique | Backup auto, export regulier |
| Burnout solo | Moyenne | Haut | Automatisation max, boundaries |
| Client churn | Moyenne | Moyen | Qualite service, relationship |

### Mitigations Cles

1. Backup : Export CSV hebdo + Supabase PITR
2. Monitoring : Sentry + Vercel logs
3. Automatisation : Inngest workflows, scripts contrats

---

## 1.G - ROADMAP

### Phase 1 : Foundation (Done)

- [x] Stack technique
- [x] Auth + DB
- [x] Ingestion CV
- [x] Matching engine
- [x] Console hunting

### Phase 2 : Operationnel (Current)

- [x] RLS production
- [x] Tests (Vitest, Playwright)
- [x] Monitoring (Sentry)
- [ ] Templates contrats
- [ ] Scripts adaptation

### Phase 3 : Optimisation

- [ ] Analytics dashboard
- [ ] Email integration
- [ ] Automatisation relances
- [ ] Performance tuning

---

*P1 Vision - Irbis v2.0 - 01/01/2026*
