/**
 * Design System - Shadow Tokens
 * Elevações e sombras para profundidade
 */

export const shadows = {
  // Elevações
  none: "none",

  // Subtle
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",

  // Small
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",

  // Medium
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",

  // Large
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",

  // Extra large
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

  // XXL
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

  // Especiais
  inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",

  // Card shadow (recomendado para cards)
  card: "0 4px 12px rgba(0, 0, 0, 0.08)",

  // Hover shadow (para interação)
  cardHover: "0 8px 24px rgba(0, 0, 0, 0.12)",

  // Focus shadow (para acessibilidade)
  focus: "0 0 0 3px rgba(34, 197, 94, 0.1), 0 0 0 1px rgba(34, 197, 94, 0.5)",
} as const;

export type Shadows = typeof shadows;
