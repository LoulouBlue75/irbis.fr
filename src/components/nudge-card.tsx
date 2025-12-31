"use client"

import * as React from "react"
import {
  AlertCircle,
  AlertTriangle,
  Info,
  CheckCircle,
  Lightbulb,
  X,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export type NudgeVariant = "error" | "warning" | "info" | "success" | "neutral"
export type NudgePriority = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface NudgeCardProps {
  id: string
  priority: NudgePriority
  variant: NudgeVariant
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  ctaOnClick?: () => void
  dismissable?: boolean
  onDismiss?: (id: string) => void
  className?: string
}

interface VariantConfig {
  icon: LucideIcon
  containerClass: string
  iconClass: string
  titleClass: string
}

const variantConfig: Record<NudgeVariant, VariantConfig> = {
  error: {
    icon: AlertCircle,
    containerClass: "border-red-200 bg-red-50",
    iconClass: "text-red-600",
    titleClass: "text-red-900",
  },
  warning: {
    icon: AlertTriangle,
    containerClass: "border-amber-200 bg-amber-50",
    iconClass: "text-amber-600",
    titleClass: "text-amber-900",
  },
  info: {
    icon: Info,
    containerClass: "border-blue-200 bg-blue-50",
    iconClass: "text-blue-600",
    titleClass: "text-blue-900",
  },
  success: {
    icon: CheckCircle,
    containerClass: "border-green-200 bg-green-50",
    iconClass: "text-green-600",
    titleClass: "text-green-900",
  },
  neutral: {
    icon: Lightbulb,
    containerClass: "border-gray-200 bg-gray-50",
    iconClass: "text-gray-600",
    titleClass: "text-gray-900",
  },
}

const NudgeCard = React.forwardRef<HTMLDivElement, NudgeCardProps>(
  (
    {
      id,
      variant,
      title,
      description,
      ctaLabel,
      ctaHref,
      ctaOnClick,
      dismissable = false,
      onDismiss,
      className,
    },
    ref
  ) => {
    const config = variantConfig[variant]
    const Icon = config.icon

    const handleDismiss = React.useCallback(() => {
      onDismiss?.(id)
    }, [id, onDismiss])

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "border rounded-lg p-4 flex gap-3 transition-all duration-300",
          config.containerClass,
          className
        )}
      >
        <Icon
          className={cn("h-5 w-5 flex-shrink-0 mt-0.5", config.iconClass)}
          aria-hidden="true"
        />

        <div className="flex-1 min-w-0">
          <h4 className={cn("font-medium text-sm", config.titleClass)}>
            {title}
          </h4>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            {description}
          </p>

          {(ctaLabel && (ctaHref || ctaOnClick)) && (
            <div className="mt-3">
              {ctaHref ? (
                <Button asChild size="sm" variant="ghost" className="px-0 h-auto">
                  <Link href={ctaHref} className={config.iconClass}>
                    {ctaLabel} →
                  </Link>
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn("px-0 h-auto", config.iconClass)}
                  onClick={ctaOnClick}
                >
                  {ctaLabel} →
                </Button>
              )}
            </div>
          )}
        </div>

        {dismissable && onDismiss && (
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)
NudgeCard.displayName = "NudgeCard"

export { NudgeCard }
