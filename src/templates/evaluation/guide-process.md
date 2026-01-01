# Guide Process - Evaluation Candidats

## Overview

Ce guide presente le processus d'evaluation des candidats pour les missions Executive Search.

---

## Outils Disponibles

### 1. Documents de Cadrage
- **cadrage-standard.md** : Template de cadrage mission complet
- **variables.json** : Schema des variables cadrage

### 2. Scorecards d'Evaluation
- **scorecard-standard.md** : Grille d'evaluation generique
- **variables.json** : Presets par type de poste (MICE, Hospitality, CRO)

### 3. Formulaires d'Evaluation
- **formulaire-evaluation.md** : Formulaire complet pour collecter appreciations

---

## Process d'Evaluation en 4 Etapes

### Etape 1 : Auto-Evaluation Candidat

1. Envoyer le formulaire d'evaluation au candidat
2. Le candidat complete les sections :
   - Experience professionnelle
   - Competences techniques et comportementales
   - Vision strategique
   - Objectifs carriere
3. Calculer le score d'auto-evaluation (optionnel)

### Etape 2 : Evaluation Structuree

1. Preparer l'entretien structure en utilisant le formulaire
2. Utiliser la scorecard appropriee :
   - Noter chaque critere sur 5
   - Calculer le score pondere automatiquement
   - Ajouter commentaires qualitatifs
3. Completer la section "Evaluation globale" du formulaire

### Etape 3 : Validation 360 (References)

1. Contacter les references fournies par le candidat
2. Utiliser la section "References 360" du formulaire
3. Croiser les informations avec les evaluations precedentes
4. Identifier les convergences/divergences

### Etape 4 : Decision Comite

1. Presenter les candidats au comite avec :
   - Scorecard complete
   - Formulaire d'evaluation renseigne
   - Synthese des points forts/axes d'amelioration
2. Prendre decision collegiale
3. Documenter dans tableau de bord de suivi

---

## Utilisation des Scorecards

### Structure Commune

| Element | Description |
|---------|-------------|
| **Categories** | Grandes familles de competences |
| **Criteres** | Competences specifiques evaluees |
| **Ponderation** | Poids de chaque critere dans le score total |
| **Indicateurs cles** | Elements concrets a evaluer |
| **Score 1-5** | Notation de chaque critere |
| **Score pondere** | Calcul automatique (Score x Ponderation) |

### Bareme de Notation

| Score | Description |
|:-----:|-------------|
| **1** | Tres faible - Competence absente ou tres limitee |
| **2** | Faible - Competence presente mais insuffisante |
| **3** | Moyen - Competence satisfaisante pour le poste |
| **4** | Bon - Competence solide avec exemples pertinents |
| **5** | Excellent - Competence exceptionnelle, niveau expert |

### Seuils de Decision

| Seuil | Recommandation |
|:-----:|----------------|
| **> 4.0** | Fortement recommande |
| **3.5 - 4.0** | Recommande |
| **3.0 - 3.5** | A considerer avec vigilance |
| **< 3.0** | Non retenu |

---

## Best Practices

### Pendant les Entretiens

1. **Structurer** : Utiliser systematiquement la grille d'entretien
2. **Approfondir** : Demander des exemples concrets pour chaque competence
3. **Quantifier** : Chercher des resultats chiffres (KPIs, budgets, equipes)
4. **Croiser** : Verifier coherence entre reponses et experience

### Pour l'Evaluation

1. **Objectivite** : Noter chaque critere independamment des autres
2. **Tracabilite** : Documenter precisement les justifications
3. **Coherence** : Assurer harmonisation entre evaluateurs
4. **Rapidite** : Completer les evaluations sous 24h post-entretien

### Pour la Decision

1. **Holistique** : Considerer score ET profil culturel
2. **Contexte** : Prendre en compte specificites client
3. **Potentiel** : Evaluer capacite a evoluer avec l'entreprise
4. **Collectif** : Valider en comite pour eviter biais individuels

---

## Formules Utiles (Spreadsheet)

```
# Calcul score pondere
= Score * Ponderation

# Score total
= SUM(Scores_Ponderes)

# Score moyen
= AVERAGE(Scores)

# Taux conversion
= COUNTIF(Statut;"Court-liste") / COUNTA(Nom_candidat)
```

---

## Mise en Forme Conditionnelle

| Score | Couleur |
|:-----:|---------|
| > 4.0 | Vert (excellent) |
| 3.0 - 4.0 | Jaune (bon) |
| < 3.0 | Rouge (insuffisant) |

---

## Maintenance et Suivi

### Mises a Jour

- Mettre a jour tableau de bord apres chaque entretien
- Completer scorecard et formulaire immediatement post-entretien
- Documenter lecons apprises en fin de processus

### Amelioration Continue

1. Analyser efficacite des criteres
2. Ajuster grilles selon retours terrain
3. Comparer avec standards du marche
4. Maintenir competences evaluateurs a niveau

---

*Guide Process v1.0 - Irbis Executive Search*
