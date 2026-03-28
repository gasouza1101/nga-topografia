import { colors, spacing } from "@/design-system";
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
      bg-green-600 text-white
      hover:bg-green-700 active:bg-green-800
      focus-visible:ring-offset-green-100
    `,
    secondary: `
      bg-blue-600 text-white
      hover:bg-blue-700 active:bg-blue-800
      focus-visible:ring-blue-500
    `,
    outline: `
      border-2 border-green-600 text-green-600
      hover:bg-green-50 active:bg-green-100
      focus-visible:ring-green-500
    `,
    ghost: `
      text-green-600
      hover:bg-green-50 active:bg-green-100
      focus-visible:ring-green-500
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