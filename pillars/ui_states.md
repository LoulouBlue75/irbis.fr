# UI STATES — Irbis Console

> **Version** : 1.0 (31/12/2025)
> **Reference** : Matrice v4.1 — Chantier 4 (Items 4.12-4.15)
> **Scope** : Console Hunting (`/hunting/*`)

---

## Vue d'Ensemble

Chaque ecran de la Console doit gerer 4 etats UI :

| Etat | Quand | Objectif |
|------|-------|----------|
| **Empty** | Aucune donnee | Guider vers l'action |
| **Loading** | Chargement en cours | Informer de la progression |
| **Error** | Echec d'operation | Permettre la recuperation |
| **Success** | Action reussie | Confirmer + guider |

---

## 1. EMPTY STATES

### Principe
> Un empty state n'est pas un dead-end. C'est une opportunite d'onboarding.

### Structure Standard

```
+--------------------------------------------------+
|                                                  |
|              [Illustration/Icon]                 |
|                                                  |
|           Titre court et clair                   |
|    Message explicatif (1-2 lignes max)           |
|                                                  |
|           [ CTA Principal ]                      |
|                                                  |
+--------------------------------------------------+
```

---

### Dashboard — Empty State

**Route** : `/hunting/dashboard`

**Condition** : `talents.count === 0 && mandates.count === 0`

| Element | Valeur |
|---------|--------|
| **Illustration** | `<Briefcase />` (Lucide) ou illustration custom |
| **Titre** | "Bienvenue dans votre Console Hunting" |
| **Message** | "Commencez par ajouter un talent ou creer votre premier mandat." |
| **CTA Principal** | "Ajouter un talent" → `/hunting/talents/new` |
| **CTA Secondaire** | "Creer un mandat" → `/hunting/mandates/new` |

```tsx
// Composant suggeree
<EmptyState
  icon={Briefcase}
  title="Bienvenue dans votre Console Hunting"
  message="Commencez par ajouter un talent ou creer votre premier mandat."
  actions={[
    { label: "Ajouter un talent", href: "/hunting/talents/new", variant: "primary" },
    { label: "Creer un mandat", href: "/hunting/mandates/new", variant: "secondary" }
  ]}
/>
```

---

### Talents List — Empty State

**Route** : `/hunting/talents`

**Condition** : `talents.length === 0`

| Element | Valeur |
|---------|--------|
| **Illustration** | `<Users />` |
| **Titre** | "Aucun talent dans votre vivier" |
| **Message** | "Uploadez un CV ou ajoutez manuellement un profil pour commencer." |
| **CTA Principal** | "Ajouter un talent" → `/hunting/talents/new` |

---

### Mandates List — Empty State

**Route** : `/hunting/mandates`

**Condition** : `mandates.length === 0`

| Element | Valeur |
|---------|--------|
| **Illustration** | `<Target />` |
| **Titre** | "Aucun mandat en cours" |
| **Message** | "Creez un nouveau mandat pour commencer a sourcer des talents." |
| **CTA Principal** | "Creer un mandat" → `/hunting/mandates/new` |

---

### Search Results — Empty State

**Route** : `/hunting/talents` (avec query)

**Condition** : `searchResults.length === 0`

| Element | Valeur |
|---------|--------|
| **Illustration** | `<SearchX />` |
| **Titre** | "Aucun resultat" |
| **Message** | "Essayez d'autres termes ou modifiez vos filtres." |
| **CTA Principal** | "Effacer les filtres" → action `clearFilters()` |

---

### Mandate Pipeline — Empty State

**Route** : `/hunting/mandates/[id]`

**Condition** : `mandate.candidates.length === 0`

| Element | Valeur |
|---------|--------|
| **Illustration** | `<UserPlus />` |
| **Titre** | "Pipeline vide" |
| **Message** | "Lancez une recherche pour trouver des candidats correspondant a ce mandat." |
| **CTA Principal** | "Rechercher des talents" → focus search bar |

---

## 2. LOADING STATES

### Principe
> Loading n'est pas un blocage. C'est une promesse que quelque chose arrive.

### Types de Loading

| Type | Usage | Duree typique |
|------|-------|---------------|
| **Skeleton** | Chargement page initiale | > 500ms |
| **Spinner inline** | Action utilisateur | < 3s |
| **Progress bar** | Upload, process long | > 3s |
| **Optimistic UI** | Actions rapides | < 500ms |

### Regles

