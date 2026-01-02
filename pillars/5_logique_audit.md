# P5 LOGIQUE - RAPPORT D'AUDIT

> **Date** : 01/01/2026
> **Reference** : Matrice v4.1 - Chantier 5
> **Scope** : Verification regles documentees vs code implemente

---

## RESUME EXECUTIF

### Avant Corrections (01/01/2026 - 10h)

| Categorie | Total | OK | Partiel | GAP |
|-----------|-------|-----|---------|-----|
| Business Rules (BR) | 8 | 2 | 2 | 4 |
| Blocking Rules (BL) | 6 | 2 | 2 | 2 |
| Automatic Rules (AU) | 6 | 2 | 2 | 2 |
| Workflows (WF) | 3 | 2 | 0 | 1 |
| RBAC | - | OK | - | - |
| **TOTAL** | 23 | 8 | 6 | 9 |

**Score P5 initial** : 35% (8/23 regles completement implementees)

### Apres Corrections (02/01/2026 - 14h)

| Categorie | Total | OK | Partiel | GAP |
|-----------|-------|-----|---------|-----|
| Business Rules (BR) | 8 | 6 | 0 | 2 |
| Blocking Rules (BL) | 6 | 5 | 1 | 0 |
| Automatic Rules (AU) | 6 | 3 | 1 | 2 |
| Workflows (WF) | 3 | 2 | 0 | 1 |
| RBAC | - | OK | - | - |
| **TOTAL** | 23 | 16 | 2 | 5 |

**Score P5 apres corrections** : 70% (16/23 regles OK)

### Corrections Appliquees

| ID | Description | Fichier | Status |
|----|-------------|---------|--------|
| FIX-001 | Validation 10MB server-side | `upload-cv.ts` | DONE |
| FIX-002 | Validation PDF server-side | `upload-cv.ts` | DONE |
| FIX-003 | UNIQUE(project_id, email) candidates | `migrations/20260102000001_*.sql` | DONE |
| FIX-004 | Form readonly si mandat closed | `job-form.tsx` | DONE |
| FIX-005 | Retries: 3 sur processCV | `functions.ts` | DONE |
| FIX-006 | UNIQUE(job_id, candidate_id) matches | Deja present dans schema | DONE |

---

## 1. BUSINESS RULES (BR)

### BR-001 : CV analyse en < 30 secondes
| Status | GAP |
|--------|-----|
| **Localisation attendue** | `src/inngest/functions.ts` |
| **Constat** | Workflow `processCV` existe mais aucun timeout explicite de 30s |
| **Action requise** | Ajouter `timeout: 30000` dans config Inngest |

### BR-002 : Score matching min 0.5 pour affichage
| Status | OK |
|--------|-----|
| **Localisation** | `src/inngest/matching.ts:123`, `src/app/actions/search.ts:30` |
| **Code** | `match_threshold: 0.5` |

### BR-003 : Candidat unique par mandat
| Status | OK (FIX-006) |
|--------|--------------|
| **Localisation** | `supabase/migrations/20241220000008_matching_engine.sql:48` |
| **Code** | `UNIQUE(job_id, candidate_id)` deja present dans schema initial |

### BR-004 : Seul createur/admin peut supprimer mandat
| Status | OK |
|--------|-----|
| **Localisation** | `supabase/migrations/20250101000001_rls_production.sql:109` |
| **Code** | `jobs_delete` policy: `USING (is_admin())` |
| **Note** | Createur non inclus - intentionnel? Verifier avec P2 |

### BR-005 : Mandat ferme = readonly
| Status | OK (FIX-004) |
|--------|--------------|
| **Localisation** | `src/components/job-form.tsx:24-25` |
| **Code** | `const isReadonly = initialData?.status === 'closed'` |
| **Implementation** | Form disabled, submit blocked, alert affiche |

### BR-006 : Email candidat unique par projet
| Status | OK (FIX-003) |
|--------|--------------|
| **Localisation** | `supabase/migrations/20260102000001_unique_candidate_email.sql` |
| **Code** | Partial unique index `idx_candidates_unique_email_per_project` |
| **Note** | Gere les doublons existants avant creation de l'index |

### BR-007 : Taille max CV 10MB
| Status | OK (FIX-001) |
|--------|--------------|
| **Client** | `src/components/cv-upload.tsx:95` - Affichage texte |
| **Server** | `src/app/actions/upload-cv.ts:8,26-28` |
| **Code** | `MAX_FILE_SIZE = 10 * 1024 * 1024` + validation |

