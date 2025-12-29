import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  size?: "default" | "narrow" | "wide" | "full";
}

const sizeClasses = {
  default: "max-w-[1280px]",
  narrow: "max-w-[960px]",
  wide: "max-w-[1440px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto",
        "px-[var(--space-6)] md:px-[var(--space-12)] lg:px-[var(--space-16)]",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
