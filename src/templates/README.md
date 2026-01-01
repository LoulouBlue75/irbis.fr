# Templates Irbis Executive Search

## Vue d'Ensemble

Systeme de templates pour l'ensemble du cycle de vie d'une mission Executive Search.

```
templates/
├── contracts/      # Contrats et mandats
├── cadrage/        # Documents de cadrage mission
├── evaluation/     # Evaluation candidats
└── README.md       # Ce fichier
```

---

## 1. Contracts

Templates pour la contractualisation des missions.

| Template | Description |
|----------|-------------|
| `executive-search-standard.md` | Mandat de recherche standard |
| `variables.json` | Schema des variables contrat |

**Presets disponibles** :
- `standard` : 25% fee, retainer 33/33/34
- `premium` : 30% fee, exclusif, retainer 50/25/25
- `success_only` : 28% fee, pas de retainer

---

## 2. Cadrage

Templates pour le cadrage et brief de mission.

| Template | Description |
|----------|-------------|
| `cadrage-standard.md` | Structure cadrage 8 sections |
| `variables.json` | Schema et presets cadrage |

**Sections du cadrage** :
1. Profil Ideal-Type
2. Expertises (operationnelles, metier, management)
3. Types Fonctionnels (cibles, adjacentes)
4. Types Sectoriels (cibles, adjacents)
5. Geographie (zones, entreprises cibles)
6. Remuneration et Attractivite
7. Pools de Talents (actifs, passifs)
8. KPIs de Performance

---

## 3. Evaluation

Templates pour l'evaluation des candidats.

| Template | Description |
|----------|-------------|
| `scorecard-standard.md` | Grille d'evaluation ponderee |
| `formulaire-evaluation.md` | Formulaire complet candidat |
| `guide-process.md` | Guide du process evaluation |
| `variables.json` | Schema et presets evaluation |

**Presets disponibles** :
- `head_of_mice` : Dev commercial + Digital + P&L
- `head_of_hospitality` : Operations + Multi-sites
- `cro` : Revenue + GTM + Strategy

---

## Workflow Type

```
1. CONTRACTUALISATION
   └── contracts/executive-search-standard.md
               ↓
2. CADRAGE
   └── cadrage/cadrage-standard.md
               ↓
3. SOURCING & EVALUATION
   ├── evaluation/scorecard-standard.md
   └── evaluation/formulaire-evaluation.md
               ↓
4. DECISION
   └── evaluation/guide-process.md
```

---

## Syntaxe des Variables

### Variables Simples
```
{{VARIABLE_NAME}}
```

### Blocs Conditionnels
```
{{#IF CONDITION}}
Contenu si condition = true
{{/IF CONDITION}}

{{#IF NO_CONDITION}}
Contenu si condition = false
{{/IF NO_CONDITION}}
```

---

## Generation Automatisee (Futur)

```bash
# Generer un contrat
node scripts/generate.js contract --preset standard --client "Acme Corp"

# Generer un cadrage
node scripts/generate.js cadrage --preset senior_manager --job "Head of Sales"

# Generer une scorecard
node scripts/generate.js scorecard --preset head_of_hospitality
```

---

## Versions

| Template | Version | Derniere MAJ |
|----------|:-------:|:------------:|
| Contracts | 1.0 | 01/01/2026 |
| Cadrage | 1.0 | 01/01/2026 |
| Evaluation | 1.0 | 01/01/2026 |

---

*Irbis Executive Search - Templates v1.0*
