import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: "default" | "compact" | "spacious";
}

const spacingClasses = {
  compact: "py-[var(--space-16)] md:py-[var(--space-20)] lg:py-[var(--space-24)]",
  default: "py-[var(--space-24)] md:py-[var(--space-32)] lg:py-[var(--space-40)]",
  spacious: "py-[var(--space-32)] md:py-[var(--space-40)] lg:py-[var(--space-48)]",
};

export function Section({
  children,
  className,
  id,
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}
