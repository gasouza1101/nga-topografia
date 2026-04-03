import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

/**
 * Button Component
 * Componente base para botões com múltiplas variações
 */
export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  disabled = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-lg
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  `;

  const variantClasses = {
    primary: `
      bg-primary text-primary-foreground
      hover:bg-primary/90 active:bg-primary/80
      focus-visible:ring-primary/40 focus-visible:ring-offset-background
    `,
    secondary: `
      bg-secondary text-secondary-foreground
      hover:bg-secondary/90 active:bg-secondary/80
      focus-visible:ring-secondary/40 focus-visible:ring-offset-background
    `,
    outline: `
      border-2 border-primary text-primary
      hover:bg-primary/10 active:bg-primary/15
      focus-visible:ring-primary/30 focus-visible:ring-offset-background
    `,
    ghost: `
      text-primary
      hover:bg-primary/10 active:bg-primary/15
      focus-visible:ring-primary/30 focus-visible:ring-offset-background
    `,
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin">⏳</span>
          Carregando...
        </>
      ) : (
        children
      )}
    </button>
  );
}