# P5 : LOGIQUE & REGLES

> **Version** : 2.0 (31/12/2025)
> **Reference** : Matrice v4.1 - Chantier 5

---

## 5.A - REGLES METIER

### Regles Principales

| ID | Regle | Type | Declencheur |
|----|-------|------|-------------|
| BR-001 | CV analyse en < 30 secondes | Perf | Upload |
| BR-002 | Score matching min 0.5 pour affichage | Filtre | Search |
| BR-003 | Candidat unique par mandat | Unicite | Add pipeline |
| BR-004 | Seul createur/admin peut supprimer mandat | Perm | Delete |
| BR-005 | Mandat ferme = readonly | Workflow | Actions |
| BR-006 | Email candidat unique par projet | Valid | Create |
| BR-007 | Taille max CV : 10MB | Valid | Upload |
| BR-008 | Format PDF uniquement | Valid | Upload |

### Regles Bloquantes

| ID | Condition | Message | Action |
|----|-----------|---------|--------|
| BL-001 | CV > 10MB | Fichier trop volumineux | Reject |
| BL-002 | Format != PDF | Seuls PDF acceptes | Reject |
| BL-003 | Email existe | Candidat existe deja | Redirect |
| BL-004 | Mandat closed | Mandat clos | Disable |
| BL-005 | Session expiree | Session expiree | Redirect login |
| BL-006 | Non autorise | Acces refuse | Redirect dash |

### Regles Automatiques

| ID | Evenement | Action Auto | Delai |
|----|-----------|-------------|-------|
| AU-001 | CV uploade | Analyse IA | Immediat |
| AU-002 | Analyse OK | Notification | Immediat |
| AU-003 | Mandat cree | Embedding | Immediat |
| AU-004 | Match > 0.8 | Notif prioritaire | Immediat |
| AU-005 | Mandat 7j inactif | Nudge | Daily batch |
| AU-006 | Analyse fail | Retry 3x | 1/5/15 min |

---

## 5.B - PERMISSIONS (RBAC)

### Roles

| Role | Description | Herite |
|------|-------------|--------|
| guest | Visiteur | - |
| recruiter | Utilisateur | guest |
| admin | Super-user | recruiter |

### Matrice CRUD

| Ressource | Action | guest | recruiter | admin |
|-----------|--------|:-----:|:---------:|:-----:|
| Talent | Create | - | OWN | ALL |
| | Read | - | ALL | ALL |
| | Update | - | OWN | ALL |
| | Delete | - | - | ALL |
| Mandat | Create | - | YES | YES |
| | Read | - | OWN | ALL |
| | Update | - | OWN | ALL |
| | Delete | - | - | ALL |
| Match | Create | - | OWN | ALL |
| | Read | - | OWN | ALL |
| | Update | - | OWN | ALL |
| | Delete | - | OWN | ALL |
| Note | CRUD | - | OWN | ALL |
| User | Create | - | - | YES |
| | Read | - | SELF | ALL |
| | Update | - | SELF | ALL |
| | Delete | - | - | ALL |
| Settings | Read | - | SELF | ALL |
| | Update | - | SELF | ALL |
| Analytics | Read | - | OWN | ALL |

**Legende** : OWN=ses ressources, SELF=son profil, ALL=tout

### Permissions Contextuelles

| Contexte | Condition |
|----------|-----------|
| Talent.OWN | created_by = user.id |
| Mandat.OWN | created_by = user.id |
| Match.OWN | job.created_by = user.id |

### Admin Privileges

- BYPASS_RLS : Voir toutes donnees
- MANAGE_USERS : CRUD users
- VIEW_ANALYTICS : Stats globales
- DELETE_ANY : Supprimer tout

---

## 5.C - WORKFLOWS

### WF-001 : Ingestion CV

1. Upload PDF
2. Validation (10MB, PDF)
3. Storage bucket cvs
4. Trigger Inngest cv/uploaded
5. Extract text (pdf-parse)
6. Generate embedding (OpenAI)
7. LLM extract (skills, exp)
8. Store candidates
9. Notify success

