# Templates Contrats - Irbis Executive Search

## Structure

```
contracts/
├── executive-search-standard.md   # Template principal
├── variables.json                  # Schema des variables
└── README.md                       # Ce fichier
```

## Utilisation

### 1. Choisir un preset

| Preset | Fee | Retainer | Exclusif | Usage |
|--------|:---:|:--------:|:--------:|-------|
| `standard` | 25% | Oui (33/33/34) | Non | Missions classiques |
| `premium` | 30% | Oui (50/25/25) | Oui | C-Level, strategique |
| `success_only` | 28% | Non | Non | Relation etablie |

### 2. Remplir les variables

#### Obligatoires

| Variable | Description |
|----------|-------------|
| `CLIENT_NAME` | Raison sociale |
| `CLIENT_CONTACT` | Interlocuteur |
| `JOB_TITLE` | Intitule du poste |
| `PACKAGE_MIN/MAX` | Fourchette package |

#### Optionnelles (avec defaults)

| Variable | Default | Description |
|----------|:-------:|-------------|
| `FEE_PERCENT` | 25 | % du package |
| `SHORTLIST_COUNT` | 3 | Nb candidats shortlist |
| `DELAY_SHORTLIST` | 21 | Jours avant shortlist |
| `CONTRACT_DURATION` | 6 | Mois |

### 3. Generer le contrat

#### Option A : Manuel

1. Copier `executive-search-standard.md`
2. Remplacer les `{{VARIABLE}}` par les valeurs
3. Supprimer les blocs conditionnels non applicables

#### Option B : Script (futur)

```bash
node scripts/generate-contract.js \
  --preset standard \
  --client "Acme Corp" \
  --job "Directeur Commercial" \
  --package 120000-150000
```

## Blocs Conditionnels

Le template utilise une syntaxe de blocs conditionnels :

```
{{#IF RETAINER}}
Contenu si retainer = true
{{/IF RETAINER}}

{{#IF NO_RETAINER}}
Contenu si retainer = false
{{/IF NO_RETAINER}}
```

### Mapping

| Condition | Variable | Valeur |
|-----------|----------|--------|
| `RETAINER` | `fees.RETAINER` | `true` |
| `NO_RETAINER` | `fees.RETAINER` | `false` |
| `EXCLUSIVE` | `terms.EXCLUSIVE` | `true` |
| `NON_EXCLUSIVE` | `terms.EXCLUSIVE` | `false` |

## Exemples

### Mission Standard

```json
{
  "preset": "standard",
  "CLIENT_NAME": "TechCorp SAS",
  "CLIENT_CONTACT": "Marie Martin",
  "CLIENT_TITLE": "DRH",
  "JOB_TITLE": "VP Engineering",
  "JOB_LOCATION": "Paris",
  "PACKAGE_MIN": 150000,
  "PACKAGE_MAX": 180000,
  "RETAINER_AMOUNT": 12000
}
```

### Mission Premium Exclusive

```json
{
  "preset": "premium",
  "CLIENT_NAME": "BigCorp SA",
  "CLIENT_CONTACT": "Pierre Durand",
  "CLIENT_TITLE": "CEO",
  "JOB_TITLE": "Directeur General Adjoint",
  "JOB_LOCATION": "Paris + International",
  "PACKAGE_MIN": 250000,
  "PACKAGE_MAX": 350000,
  "RETAINER_AMOUNT": 25000,
  "EXCLUSIVITY_DURATION": 4
}
```

## Checklist Avant Envoi

- [ ] Toutes les variables remplacees
- [ ] Blocs conditionnels nettoyes
- [ ] Montants verifies
- [ ] Dates coherentes
- [ ] Annexe 1 (job desc) attachee
- [ ] Relecture juridique si nouveau client

## Versions

| Version | Date | Changements |
|---------|------|-------------|
| 1.0 | 01/01/2026 | Template initial |

---

*Irbis Executive Search - Templates v1.0*