| Duree | Comportement |
|-------|--------------|
| < 100ms | Pas de loading visible |
| 100-500ms | Spinner subtil |
| 500ms-3s | Skeleton complet |
| > 3s | Progress bar + message |

---

### Dashboard — Loading

```tsx
<DashboardSkeleton>
  {/* Stats Cards */}
  <div className="grid grid-cols-4 gap-4">
    <Skeleton className="h-24 w-full" />
    <Skeleton className="h-24 w-full" />
    <Skeleton className="h-24 w-full" />
    <Skeleton className="h-24 w-full" />
  </div>

  {/* Activity Feed */}
  <Skeleton className="h-64 w-full mt-6" />
</DashboardSkeleton>
```

---

### Talents List — Loading

```tsx
<TalentListSkeleton>
  {/* Search bar */}
  <Skeleton className="h-10 w-full max-w-md" />

  {/* Table rows */}
  {[...Array(5)].map((_, i) => (
    <div key={i} className="flex items-center gap-4 py-4">
      <Skeleton className="h-10 w-10 rounded-full" /> {/* Avatar */}
      <Skeleton className="h-4 w-48" /> {/* Name */}
      <Skeleton className="h-4 w-32" /> {/* Role */}
      <Skeleton className="h-6 w-16" /> {/* Badge */}
    </div>
  ))}
</TalentListSkeleton>
```

---

### Talent Profile — Loading

```tsx
<TalentProfileSkeleton>
  {/* Header */}
  <div className="flex gap-6">
    <Skeleton className="h-24 w-24 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-48" />
    </div>
  </div>

  {/* Content */}
  <Skeleton className="h-96 w-full mt-6" />
</TalentProfileSkeleton>
```

---

### Action Loading (Buttons)

```tsx
// Pendant une action
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Chargement...
</Button>

// Upload en cours
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Analyse en cours...
</Button>
```

---

## 3. ERROR STATES

### Principe
> Une erreur n'est pas une impasse. C'est une opportunite de recuperation.

### Types d'Erreurs

| Type | Code | Affichage | Exemple |
|------|------|-----------|---------|
| **Validation** | 400 | Inline sous le champ | "Email invalide" |
| **Auth** | 401/403 | Toast + redirect | "Session expiree" |
| **Not Found** | 404 | Page complete | "Talent introuvable" |
| **Server** | 500 | Toast + retry | "Erreur serveur" |
| **Network** | - | Toast + retry | "Connexion perdue" |

---

### Structure Message d'Erreur

```
[Icon] [Titre court]
[Explication de ce qui s'est passe]
[Action pour resoudre] [Bouton retry si applicable]
```

---

### Erreur Validation (Inline)

**Contexte** : Formulaire de creation

```tsx
<FormField>
  <Label>Email</Label>
  <Input className="border-red-500" />
  <p className="text-sm text-red-600 mt-1">
    Format d'email invalide
  </p>
</FormField>
```

---

### Erreur Action (Toast)

**Contexte** : Echec sauvegarde

```tsx
toast({
  variant: "destructive",
  title: "Echec de la sauvegarde",
  description: "Verifiez votre connexion et reessayez.",
  action: <ToastAction altText="Reessayer" onClick={retry}>
    Reessayer
  </ToastAction>,
})
```

---

### Erreur 404 (Page)

**Route** : `/hunting/talents/[id]` (talent inexistant)

```tsx
<ErrorPage
  code={404}
  title="Talent introuvable"
  message="Ce profil n'existe pas ou a ete supprime."
  actions={[
    { label: "Retour aux talents", href: "/hunting/talents" }
  ]}
/>
```

---

### Erreur 500 (Page)

**Contexte** : Erreur serveur generale

```tsx
<ErrorPage
  code={500}
  title="Une erreur est survenue"
  message="Nous travaillons a resoudre le probleme. Reessayez dans quelques instants."
  actions={[
    { label: "Rafraichir", onClick: () => window.location.reload() },
    { label: "Contacter le support", href: "mailto:support@irbis.fr" }
  ]}
/>
```

---

### Erreur Network (Toast persistent)

```tsx
toast({
  variant: "warning",
  title: "Connexion perdue",
  description: "Vos modifications seront synchronisees une fois la connexion retablie.",
  duration: Infinity, // Ne disparait pas
})
```

---

### Messages d'Erreur — Catalogue

