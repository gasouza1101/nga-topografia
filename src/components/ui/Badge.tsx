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
    primary: "bg-green-100 text-green-800",
    secondary: "bg-blue-100 text-blue-800",
    accent: "bg-orange-100 text-orange-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
    error: "bg-red-100 text-red-800",
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