# P2 : ACTEURS & STORIES

> **Version** : 2.0 (Iteration 31/12/2025)
> **Status** : En cours d'enrichissement
> **Reference** : Matrice v4.1 — Chantier 2

---

## 2.A — PERSONAS

### Liste des Personas

| Persona | Role | Type | Description |
|---------|------|------|-------------|
| Le Recruteur | Chasseur de tetes | **Primary** | Utilisateur principal de la Console Hunting |
| L'Admin | Super-utilisateur | System | Gestion plateforme + config + analytics |
| Le Candidat | Talent | Secondary | Profil chasse (passif) ou postulant (actif) |
| Le Client | Entreprise mandataire | Served | Beneficiaire indirect (pas d'acces Console MVP) |

### PERSONA PRIORITAIRE

```
PERSONA #1 : Le Recruteur

Toutes les decisions de design et de priorisation se font
en faveur de ce persona. En cas de conflit d'interets,
le Recruteur prime sur les autres.
```

**Justification** :
- C'est lui qui genere la valeur (placements)
- C'est lui qui utilise la Console quotidiennement
- Son efficacite = revenus Irbis

---

### FICHE — Le Recruteur

#### Identite
- **Nom fictif** : Sophie, 38 ans
- **Metier** : Senior Headhunter, Irbis Partners
- **Localisation** : Paris / Remote
- **Experience** : 10+ ans dans le recrutement luxe/retail

#### Contexte d'Usage
- **Device principal** : Desktop (MacBook Pro)
- **Device secondaire** : Mobile (iPhone) pour consultations rapides
- **Moment d'usage** : 8h-19h, pics le matin et apres-midi
- **Frequence** : Quotidien, 4-6h/jour sur la Console
- **Duree session** : 30min-2h (sessions de sourcing intensives)

#### Goals (Objectifs)
1. Trouver le bon candidat rapidement (< 48h shortlist)
2. Ne pas perdre de temps sur la saisie de donnees
3. Avoir une vue claire de son pipeline par mandat
4. Retrouver instantanement un profil vu il y a 6 mois

#### Frustrations (Pain Points)
1. CVs PDF inexploitables — tout ressaisir manuellement
2. Recherche par mots-cles limitee — manque les profils atypiques
3. Outils disperses — LinkedIn + Excel + Email + CRM = friction
4. Pas de memoire — "Je suis sure d'avoir vu ce profil quelque part"

#### Citation Typique
> "J'ai 50 CVs a traiter et 3 mandats urgents. Je n'ai pas le temps de jouer les secretaires."

#### Comportements Cles
- Prefere scanner que lire (besoin de hierarchie visuelle)
- Fait confiance a son intuition apres lecture du resume
- Garde des notes manuscrites (a digitaliser)
- Fonctionne par priorite de mandat

---

### FICHE — L'Admin

#### Identite
- **Nom fictif** : Louis, 42 ans
- **Metier** : Managing Partner, Irbis Partners
- **Localisation** : Paris
- **Experience** : Fondateur, vision produit + operations

#### Contexte d'Usage
- **Device principal** : Desktop
- **Moment d'usage** : Debut de journee, fin de semaine
- **Frequence** : 2-3x/semaine
- **Duree session** : 15-30min (monitoring)

#### Goals (Objectifs)
1. Vue globale de l'activite (KPIs, pipeline)
2. Gerer les utilisateurs et leurs acces
3. Configurer les integrations (LinkedIn, CRM)
4. Identifier les bottlenecks dans le process

#### Responsabilites Admin
| Domaine | Actions |
|---------|---------|
| **Utilisateurs** | Creer/desactiver comptes, assigner roles |
| **Mandats** | Vue globale, reassigner si besoin |
| **Integrations** | Configurer LinkedIn, WhatsApp, Email |
| **Analytics** | Dashboard KPIs, exports |
| **Configuration** | Settings plateforme, feature flags |

#### Ecrans Admin (a developper)
- `/admin/dashboard` — Stats globales
- `/admin/users` — Gestion utilisateurs
- `/admin/integrations` — Config LinkedIn, etc.
- `/admin/settings` — Parametres plateforme

---

### FICHE — Le Candidat

#### Identite
- **Nom fictif** : Jean-Marc, 45 ans
- **Metier** : Directeur Retail, groupe luxe
- **Localisation** : Paris
- **Profile** : Passif (en poste, ouvert aux opportunites)

#### Contexte d'Usage
- **Device** : Mobile uniquement
- **Moment** : Soir, weekend (discretion)
- **Frequence** : Rare (quand contacte)
- **Duree** : < 5min

#### Goals (Objectifs)
1. Etre contacte pour des opportunites pertinentes
2. Ne pas perdre de temps sur des offres non qualifiees
3. Discretion absolue (en poste)

#### Notes MVP
> Le Candidat n'a PAS d'acces a la Console dans le MVP.
> Il est gere comme une entite dans le systeme.
> Son "portail" est prevu pour V2.

---

## 2.B — USER STORIES

### Format Standard
```
En tant que [PERSONA],
je veux [ACTION],
afin de [BENEFICE].
```

---

### BACKLOG PRIORISE (MoSCoW)

#### MUST HAVE (MVP)

| ID | Persona | Story | Priorite |
|----|---------|-------|----------|
| US-001 | Recruteur | Je veux uploader un CV PDF pour qu'il soit automatiquement analyse et structure | Must |
| US-002 | Recruteur | Je veux rechercher des candidats par concept semantique (pas juste mot-cle) | Must |
| US-003 | Recruteur | Je veux voir un score de matching candidat/mandat | Must |
| US-004 | Recruteur | Je veux creer un nouveau mandat avec criteres de recherche | Must |
| US-005 | Recruteur | Je veux voir la liste de tous mes candidats avec filtres | Must |
| US-006 | Recruteur | Je veux voir le profil complet d'un candidat avec historique | Must |
| US-007 | Admin | Je veux voir un dashboard avec KPIs globaux | Must |
| US-008 | Admin | Je veux gerer les utilisateurs (creer/desactiver) | Must |

#### SHOULD HAVE (V1.1)

| ID | Persona | Story | Priorite |
|----|---------|-------|----------|
| US-009 | Recruteur | Je veux ajouter des notes sur un candidat | Should |
| US-010 | Recruteur | Je veux associer un candidat a plusieurs mandats | Should |
| US-011 | Recruteur | Je veux voir l'activite recente en temps reel | Should |
| US-012 | Admin | Je veux configurer l'integration LinkedIn | Should |
| US-013 | Admin | Je veux exporter des donnees (CSV/Excel) | Should |

#### COULD HAVE (V2)

| ID | Persona | Story | Priorite |
|----|---------|-------|----------|
| US-014 | Recruteur | Je veux envoyer un email directement depuis la Console | Could |
| US-015 | Recruteur | Je veux planifier un rappel sur un candidat | Could |
| US-016 | Candidat | Je veux voir mon profil tel que vu par le recruteur | Could |
| US-017 | Client | Je veux voir la shortlist d'un mandat en cours | Could |

#### WON'T HAVE (Out of Scope)

| ID | Description | Raison |
|----|-------------|--------|
| US-018 | Portail candidat complet | V2+ |
| US-019 | Portail client | V2+ |
| US-020 | Application mobile native | Web responsive suffit |
| US-021 | Integration ATS tiers | Trop complexe MVP |

---

### ACCEPTANCE CRITERIA (Stories Must)

#### US-001 : Upload CV PDF

```gherkin
GIVEN je suis connecte en tant que Recruteur
  AND je suis sur la page Talents
WHEN je clique sur "Ajouter un talent"
  AND je selectionne un fichier PDF
THEN le fichier est uploade
  AND une analyse IA est declenchee
  AND un profil structure est cree en < 30 secondes
  AND je vois une notification de succes
```

#### US-002 : Recherche Semantique

```gherkin
GIVEN je suis sur la page Talents
  AND j'ai une base de 100+ candidats
WHEN je tape "Expert React avec experience Fintech"
THEN je vois une liste de candidats pertinents
  AND chaque resultat a un score de pertinence
  AND les resultats incluent des profils sans le mot "React" explicite
```

#### US-003 : Score de Matching

```gherkin
GIVEN je visualise un mandat
  AND des candidats sont dans le pipeline
WHEN je consulte la liste des candidats
THEN chaque candidat a un score de matching (0-100%)
  AND je peux trier par score
  AND les scores sont expliques (criteres)
```

#### US-007 : Dashboard Admin

```gherkin
GIVEN je suis connecte en tant qu'Admin
WHEN j'accede au Dashboard
THEN je vois :
  - Nombre total de talents
  - Mandats actifs
  - Placements du mois
  - Activite recente
  AND les KPIs sont actualises en temps reel
```

---

## 2.C — PARCOURS UTILISATEUR

### First Actions (apres login)

| Persona | Route apres login | First Action | Empty State si applicable |
|---------|-------------------|--------------|---------------------------|
| Recruteur | `/hunting/dashboard` | Voir activite + KPIs | "Bienvenue ! Creez votre premier mandat ou ajoutez un talent." |
| Admin | `/hunting/dashboard` | Voir KPIs globaux + alertes | "Aucune donnee. Invitez des recruteurs pour commencer." |

### Happy Path — Recruteur

**Objectif** : Trouver un candidat pour un mandat en cours

```
1. Login
   └→ /hunting/dashboard

2. Consulter Dashboard
   └→ Voir mandats actifs, nouveaux matches

3. Selectionner un Mandat
   └→ /hunting/mandates/[id]
   └→ Voir criteres + pipeline actuel

4. Lancer une recherche
   └→ Recherche semantique dans le vivier
   └→ Voir candidats pertinents avec scores

5. Consulter un profil
   └→ /hunting/talents/[id]
   └→ Voir analyse IA, experience, notes

6. Ajouter au pipeline
   └→ Bouton "Ajouter au mandat"
   └→ Confirmation succes

7. Retour Dashboard
   └→ Pipeline mis a jour
```

**Nombre d'etapes** : 7
**Temps estime** : 5-10 minutes

### Friction Points Identifies

| Etape | Type | Description | Solution proposee |
|-------|------|-------------|-------------------|
| 4 | Comprehension | "Recherche semantique" peut etre confus | Tooltips + exemples de requetes |
| 5 | Temps | Profil trop dense, surcharge cognitive | Sections collapsables, highlights |
| 6 | Decision | Hesitation "Est-ce le bon ?" | Score explique + comparaison |

---

## 2.D — ROLES & PERMISSIONS (RBAC)

### Roles Systeme

| Role | Description | Herite de |
|------|-------------|-----------|
| `guest` | Visiteur non connecte | - |
| `recruiter` | Utilisateur standard Console | `guest` |
| `admin` | Super-utilisateur | `recruiter` |

### Matrice CRUD par Entite

| Ressource | Action | guest | recruiter | admin |
|-----------|--------|-------|-----------|-------|
| **Talent** | Create | - | OWN | ALL |
| | Read | - | ALL | ALL |
| | Update | - | OWN | ALL |
| | Delete | - | - | ALL |
| **Mandate** | Create | - | YES | YES |
| | Read | - | OWN | ALL |
| | Update | - | OWN | ALL |
| | Delete | - | - | ALL |
| **Note** | Create | - | OWN | ALL |
| | Read | - | OWN | ALL |
| | Update | - | OWN | ALL |
| | Delete | - | OWN | ALL |
| **User** | Create | - | - | YES |
| | Read | - | - | ALL |
| | Update | - | - | ALL |
| | Delete | - | - | ALL |
| **Analytics** | Read | - | OWN | ALL |
| **Settings** | Read | - | OWN | ALL |
| | Update | - | - | YES |

**Legende** :
- `-` : Interdit
- `OWN` : Ses propres ressources uniquement
- `ALL` : Toutes les ressources
- `YES` : Action autorisee

---

## 2.E — VALIDATION

### Cascades Verifiees (01/01/2026)

| Element P2 | Impact P3 (Donnees) | Impact P4 (Interfaces) | Impact P5 (Logique) | Status |
|------------|---------------------|------------------------|---------------------|--------|
| Role `admin` | RLS is_admin() | Pages `/admin/*` | Middleware RBAC | Coherent |
| Role `recruiter` | RLS created_by | Pages `/hunting/*` | RBAC OWN/ALL | Coherent |
| Story US-001 | candidates, context_sources | SC-03 Talent Profile | WF-001 Ingestion | Coherent |
| Story US-002 | candidates.embedding | Search component | match_candidates() | Coherent |
| Story US-003 | matches.score | MatchScore component | BR-002 seuil 0.5 | Coherent |
| Story US-007 | aggregations | SC-01 Dashboard | Stats queries | Coherent |

**Resultat** : Toutes les cascades P2 → P3/P4/P5 sont coherentes.

### Validation Utilisateurs

**Status** : A planifier apres deploiement staging

| Session | Participant | Objectif | Duree | Prerequis |
|---------|-------------|----------|-------|-----------|
| VAL-001 | Sophie (recruteur) | Valider Happy Path sourcing | 1h | Staging + seed data |
| VAL-002 | Louis (admin) | Valider acces admin, KPIs | 30min | Staging + multi-users |
| VAL-003 | Observation | Session sourcing reelle | 2h | Prod avec vrais CVs |

**Criteres de Succes** :
- Sophie complete le Happy Path en < 10min
- Louis comprend les KPIs en < 2min
- Pas de friction majeure identifiee (blocage > 30s)

**Livrables Post-Validation** :
- Friction points documentes → P4 UI improvements
- Ajustements prioritaires → Sprint backlog

> Note: Ces validations bloquent le passage a 100% sur P2.
> Items 2.13 (cascades) et 2.14 (validation users) marques comme PARTIEL.

---

*P2 Acteurs & Stories — Irbis*
*v2.1 — 01/01/2026*
