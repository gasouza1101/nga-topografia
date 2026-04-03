import { ReactNode } from "react";

interface BadgeProps {
  variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "error";
  size?: "sm" | "md";
  children: ReactNode;
  className?: string;
}

/**
 * Badge Component
 * Pequeno indicador visual para categorias, tags, status
 */
export function Badge({
  variant = "primary",
  size = "md",
  children,
  className = "",
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    success: "bg-primary/10 text-primary",
    warning: "bg-accent/10 text-accent",
    error: "bg-secondary/10 text-secondary",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs font-semibold",
    md: "px-3 py-1.5 text-sm font-semibold",
  };

  return (
    <span
      className={`
        inline-block
        rounded-full
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}