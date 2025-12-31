"use client"

import * as React from "react"
import { type NudgeCardProps, type NudgeVariant, type NudgePriority } from "@/components/nudge-card"

// Nudge definition (without UI-specific props)
export interface NudgeDefinition {
  id: string
  priority: NudgePriority
  variant: NudgeVariant
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  dismissable: boolean
  condition: (data: NudgeConditionData) => boolean
}

// Data used to evaluate nudge conditions
export interface NudgeConditionData {
  talents: {
    count: number
    pendingAnalysis: number
    failedAnalysis: number
  }
  mandates: {
    activeCount: number
    inactiveIds: string[]
  }
  matches: {
    unseenCount: number
  }
  user: {
    searchCount: number
    createdAt: Date
  }
}

interface NudgeContextType {
  nudges: NudgeCardProps[]
  dismissNudge: (id: string) => void
  refreshNudges: (data: NudgeConditionData) => void
  isLoading: boolean
}

const NudgeContext = React.createContext<NudgeContextType | null>(null)

// Nudge definitions
const NUDGE_DEFINITIONS: NudgeDefinition[] = [
  {
    id: "NUD-001",
    priority: 3,
    variant: "warning",
    title: "Votre vivier est vide",
    description: "Ajoutez votre premier talent pour commencer a matcher.",
    ctaLabel: "Ajouter un talent",
    ctaHref: "/hunting/talents/new",
    dismissable: false,
    condition: (data) => data.talents.count === 0,
  },
  {
    id: "NUD-002",
    priority: 4,
    variant: "warning",
    title: "Aucun mandat actif",
    description: "Creez un mandat pour structurer votre recherche.",
    ctaLabel: "Creer un mandat",
    ctaHref: "/hunting/mandates/new",
    dismissable: false,
    condition: (data) => data.mandates.activeCount === 0,
  },
  {
    id: "NUD-003",
    priority: 5,
    variant: "info",
    title: "Nouveaux matches disponibles",
    description: "Des candidats correspondent a vos mandats actifs.",
    ctaLabel: "Voir les matches",
    ctaHref: "/hunting/dashboard",
    dismissable: true,
    condition: (data) => data.matches.unseenCount > 0,
  },
  {
    id: "NUD-004",
    priority: 4,
    variant: "warning",
    title: "Mandat en attente",
    description: "Un ou plusieurs mandats n'ont pas eu d'activite depuis 7 jours.",
    ctaLabel: "Reprendre",
    ctaHref: "/hunting/mandates",
    dismissable: false,
    condition: (data) => data.mandates.inactiveIds.length > 0,
  },
  {
    id: "NUD-005",
    priority: 7,
    variant: "success",
    title: "Pipeline en bonne voie",
    description: "Vous avez suffisamment de candidats pour constituer une shortlist.",
    ctaLabel: "Finaliser",
    ctaHref: "/hunting/mandates",
    dismissable: true,
    condition: () => false, // Implement when pipeline data is available
  },
  {
    id: "NUD-006",
    priority: 9,
    variant: "neutral",
    title: "Astuce : Recherche semantique",
    description: "Essayez 'Expert Retail avec experience Luxe' au lieu de mots-cles.",
    ctaLabel: "Essayer",
    ctaHref: "/hunting/talents?focus=search",
    dismissable: true,
    condition: (data) => {
      const daysSinceCreation = Math.floor(
        (Date.now() - data.user.createdAt.getTime()) / (1000 * 60 * 60 * 24)
      )
      return data.user.searchCount === 0 && daysSinceCreation <= 7
    },
  },
  {
    id: "NUD-007",
    priority: 3,
    variant: "info",
    title: "Analyse en cours",
    description: "Des CVs sont en cours d'analyse. Resultats sous peu.",
    dismissable: false,
    condition: (data) => data.talents.pendingAnalysis > 0,
  },
  {
    id: "NUD-008",
    priority: 2,
    variant: "error",
    title: "Erreur d'analyse",
    description: "Certains CVs n'ont pas pu etre analyses.",
    ctaLabel: "Voir les erreurs",
    ctaHref: "/hunting/talents?filter=failed",
    dismissable: false,
    condition: (data) => data.talents.failedAnalysis > 0,
  },
]

const STORAGE_KEY = "irbis_dismissed_nudges"

export function NudgeProvider({ children }: { children: React.ReactNode }) {
  const [nudges, setNudges] = React.useState<NudgeCardProps[]>([])
  const [dismissed, setDismissed] = React.useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = React.useState(true)

  // Load dismissed nudges from localStorage
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as string[]
        setDismissed(new Set(parsed))
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsLoading(false)
  }, [])

  const dismissNudge = React.useCallback((id: string) => {
    setDismissed((prev) => {
      const newDismissed = new Set(prev).add(id)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...newDismissed]))
      } catch {
        // Ignore localStorage errors
      }
      return newDismissed
    })
  }, [])

  const refreshNudges = React.useCallback(
    (data: NudgeConditionData) => {
      const activeNudges = NUDGE_DEFINITIONS.filter((def) => {
        // Skip dismissed nudges (only if they are dismissable)
        if (def.dismissable && dismissed.has(def.id)) {
          return false
        }
        // Evaluate condition
        return def.condition(data)
      })
        .sort((a, b) => a.priority - b.priority)
        .slice(0, 3) // Max 3 nudges
        .map((def) => ({
          id: def.id,
          priority: def.priority,
          variant: def.variant,
          title: def.title,
          description: def.description,
          ctaLabel: def.ctaLabel,
          ctaHref: def.ctaHref,
          dismissable: def.dismissable,
          onDismiss: dismissNudge,
        }))

      setNudges(activeNudges)
    },
    [dismissed, dismissNudge]
  )

  const value = React.useMemo(
    () => ({
      nudges,
      dismissNudge,
      refreshNudges,
      isLoading,
    }),
    [nudges, dismissNudge, refreshNudges, isLoading]
  )

  return <NudgeContext.Provider value={value}>{children}</NudgeContext.Provider>
}

export function useNudges() {
  const context = React.useContext(NudgeContext)
  if (!context) {
    throw new Error("useNudges must be used within a NudgeProvider")
  }
  return context
}