| Code | Titre | Message | Action |
|------|-------|---------|--------|
| 400 | "Donnees invalides" | "Verifiez les champs en rouge." | - |
| 401 | "Session expiree" | "Veuillez vous reconnecter." | Redirect `/login` |
| 403 | "Acces refuse" | "Vous n'avez pas les droits necessaires." | Redirect `/hunting/dashboard` |
| 404 | "[Ressource] introuvable" | "Cet element n'existe pas ou a ete supprime." | Retour liste |
| 409 | "Conflit detecte" | "Cette donnee a ete modifiee. Rafraichissez." | Refresh |
| 500 | "Erreur serveur" | "Une erreur inattendue s'est produite." | Retry |
| NETWORK | "Connexion perdue" | "Verifiez votre connexion internet." | Retry |

---

## 4. SUCCESS STATES

### Principe
> Un succes n'est pas une fin. C'est une transition vers la prochaine etape.

### Types de Feedback Success

| Type | Usage | Duree | Redirect |
|------|-------|-------|----------|
| **Toast** | Actions legeres | 3-5s auto | Non |
| **Toast + Redirect** | CRUD | 3s | Oui |
| **Inline** | Confirmation dans contexte | Persistant | Non |
| **Page** | Actions majeures | Manuel | Oui |

---

### Actions Success — Catalogue

| Action | Type | Message | Next Step |
|--------|------|---------|-----------|
| **Talent cree** | Toast + Redirect | "Talent ajoute avec succes" | → `/hunting/talents/[id]` |
| **CV analyse** | Toast | "CV analyse — Profil enrichi" | Reste sur page |
| **Mandat cree** | Toast + Redirect | "Mandat cree" | → `/hunting/mandates/[id]` |
| **Candidat ajoute au pipeline** | Toast | "Candidat ajoute au pipeline" | Reste sur page |
| **Note ajoutee** | Inline | Affichage immediat note | Reste sur page |
| **Settings saved** | Toast | "Parametres sauvegardes" | Reste sur page |

---

### Toast Success (Standard)

```tsx
toast({
  title: "Talent ajoute avec succes",
  description: "Le profil est maintenant disponible dans votre vivier.",
  action: <ToastAction altText="Voir" onClick={() => router.push(`/hunting/talents/${id}`)}>
    Voir
  </ToastAction>,
})
```

---

### Inline Success (Notes)

```tsx
// Apres ajout d'une note
<div className="flex items-center gap-2 text-green-600">
  <Check className="h-4 w-4" />
  <span className="text-sm">Note ajoutee</span>
</div>
```

---

## 5. COMPOSANTS RECOMMANDES

### EmptyState Component

```tsx
interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message: string;
  actions?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  }[];
}

export function EmptyState({ icon: Icon, title, message, actions }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Icon className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-md mb-6">{message}</p>
      {actions && (
        <div className="flex gap-3">
          {actions.map((action, i) => (
            <Button
              key={i}
              variant={action.variant === "secondary" ? "outline" : "default"}
              onClick={action.onClick}
              asChild={!!action.href}
            >
              {action.href ? <Link href={action.href}>{action.label}</Link> : action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

### ErrorPage Component

```tsx
interface ErrorPageProps {
  code?: number;
  title: string;
  message: string;
  actions?: {
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
}

export function ErrorPage({ code, title, message, actions }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {code && (
        <span className="text-6xl font-bold text-muted-foreground mb-4">{code}</span>
      )}
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-muted-foreground max-w-md mb-8">{message}</p>
      {actions && (
        <div className="flex gap-3">
          {actions.map((action, i) => (
            <Button
              key={i}
              variant={i === 0 ? "default" : "outline"}
              onClick={action.onClick}
              asChild={!!action.href}
            >
              {action.href ? <Link href={action.href}>{action.label}</Link> : action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## 6. CHECKLIST IMPLEMENTATION

### Par Ecran

| Ecran | Empty | Loading | Error | Success |
|-------|-------|---------|-------|---------|
| Dashboard | [ ] | [ ] | [ ] | N/A |
| Talents List | [ ] | [ ] | [ ] | N/A |
| Talent Profile | N/A | [ ] | [ ] | [ ] Notes |
| Mandates List | [ ] | [ ] | [ ] | N/A |
| Mandate Detail | [ ] Pipeline | [ ] | [ ] | [ ] Add to pipeline |
| Search | [ ] | [ ] | N/A | N/A |

### Composants a creer

- [ ] `components/ui/empty-state.tsx`
- [ ] `components/ui/error-page.tsx`
- [ ] `components/ui/loading-skeleton.tsx` (variantes par page)

---

*UI States — Irbis Console*
*v1.0 — 31/12/2025*
