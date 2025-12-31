# NUDGE SYSTEM — Irbis Console

> **Version** : 1.0 (31/12/2025)
> **Reference** : Matrice v4.1 — Items 4.16-4.17
> **Scope** : Dashboard Hunting (`/hunting/dashboard`)

---

## Vue d'Ensemble

Le Nudge System guide l'utilisateur vers les actions importantes sans etre intrusif.

### Principe

```
Un nudge n'est pas une alerte.
C'est un guide contextuel qui dit :
"Voici ce que tu devrais faire maintenant."
```

---

## 1. ARCHITECTURE DU NUDGE SYSTEM

### Priorites (1-9)

| Priorite | Type | Variant | Urgence | Exemple |
|----------|------|---------|---------|---------|
| 1-2 | **Bloquant** | `error` | Critique | "Profil rejete par le client" |
| 3-4 | **Urgent** | `warning` | Action requise | "3 mandats sans activite depuis 7j" |
| 5-6 | **Opportunite** | `info` | A saisir | "5 nouveaux matches detectes" |
| 7-8 | **Optimisation** | `success` | Conseil | "Pipeline a 80% — bientot une shortlist" |
| 9 | **Exploration** | `neutral` | Suggestion | "Avez-vous essaye la recherche semantique ?" |

### Regles de Priorite

1. **Un seul nudge priorite 1-2** affiche en meme temps
2. **Max 3 nudges** visibles simultanement
3. **Ordre** : Toujours du plus urgent au moins urgent
4. **Dismissable** : Nudges 5+ peuvent etre fermes, 1-4 non

---

## 2. NUDGES PAR ECRAN

### Dashboard — Nudges Definis

#### NUD-001 : Aucun talent (Prio 3)

```yaml
nudge:
  id: NUD-001
  priority: 3
  condition: "talents.count === 0"
  variant: warning
  title: "Votre vivier est vide"
  description: "Ajoutez votre premier talent pour commencer a matcher."
  cta_label: "Ajouter un talent"
  cta_href: "/hunting/talents/new"
  dismissable: false
```

#### NUD-002 : Aucun mandat (Prio 4)

```yaml
nudge:
  id: NUD-002
  priority: 4
  condition: "mandates.active.count === 0"
  variant: warning
  title: "Aucun mandat actif"
  description: "Creez un mandat pour structurer votre recherche."
  cta_label: "Creer un mandat"
  cta_href: "/hunting/mandates/new"
  dismissable: false
```

#### NUD-003 : Nouveaux matches (Prio 5)

```yaml
nudge:
  id: NUD-003
  priority: 5
  condition: "matches.unseen.count > 0"
  variant: info
  title: "{count} nouveaux matches"
  description: "Des candidats correspondent a vos mandats actifs."
  cta_label: "Voir les matches"
  cta_href: "/hunting/matches"
  dismissable: true
```

#### NUD-004 : Mandat sans activite (Prio 4)

```yaml
nudge:
  id: NUD-004
  priority: 4
  condition: "mandates.inactive_7d.count > 0"
  variant: warning
  title: "Mandat en attente"
  description: "{mandate_name} n'a pas eu d'activite depuis 7 jours."
  cta_label: "Reprendre"
  cta_href: "/hunting/mandates/{mandate_id}"
  dismissable: false
```

#### NUD-005 : Pipeline bien rempli (Prio 7)

```yaml
nudge:
  id: NUD-005
  priority: 7
  condition: "mandate.pipeline.count >= 5 && mandate.shortlist.count < 3"
  variant: success
  title: "Pipeline en bonne voie"
  description: "Vous avez 5+ candidats. Pret pour une shortlist ?"
  cta_label: "Finaliser shortlist"
  cta_href: "/hunting/mandates/{mandate_id}/shortlist"
  dismissable: true
```

#### NUD-006 : Onboarding — Recherche (Prio 9)

