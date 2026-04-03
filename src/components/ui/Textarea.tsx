import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
  fullWidth?: boolean;
}

/**
 * Textarea Component
 * Campo de texto multi-linha
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helper,
      fullWidth = false,
      className = "",
      disabled = false,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const widthClass = fullWidth ? "w-full" : "";

    return (
      <div className={widthClass}>
        {label && (
          <label className="block text-sm font-semibold text-foreground/80 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`
            w-full px-4 py-2.5
            border-2 border-border
            rounded-lg
            text-base
            resize-vertical
            font-sans
            transition-colors duration-200
            focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20
            disabled:bg-muted disabled:cursor-not-allowed disabled:border-border
            ${error ? "border-secondary focus:border-secondary" : ""}
            ${className}
          `}
          disabled={disabled}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-secondary">{error}</p>}
        {helper && !error && (
          <p className="mt-1 text-sm text-foreground/60">{helper}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";