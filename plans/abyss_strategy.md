# 🌊 PROJET ABYSS : STRATÉGIE TEMPORELLE & ARCHIVES

> **Objectif** : Valoriser le "Deep Data" (archives, emails, notes) en intégrant la dimension temporelle pour ne pas polluer le système avec des données obsolètes.

---

## 1. Le Défi : La "Demi-Vie" de la Donnée
Une note sur un candidat datant de 2021 n'a pas la même valeur qu'un email de 2024.
*   **Risque** : Le RAG classique (Vector Search) ne voit que la similarité sémantique, pas la fraîcheur.
*   **Solution** : Le **Temporal Context Engine**.

---

## 2. Architecture du Moteur Temporel

### A. Modèle de Données (Metadatas)
Chaque "chunk" de donnée vectorisé doit posséder ces métadonnées :
```json
{
  "content": "Expert React...",
  "source_type": "email_archive",
  "source_date": "2021-05-12T10:00:00Z", // Date de l'info
  "ingested_at": "2024-12-20T20:00:00Z", // Date du traitement
  "validity_period_months": 24, // Durée de vie estimée
  "decay_rate": 0.5 // Vitesse de dépréciation
}
```

### B. La "Decay Function" (Fonction de Dépréciation)
Au moment du *retrieval* (recherche), on applique un score hybride :
$$ ScoreFinal = ScoreSémantique \times \frac{1}{1 + (\text{AgeEnAnnées} \times DecayRate)} $$

*   **Exemple** : Un CV parfait (Score 0.95) mais vieux de 3 ans (Age 3) avec un decay de 0.5 vaudra : $0.95 \times (1 / 2.5) = 0.38$.
*   **Résultat** : Il ressortira *après* un CV moyen (0.7) mais récent (2024).

---

## 3. Pipeline d'Ingestion (Inngest)

### Workflow : `ingest/archive-batch`
Ce workflow traite vos exports d'emails et dossiers.

1.  **Extraction & Datation (LLM)** :
    *   Le LLM ne doit pas juste extraire le texte, il doit **déduire la date de validité**.
    *   *Prompt* : "Extrais les compétences ET la date de ce document. Si pas de date, estime-la via le contexte."
2.  **Calcul du Score Initial** :
    *   Si la donnée est > 3 ans, on la marque `stale` (périmée) mais on la garde pour l'historique ("Memory").
3.  **Vectorisation Temporelle** :
    *   Stockage dans Supabase `vectors` avec les métadonnées temporelles.

---

## 4. Orchestration de la "Fraîcheur" (Re-validation)

C'est là qu'Inngest brille. On ne subit pas l'obsolescence, on la gère.

### Workflow : `cron/refresh-stale-profiles`
*   **Trigger** : Hebdomadaire.
*   **Action** :
    1.  Scanner les profils "High Potential" dont la dernière data > 12 mois.
    2.  **Action Agentique** : Lancer une recherche LinkedIn/Web pour voir si le profil a changé.
    3.  **Comparaison** :
        *   Si changement détecté -> Créer nouvelle entrée (2024) -> Le score remonte.
        *   Si pas de changement -> Prolonger la validité.

---

## 5. Implémentation Concrète (Next Steps)

1.  **Modifier le Schéma DB** : Ajouter `source_date` et `validity_score` à la table `context_sources` ou `vectors`.
2.  **Créer le Script d'Ingestion** : Un script Node.js qui parse vos fichiers `.mbox` ou `.pst` (emails) et les envoie à l'API d'ingestion.
3.  **Configurer la Query** : Modifier `src/app/actions/search.ts` pour inclure la logique de *Decay* dans la requête Supabase (via une fonction RPC Postgres).
