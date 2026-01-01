# Templates Evaluation - Irbis Executive Search

## Structure

```
evaluation/
├── scorecard-standard.md      # Grille d'evaluation candidat
├── formulaire-evaluation.md   # Formulaire complet d'evaluation
├── guide-process.md           # Guide du process d'evaluation
├── variables.json             # Schema et presets
└── README.md                  # Ce fichier
```

## Outils Disponibles

### 1. Scorecard d'Evaluation
Grille structuree pour noter les candidats sur des criteres ponderes.

**Categories typiques** :
- Strategie & Vision (35%)
- Commercial & Developpement (30%)
- Operations & Digital (25%)
- Leadership (10%)

### 2. Formulaire d'Evaluation
Formulaire complet couvrant :
- Experience professionnelle
- Competences techniques
- Competences comportementales
- Vision strategique
- Objectifs carriere
- Points d'attention
- Decision comite

### 3. Guide Process
Documentation du process d'evaluation en 4 etapes.

## Presets Disponibles

| Preset | Focus Principal | Usage |
|--------|-----------------|-------|
| `head_of_mice` | Dev commercial + Digital + P&L | BU MICE |
| `head_of_hospitality` | Operations + Multi-sites | Operations |
| `cro` | Revenue + GTM + Strategy | Direction commerciale |

## Bareme de Notation

| Score | Description |
|:-----:|-------------|
| **1** | Tres faible - Competence absente |
| **2** | Faible - Insuffisante |
| **3** | Moyen - Satisfaisante |
| **4** | Bon - Solide |
| **5** | Excellent - Expert |

## Seuils de Decision

| Score | Decision |
|:-----:|----------|
| > 4.0 | Fortement recommande |
| 3.5 - 4.0 | Recommande |
| 3.0 - 3.5 | A considerer |
| < 3.0 | Non retenu |

## Process en 4 Etapes

```
1. Auto-evaluation candidat
        ↓
2. Entretien structure + Scorecard
        ↓
3. Validation references 360
        ↓
4. Decision comite
```

## Utilisation

### Avant Entretien
1. Choisir le preset adapte au poste
2. Personnaliser les criteres si necessaire
3. Preparer les questions d'approfondissement

### Pendant Entretien
1. Suivre la structure du formulaire
2. Noter chaque critere immediatement
3. Collecter exemples concrets et chiffres

### Apres Entretien
1. Completer la scorecard sous 24h
2. Calculer le score global
3. Rediger synthese points forts/axes amelioration
4. Preparer presentation comite

## Best Practices

- **Objectivite** : Noter independamment chaque critere
- **Tracabilite** : Documenter les justifications
- **Coherence** : Harmoniser entre evaluateurs
- **Rapidite** : Evaluer sous 24h post-entretien

## Mise en Forme Conditionnelle (Spreadsheet)

| Condition | Couleur |
|:---------:|---------|
| Score > 4.0 | Vert |
| Score 3.0 - 4.0 | Jaune |
| Score < 3.0 | Rouge |

---

*Irbis Executive Search - Templates Evaluation v1.0*
