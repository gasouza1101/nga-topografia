/**
 * Design System - Color Tokens
 * Todas as cores da aplicação com semântica clara
 */

export const colors = {
  // Primária - Verde (topografia/natureza)
  primary: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a", // Main
    700: "#15803d",
    800: "#166534",
    900: "#145231",
  },

  // Secundária - Azul (confiança/profissionalismo)
  secondary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7", // Main
    700: "#0369a1",
    800: "#075985",
    900: "#0c3d66",
  },

  // Accent - Laranja (ação/CTA)
  accent: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c", // Main
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },

  // Neutras
  neutral: {
    0: "#ffffff",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },

  // Semânticas
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",

  // Transparências
  overlay: {
    light: "rgba(17, 24, 39, 0.5)",
    dark: "rgba(17, 24, 39, 0.8)",
  },
} as const;

export type ColorToken = typeof colors;
