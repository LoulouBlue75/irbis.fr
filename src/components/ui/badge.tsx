import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border font-mono tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-irbis-navy text-white shadow hover:bg-irbis-navy/90",
        secondary:
          "border-transparent bg-irbis-cream text-irbis-navy hover:bg-irbis-cream-dark",
        outline: 
          "text-irbis-navy border-gray-200 bg-transparent",
        gold: 
          "border-irbis-gold/30 bg-irbis-gold/10 text-irbis-gold-dark hover:bg-irbis-gold/20",
        success:
          "border-transparent bg-[#E8F5F1] text-[#2E7D6B]",
        warning:
          "border-transparent bg-[#FDF6E3] text-[#D4A74A]",
        destructive:
          "border-transparent bg-[#FDEDED] text-[#B54B4B]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