### BR-008 : Format PDF uniquement
| Status | OK (FIX-002) |
|--------|--------------|
| **Client** | `src/components/cv-upload.tsx:38` |
| **Server** | `src/app/actions/upload-cv.ts:31-33` |
| **Code** | `file.type !== 'application/pdf'` check server-side |

---

## 2. BLOCKING RULES (BL)

### BL-001 : CV > 10MB
| Status | OK (FIX-001) |
|--------|--------------|
| Voir BR-007 - Corrige |

### BL-002 : Format != PDF
| Status | OK (FIX-002) |
|--------|--------------|
| Voir BR-008 - Corrige |

### BL-003 : Email existe
| Status | PARTIEL |
|--------|---------|
| **Localisation** | `src/inngest/functions.ts:457-471` |
| **Constat** | Check existence et update, mais pas de modal merge/reject UI |
| **Action requise** | Implementer modal dans CV upload flow |

### BL-004 : Mandat closed
| Status | OK (FIX-004) |
|--------|--------------|
| Voir BR-005 - Corrige |

### BL-005 : Session expiree
| Status | OK |
|--------|-----|
| **Localisation** | `src/lib/supabase/middleware.ts:62-66` |
| **Code** | Redirect vers `/login` si `!user && !isPublicRoute` |

### BL-006 : Non autorise
| Status | OK |
|--------|-----|
| **Localisation** | `src/lib/auth.ts:47-58` |
| **Code** | `requireAdmin()` redirect vers `/hunting/dashboard` |

---

## 3. AUTOMATIC RULES (AU)

### AU-001 : CV uploade -> Analyse IA
| Status | OK |
|--------|-----|
| **Localisation** | `src/inngest/functions.ts:235-332` |
| **Trigger** | `document/uploaded` |
| **Steps** | download -> extract-text -> structure-data -> generate-embedding -> save-talent |

### AU-002 : Analyse OK -> Notification
| Status | GAP |
|--------|-----|
| **Constat** | Workflow `processCV` ne notifie pas apres success |
| **Action requise** | Ajouter step `step.sendEvent('notification/send', {...})` |

### AU-003 : Mandat cree -> Embedding
| Status | OK |
|--------|-----|
| **Localisation** | `src/inngest/matching.ts:70-75` |
| **Trigger** | `mandates/created` |

### AU-004 : Match > 0.8 -> Notif prioritaire
| Status | GAP |
|--------|-----|
| **Constat** | Scores calcules mais pas de notification prioritaire |
| **Action requise** | Ajouter condition dans `generateAlignments` |

### AU-005 : Mandat 7j inactif -> Nudge
| Status | PARTIEL |
|--------|---------|
| **Constat** | NudgeContext existe mais pas de cron job pour detecter inactivite |
| **Action requise** | Creer Inngest scheduled function `mandate-inactivity-check` |

### AU-006 : Analyse fail -> Retry 3x
| Status | OK (FIX-005) |
|--------|--------------|
| **Localisation** | `src/inngest/functions.ts:237-238` |
| **Code** | `retries: 3` ajoute dans config de `processCV` |

---

## 4. RBAC

### Roles
| Role | Defini | Implementation |
|------|--------|----------------|
| guest | Implicit | Routes publiques dans middleware |
| recruiter | OK | `src/lib/auth.ts:4` default role |
| admin | OK | `src/lib/auth.ts:4` + `is_admin()` SQL |

### Matrice CRUD - Verification

| Ressource | Action | Documente | Implemente | Status |
|-----------|--------|-----------|------------|--------|
| Talent | Create OWN | P5 | RLS candidates_insert | OK |
| Talent | Read ALL | P5 | RLS avec project check | OK |
| Talent | Update OWN | P5 | RLS candidates_update | OK |
| Talent | Delete ADMIN | P5 | RLS candidates_delete | OK |
| Mandat | Create YES | P5 | RLS jobs_insert | OK |
| Mandat | Read OWN/ALL | P5 | RLS jobs_select | OK |
| Mandat | Update OWN | P5 | RLS jobs_update | OK |
| Mandat | Delete ADMIN | P5 | RLS jobs_delete | OK |
| Match | CRUD OWN | P5 | RLS via job owner | OK |
| User | CRUD ADMIN | P5 | `app/actions/admin.ts` | OK |

