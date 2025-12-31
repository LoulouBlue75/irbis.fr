import * as React from "react"
import { type LucideIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface EmptyStateAction {
  label: string
  href?: string
  onClick?: () => void
  variant?: "default" | "outline" | "ghost"
}

export interface EmptyStateProps {
  icon: LucideIcon
  title: string
  message: string
  actions?: EmptyStateAction[]
  className?: string
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon: Icon, title, message, actions, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center py-16 px-6 text-center",
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <Icon className="h-8 w-8 text-gray-400" />
        </div>

        <h3 className="font-serif text-xl font-medium text-irbis-navy mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 max-w-md mb-6 leading-relaxed">
          {message}
        </p>

        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center">
            {actions.map((action, index) => {
              const buttonVariant = action.variant || (index === 0 ? "default" : "outline")

              if (action.href) {
                return (
                  <Button
                    key={index}
                    variant={buttonVariant}
                    size="sm"
                    asChild
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                )
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  size="sm"
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              )
            })}
          </div>
        )}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"

export { EmptyState }
