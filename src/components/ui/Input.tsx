import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  fullWidth?: boolean;
}

/**
 * Input Component
 * Campo de entrada com suporte a erro e label
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helper,
      fullWidth = false,
      className = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const widthClass = fullWidth ? "w-full" : "";

    return (
      <div className={widthClass}>
        {label && (
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-2.5
            border-2 border-gray-300
            rounded-lg
            text-base
            transition-colors duration-200
            focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-200
            disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200
            ${error ? "border-red-500 focus:border-red-600" : ""}
            ${className}
          `}
          disabled={disabled}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {helper && !error && (
          <p className="mt-1 text-sm text-gray-500">{helper}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
