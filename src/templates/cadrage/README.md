# Templates Cadrage - Irbis Executive Search

## Structure

```
cadrage/
├── cadrage-standard.md   # Template principal cadrage mission
├── variables.json        # Schema des variables
└── README.md             # Ce fichier
```

## Utilisation

### 1. Choisir un preset

| Preset | Experience | Variable | Usage |
|--------|:----------:|:--------:|-------|
| `executive_c_level` | 12-20 ans | 20% | C-Level, COMEX |
| `senior_manager` | 7-15 ans | 15% | Directeurs, Head of |
| `manager` | 5-10 ans | 10% | Managers confirmes |

### 2. Sections du Template

Le cadrage est structure en 8 sections :

1. **Profil Ideal-Type** : Experience et competences nucleus
2. **Expertises** : Operationnelles, metier, management
3. **Types Fonctionnels** : Fonctions cibles et adjacentes
4. **Types Sectoriels** : Secteurs cibles et adjacents
5. **Geographie** : Zones et entreprises cibles
6. **Remuneration** : Package et attractivite
7. **Pools de Talents** : Actifs et passifs
8. **KPIs de Performance** : Indicateurs mesurables

### 3. Variables Principales

#### Mission
| Variable | Description |
|----------|-------------|
| `CONTRACT_REF` | Reference unique mission |
| `JOB_TITLE` | Intitule du poste |
| `CLIENT_NAME` | Nom du client |
| `DATE` | Date du document |

#### Profil
| Variable | Default | Description |
|----------|:-------:|-------------|
| `EXPERIENCE_MIN` | 7 | Annees minimum |
| `EXPERIENCE_MAX` | 15 | Annees maximum |
| `DOMAIN_PRIMARY` | - | Domaine principal |

#### Remuneration
| Variable | Default | Description |
|----------|:-------:|-------------|
| `PACKAGE_MIN` | - | Package min EUR |
| `PACKAGE_MAX` | - | Package max EUR |
| `VARIABLE_PERCENT` | 15 | % variable sur fixe |

### 4. Niveaux de Priorite

| Niveau | Icone | Description |
|--------|:-----:|-------------|
| Critique | 🔴 | Indispensable |
| Haute | 🟠 | Tres importante |
| Moyenne | 🟡 | Souhaitable |

## Exemples

### Head of Hospitality

```json
{
  "preset": "senior_manager",
  "JOB_TITLE": "Head of Hospitality",
  "CLIENT_NAME": "Patchwork",
  "DOMAIN_PRIMARY": "operations multisites, hotellerie premium",
  "PACKAGE_MIN": 70000,
  "PACKAGE_MAX": 85000,
  "VARIABLE_PERCENT": 15
}
```

### CRO

```json
{
  "preset": "executive_c_level",
  "JOB_TITLE": "Chief Revenue Officer",
  "CLIENT_NAME": "TechCorp",
  "DOMAIN_PRIMARY": "direction commerciale, GTM strategy",
  "PACKAGE_MIN": 150000,
  "PACKAGE_MAX": 200000,
  "VARIABLE_PERCENT": 25
}
```

## Checklist Avant Presentation Client

- [ ] Toutes les sections completees
- [ ] Entreprises cibles identifiees (minimum 10)
- [ ] Pools de talents mappes
- [ ] KPIs mesurables definis
- [ ] Package aligne avec marche
- [ ] Relecture coherence globale

---

*Irbis Executive Search - Templates Cadrage v1.0*
