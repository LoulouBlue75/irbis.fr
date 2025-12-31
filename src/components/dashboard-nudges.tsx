"use client"

import * as React from "react"
import { NudgeCard } from "./nudge-card"
import { useNudges, type NudgeConditionData } from "@/contexts/nudge-context"

interface DashboardNudgesProps {
  stats: {
    totalCandidates: number
    activeJobs: number
    totalMatches: number
  }
}

export function DashboardNudges({ stats }: DashboardNudgesProps) {
  const { nudges, refreshNudges, isLoading } = useNudges()

  // Refresh nudges when stats change
  React.useEffect(() => {
    const conditionData: NudgeConditionData = {
      talents: {
        count: stats.totalCandidates,
        pendingAnalysis: 0, // TODO: Get from API
        failedAnalysis: 0,  // TODO: Get from API
      },
      mandates: {
        activeCount: stats.activeJobs,
        inactiveIds: [], // TODO: Get from API
      },
      matches: {
        unseenCount: 0, // TODO: Get from API
      },
      user: {
        searchCount: 0, // TODO: Get from API
        createdAt: new Date(), // TODO: Get from API
      },
    }

    refreshNudges(conditionData)
  }, [stats, refreshNudges])

  if (isLoading || nudges.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-3 mb-8">
      {nudges.map((nudge) => (
        <NudgeCard key={nudge.id} {...nudge} />
      ))}
    </section>
  )
}
