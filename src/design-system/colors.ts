/**
 * Design System - Color Tokens
 * Todas as cores da aplicação com semântica clara.
 *
 * Paleta extraída de `public/images/LOGO nga.png`.
 */
export const colors = {
  // Brand / semantic tokens (5-8 colors max)
  primary: "#026389",
  "primary-foreground": "#FFFFFF",

  secondary: "#03364B",
  "secondary-foreground": "#FFFFFF",

  accent: "#476C81",

  muted: "#E1E6E9",
  background: "#FFFFFF",
  foreground: "#03364B",
  border: "#C4D0D6",

  // Semânticas (mapeadas para a mesma paleta, para evitar cores fora do branding)
  success: "#026389",
  warning: "#476C81",
  error: "#03364B",
  info: "#026389",

  // Transparências (neutras)
  overlay: {
    light: "rgba(17, 24, 39, 0.5)",
    dark: "rgba(17, 24, 39, 0.8)",
  },
} as const;

export type ColorToken = typeof colors;