**Erreurs** :
| Etape | Erreur | Fallback |
|-------|--------|----------|
| 2 | Invalid file | Reject + msg |
| 5 | PDF corrupt | Retry OCR |
| 6 | OpenAI timeout | Retry 3x |
| 7 | Parse fail | Store raw, flag |

### WF-002 : Matching

1. Job create/update
2. Trigger job/created
3. Generate job embedding
4. Vector search (top 50, seuil 0.5)
5. LLM rerank (top 10)
6. Store matches
7. Notify recruiter

### WF-003 : Pipeline Candidat

```
pending -> reviewed -> accepted -> PLACED
              |
              v
           rejected
```

| Transition | Action |
|------------|--------|
| pending -> reviewed | Log activity |
| reviewed -> accepted | Add shortlist |
| reviewed -> rejected | Archive |
| accepted -> PLACED | Close mandat |

---

## 5.D - GESTION ERREURS

### Categories

| Code | Type | Affichage |
|------|------|-----------|
| 400 | Validation | Inline |
| 401 | Auth | Toast + redirect |
| 403 | Permission | Toast |
| 404 | Not Found | Page |
| 409 | Conflict | Toast |
| 500 | Server | Toast + retry |
| NETWORK | Connexion | Toast persistent |

### Fallbacks

| Action | Erreur | Fallback |
|--------|--------|----------|
| Upload | Timeout | Retry 3x |
| Analyse | Parse fail | Store raw |
| Embedding | API error | Queue retry |
| Search | No results | Suggestions |
| Save | Network | Optimistic UI |

### Messages

| Situation | Message | CTA |
|-----------|---------|-----|
| Upload fail | Verifiez fichier | Reessayer |
| Analyse fail | Necessite revision | Voir profil |
| Session expire | Reconnectez-vous | Login |
| Acces refuse | Droits insuffisants | Retour |

---

## 5.E - EDGE CASES

### Scenarios

| ID | Scenario | Comportement |
|----|----------|--------------|
| EC-001 | 2 users editent meme candidat | Last write wins |
| EC-002 | Upload CV email existant | Modal merge/reject |
| EC-003 | Delete mandat avec matches | Cascade + confirm |
| EC-004 | Candidat 10+ mandats | Pagination |
| EC-005 | PDF sans texte (scan) | OCR fallback |
| EC-006 | Recherche 0 resultats | Empty state |
| EC-007 | Rate limit OpenAI | Queue backoff |
| EC-008 | Supabase down | Cache local |

### Garde-fous

| Protection | Implementation |
|------------|----------------|
| Rate limiting | 100 req/min/user |
| File size | 10MB client+server |
| Input sanitization | XSS prevention |
| SQL injection | Supabase RLS |
| CSRF | SameSite cookies |
| Timeout | 30s max/request |

---

## 5.F - NOTIFICATIONS

### Canaux

| Canal | Usage |
|-------|-------|
| Toast | Actions immediates |
| Nudge | Actions requises |
| Email | V2 (important) |

### Declencheurs

| Evenement | Canal | Message |
|-----------|-------|---------|
| CV analyse | Toast | Profil enrichi |
| Match > 0.8 | Toast+Nudge | Match prioritaire |
| Mandat 7j | Nudge | En attente |
| Erreur | Nudge error | Analyse echouee |

---

## 5.G - VALIDATION

### Coherence P2

| Story | Regles |
|-------|--------|
| US-001 Upload | BR-007/008, BL-001/002, AU-001 |
| US-002 Search | BR-002 |
| US-003 Score | BR-002, AU-003 |
| US-004 Mandat | BR-005, AU-003 |
| US-006 Profil | EC-001/002 |

### Tests Acceptance

| Scenario | Regle | Result |
|----------|-------|--------|
| Upload 5MB PDF | BR-007 | PASS |
| Upload 15MB | BL-001 | BLOCK |
| Upload DOCX | BL-002 | BLOCK |
| Match 0.3 | BR-002 | HIDDEN |
| Match 0.7 | BR-002 | VISIBLE |

---

*P5 Logique - Irbis v2.0 - 31/12/2025*
