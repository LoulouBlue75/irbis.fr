# 🎨 CHANTIER 4 : INTERFACES & UX (PLAN D'ACTION)

> **Objectif** : Formaliser l'identité visuelle et l'expérience utilisateur d'IRBIS pour dépasser le stade "MVP brut".

---

## 1. Audit de l'Existant
- **Framework** : Shadcn/UI + Tailwind CSS.
- **État actuel** : Fonctionnel mais "brut". Manque de cohérence visuelle et de feedback utilisateur.
- **Points de friction identifiés** :
    - Navigation entre Dashboard et Détail Candidat.
    - Feedback lors de l'upload de CV (loading states).
    - Affichage des résultats de recherche sémantique (score matching).

## 2. Design System "Violet IRBIS"
- **Couleurs** :
    - Primary: `#6C63FF` (Violet)
    - Background: Dark Mode par défaut (Slate/Zinc).
- **Typographie** : Inter (Standard) -> Envisager une font plus "Tech" pour les titres ?
- **Composants Clés** :
    - `CandidateCard` : Doit afficher le score de match en gros.
    - `JobCard` : Statut clair (Open/Closed).
    - `ActivityTimeline` : Visualisation chronologique des actions CRM.

## 3. Maquettes & Wireframes (À réaliser)
### A. Dashboard Principal
- **KPIs** : Nombre de candidats, Jobs actifs, Matches récents.
- **Action Rapide** : "Upload CV" accessible partout.

### B. Recherche Sémantique
- **Input** : Barre de recherche type "Google" ou "Perplexity".
- **Résultats** : Liste avec "Pourquoi ce match ?" (Snippet IA).

### C. Fiche Candidat (360°)
- **Vue unifiée** : CV (gauche) + Données structurées (droite).
- **Onglets** : Matching / CRM / Documents.

## 4. Roadmap d'Implémentation
1.  **Refonte Navigation** : Sidebar latérale vs Topbar.
2.  **Polissage Composants** : Standardiser les boutons, inputs et cartes.
3.  **UX "Search"** : Ajouter des filtres dynamiques après la recherche sémantique.
4.  **Feedback** : Ajouter des Toasts (Sonner) pour toutes les actions serveur.

---

## 5. Prochaine Étape Immédiate
- Implémenter le **Feedback Temps Réel** (Supabase Realtime) pour rendre l'interface vivante.