### Admin Privileges
| Privilege | Implementation |
|-----------|----------------|
| BYPASS_RLS | `is_admin()` SQL function |
| MANAGE_USERS | `inviteUser`, `updateUserRole`, `deleteUser` |
| VIEW_ANALYTICS | `getAdminStats()` |
| DELETE_ANY | RLS `_delete` policies |

**RBAC Score** : OK - Toutes les regles implementees

---

## 5. WORKFLOWS (WF)

### WF-001 : Ingestion CV
| Status | OK |
|--------|-----|
| **Fonction** | `processCV` in `src/inngest/functions.ts:235` |
| **Steps implementes** |
1. Download PDF (storage) ✓
2. Extract text (pdf-parse) ✓
3. AI Structuring (Gemini) ✓
4. Generate embedding ✓
5. Save to database ✓
6. Update status ✓

| **Manquant** | Notification success (AU-002) |

### WF-002 : Matching
| Status | OK |
|--------|-----|
| **Fonction** | `generateAlignments` in `src/inngest/matching.ts:70` |
| **Steps implementes** |
1. Fetch mandate ✓
2. Generate embedding ✓
3. Vector retrieval (threshold 0.5) ✓
4. LLM scoring ✓
5. Persist alignments ✓

| **Manquant** | Notification recruiter (AU-004) |

### WF-003 : Pipeline Candidat
| Status | GAP |
|--------|-----|
| **Constat** | Aucune implementation des transitions de statut |
| **Documente** | pending -> reviewed -> accepted/rejected -> PLACED |
| **Action requise** |
- Ajouter colonne `status` dans `candidates` ou `matches`
- Creer fonction Inngest `candidate/status.changed`
- Implementer transitions avec logging activite

---

## 6. GUARD-RAILS

| Protection | Documente | Implemente | Status |
|------------|-----------|------------|--------|
| Rate limiting 100 req/min | P5 | NON | GAP |
| File size 10MB | P5 | Texte seulement | PARTIEL |
| Input sanitization | P5 | Supabase natif | OK |
| SQL injection | P5 | RLS + Supabase | OK |
| CSRF | P5 | SameSite cookies | OK |
| Timeout 30s | P5 | NON explicite | GAP |

---

## 7. PLAN D'ACTION PRIORITISE

### Critique (P0) - Securite/Data

| ID | Action | Fichier | Status |
|----|--------|---------|--------|
| FIX-001 | Validation 10MB server-side | `upload-cv.ts` | DONE |
| FIX-002 | Validation PDF server-side | `upload-cv.ts` | DONE |
| FIX-003 | UNIQUE(project_id, email) | `migrations/20260102000001_*.sql` | DONE |

### Important (P1) - Fonctionnel

| ID | Action | Fichier | Status |
|----|--------|---------|--------|
| FIX-004 | Bloquer form si mandat closed | `job-form.tsx` | DONE |
| FIX-005 | Ajouter retries: 3 sur processCV | `functions.ts` | DONE |
| FIX-006 | UNIQUE(candidate_id, mandate_id) | Deja dans schema | DONE |

### Moyen (P2) - Notifications

| ID | Action | Fichier | Status |
|----|--------|---------|--------|
| FIX-007 | Notification analyse OK | `functions.ts` | TODO |
| FIX-008 | Notification match > 0.8 | `matching.ts` | TODO |
| FIX-009 | Cron mandat inactif 7j | Nouveau fichier Inngest | TODO |

### Futur (P3) - Pipeline

| ID | Action | Fichier | Status |
|----|--------|---------|--------|
| FIX-010 | Status pipeline candidat | Migration + Inngest | TODO |
| FIX-011 | Rate limiting | Middleware + Redis | TODO |

---

## 8. METRIQUES

**Avant audit** : P5 estime a 75% (estimation)
**Apres audit initial** : P5 reel a 35% (8/23 regles OK)
**Apres corrections session 1** : P5 a 61% (14/23 regles OK)
**Apres corrections session 2** : P5 a 70% (16/23 regles OK)

**Corrections effectuees** : 6/11 (FIX-001 a FIX-006)
**Restant a faire** : 5 fixes (FIX-007 a FIX-011)

**Gap principal restant** : Notifications (P2) et pipeline candidat (P3)

---

*Audit P5 Logique - IRBIS*
*02/01/2026 - Mise a jour apres migrations DB*