```yaml
nudge:
  id: NUD-006
  priority: 9
  condition: "user.searches.count === 0 && user.created_at > 7d"
  variant: neutral
  title: "Astuce : Recherche semantique"
  description: "Essayez 'Expert Retail avec experience Luxe' au lieu de mots-cles."
  cta_label: "Essayer"
  cta_href: "/hunting/talents?focus=search"
  dismissable: true
```

#### NUD-007 : CVs en attente d'analyse (Prio 3)

```yaml
nudge:
  id: NUD-007
  priority: 3
  condition: "talents.pending_analysis.count > 0"
  variant: warning
  title: "{count} CV(s) en attente"
  description: "L'analyse IA est en cours. Resultats sous peu."
  cta_label: null
  cta_href: null
  dismissable: false
```

#### NUD-008 : Echec analyse CV (Prio 2)

```yaml
nudge:
  id: NUD-008
  priority: 2
  condition: "talents.failed_analysis.count > 0"
  variant: error
  title: "Erreur d'analyse"
  description: "{count} CV(s) n'ont pas pu etre analyses."
  cta_label: "Voir les erreurs"
  cta_href: "/hunting/talents?filter=failed"
  dismissable: false
```

---

## 3. COMPOSANT NUDGECARD

### Props Interface

```typescript
interface NudgeCardProps {
  id: string;
  priority: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  variant: 'error' | 'warning' | 'info' | 'success' | 'neutral';
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  dismissable: boolean;
  onDismiss?: (id: string) => void;
}
```

### Style par Variant

```css
/* Error (Prio 1-2) */
.nudge-error {
  @apply border-red-200 bg-red-50;
}
.nudge-error .nudge-icon {
  @apply text-red-600;
}

/* Warning (Prio 3-4) */
.nudge-warning {
  @apply border-amber-200 bg-amber-50;
}
.nudge-warning .nudge-icon {
  @apply text-amber-600;
}

/* Info (Prio 5-6) */
.nudge-info {
  @apply border-blue-200 bg-blue-50;
}
.nudge-info .nudge-icon {
  @apply text-blue-600;
}

/* Success (Prio 7-8) */
.nudge-success {
  @apply border-green-200 bg-green-50;
}
.nudge-success .nudge-icon {
  @apply text-green-600;
}

/* Neutral (Prio 9) */
.nudge-neutral {
  @apply border-gray-200 bg-gray-50;
}
.nudge-neutral .nudge-icon {
  @apply text-gray-600;
}
```

### Implementation Suggeree

```tsx
// components/nudge-card.tsx
import { AlertTriangle, AlertCircle, Info, CheckCircle, Lightbulb, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const variantConfig = {
  error: {
    icon: AlertCircle,
    className: 'border-red-200 bg-red-50',
    iconClassName: 'text-red-600'
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-amber-200 bg-amber-50',
    iconClassName: 'text-amber-600'
  },
  info: {
    icon: Info,
    className: 'border-blue-200 bg-blue-50',
    iconClassName: 'text-blue-600'
  },
  success: {
    icon: CheckCircle,
    className: 'border-green-200 bg-green-50',
    iconClassName: 'text-green-600'
  },
  neutral: {
    icon: Lightbulb,
    className: 'border-gray-200 bg-gray-50',
    iconClassName: 'text-gray-600'
  }
};

export function NudgeCard({
  id,
  variant,
  title,
  description,
  ctaLabel,
  ctaHref,
  dismissable,
  onDismiss
}: NudgeCardProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div className={cn('border rounded-lg p-4 flex gap-3', config.className)}>
      <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', config.iconClassName)} />
      <div className="flex-1">
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        {ctaLabel && ctaHref && (
          <Button asChild size="sm" variant="link" className="px-0 mt-2">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        )}
      </div>
      {dismissable && onDismiss && (
        <button
          onClick={() => onDismiss(id)}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
```

---

## 4. NUDGE PROVIDER

### Context

