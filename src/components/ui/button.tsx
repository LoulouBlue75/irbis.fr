import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[var(--space-2)] whitespace-nowrap text-[var(--text-sm)] font-[var(--font-semibold)] tracking-[var(--tracking-wide)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-luxury)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--irbis-gold)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 cursor-pointer border-none",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--irbis-gold)] text-[var(--irbis-navy)] rounded-[var(--radius-md)] hover:bg-[var(--irbis-gold-dark)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)]",
        secondary:
          "bg-[var(--irbis-navy)] text-[var(--irbis-cream)] rounded-[var(--radius-md)] hover:bg-[var(--irbis-navy-light)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]",
        outline:
          "bg-transparent text-[var(--irbis-navy)] border border-solid border-[var(--irbis-gold)] rounded-[var(--radius-md)] hover:bg-[var(--irbis-gold)] hover:text-[var(--irbis-navy)]",
        ghost:
          "bg-transparent text-[var(--irbis-navy)] rounded-[var(--radius-md)] hover:bg-[var(--overlay-gold)]",
        destructive:
          "bg-[var(--error)] text-white rounded-[var(--radius-md)] hover:bg-[var(--error)]/90",
        link:
          "text-[var(--irbis-navy)] underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        default: "h-11 px-[var(--space-6)] py-[var(--space-3)]",
        sm: "h-9 px-[var(--space-4)] py-[var(--space-2)] text-[var(--text-xs)]",
        lg: "h-14 px-[var(--space-8)] py-[var(--space-4)] text-[var(--text-base)]",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
