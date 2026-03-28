/**
 * Design System - Spacing Tokens
 * Sistema de spacing em escala de 4px
 */

export const spacing = {
  // Base: 4px
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
} as const;

// Presets de espaçamento comum
export const spacingPresets = {
  // Container padding
  containerPx: spacing[4], // 16px mobile, 24px desktop
  containerPy: spacing[6], // 24px mobile, 32px desktop

  // Section padding
  sectionPy: spacing[12], // 48px

  // Component spacing
  componentGap: spacing[4], // 16px
  componentGapLarge: spacing[6], // 24px

  // Typography spacing
  headingSpacing: spacing[3], // 12px - espaço entre título e subtítulo
  paragraphSpacing: spacing[4], // 16px - espaço entre parágrafos
} as const;

export type Spacing = typeof spacing;