```tsx
// contexts/nudge-context.tsx
interface NudgeContextType {
  nudges: NudgeCardProps[];
  dismissNudge: (id: string) => void;
  refreshNudges: () => Promise<void>;
}

const NudgeContext = createContext<NudgeContextType | null>(null);

export function NudgeProvider({ children }: { children: React.ReactNode }) {
  const [nudges, setNudges] = useState<NudgeCardProps[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  // Load dismissed from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('dismissed_nudges');
    if (stored) {
      setDismissed(new Set(JSON.parse(stored)));
    }
  }, []);

  const dismissNudge = (id: string) => {
    const newDismissed = new Set(dismissed).add(id);
    setDismissed(newDismissed);
    localStorage.setItem('dismissed_nudges', JSON.stringify([...newDismissed]));
  };

  const refreshNudges = async () => {
    // Fetch conditions from API
    const conditions = await fetchNudgeConditions();
    const activeNudges = evaluateNudges(conditions, dismissed);
    setNudges(activeNudges);
  };

  // Refresh on mount and every 30s
  useEffect(() => {
    refreshNudges();
    const interval = setInterval(refreshNudges, 30000);
    return () => clearInterval(interval);
  }, [dismissed]);

  return (
    <NudgeContext.Provider value={{ nudges, dismissNudge, refreshNudges }}>
      {children}
    </NudgeContext.Provider>
  );
}
```

---

## 5. INTEGRATION DASHBOARD

### Layout

```tsx
// app/hunting/dashboard/page.tsx
export default function DashboardPage() {
  const { nudges } = useNudges();

  // Sort by priority, take top 3
  const visibleNudges = nudges
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  return (
    <div>
      {/* Nudges Section */}
      {visibleNudges.length > 0 && (
        <section className="mb-6 space-y-3">
          {visibleNudges.map(nudge => (
            <NudgeCard key={nudge.id} {...nudge} />
          ))}
        </section>
      )}

      {/* Stats Cards */}
      <DashboardStats />

      {/* Activity */}
      <RecentActivity />
    </div>
  );
}
```

---

## 6. CONDITIONS BACKEND

### API Endpoint

```typescript
// app/api/nudges/route.ts
export async function GET(request: Request) {
  const user = await getCurrentUser();

  const conditions = {
    talents: {
      count: await db.talents.count({ where: { userId: user.id } }),
      pending_analysis: await db.talents.count({
        where: { userId: user.id, status: 'pending_analysis' }
      }),
      failed_analysis: await db.talents.count({
        where: { userId: user.id, status: 'analysis_failed' }
      })
    },
    mandates: {
      active: {
        count: await db.mandates.count({
          where: { userId: user.id, status: 'active' }
        })
      },
      inactive_7d: await db.mandates.findMany({
        where: {
          userId: user.id,
          status: 'active',
          updatedAt: { lt: subDays(new Date(), 7) }
        }
      })
    },
    matches: {
      unseen: {
        count: await db.matches.count({
          where: { userId: user.id, seen: false }
        })
      }
    },
    user: {
      searches: {
        count: await db.searchLogs.count({ where: { userId: user.id } })
      },
      created_at: user.createdAt
    }
  };

  return Response.json(conditions);
}
```

---

## 7. CHECKLIST IMPLEMENTATION

### Phase 1 — Foundation

- [ ] Creer `components/nudge-card.tsx`
- [ ] Creer `contexts/nudge-context.tsx`
- [ ] Creer `app/api/nudges/route.ts`

### Phase 2 — Integration

- [ ] Integrer NudgeProvider dans layout
- [ ] Ajouter section nudges au Dashboard
- [ ] Implementer dismiss + localStorage

### Phase 3 — Nudges Specifiques

- [ ] NUD-001 : Vivier vide
- [ ] NUD-002 : Aucun mandat
- [ ] NUD-003 : Nouveaux matches
- [ ] NUD-004 : Mandat sans activite
- [ ] NUD-005 : Pipeline OK
- [ ] NUD-008 : Erreur analyse

---

*Nudge System — Irbis Console*
*v1.0 — 31/12/2025*
