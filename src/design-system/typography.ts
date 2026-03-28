/**
 * Design System - Typography Tokens
 * Tipografia standardizada para toda aplicação
 */

export const typography = {
  // Famílias de fontes
  fontFamily: {
    sans: "system-ui, -apple-system, sans-serif",
    mono: "ui-monospace, monospace",
  },

  // Tamanhos
  fontSize: {
    // Headings
    h1: {
      size: "3.5rem", // 56px
      lineHeight: "1.2",
      weight: 700,
    },
    h2: {
      size: "2.8rem", // 44px
      lineHeight: "1.25",
      weight: 700,
    },
    h3: {
      size: "2.2rem", // 35px
      lineHeight: "1.3",
      weight: 600,
    },
    h4: {
      size: "1.75rem", // 28px
      lineHeight: "1.35",
      weight: 600,
    },
    h5: {
      size: "1.4rem", // 22px
      lineHeight: "1.4",
      weight: 600,
    },
    h6: {
      size: "1.1rem", // 18px
      lineHeight: "1.5",
      weight: 600,
    },

    // Body
    body: {
      lg: {
        size: "1.125rem", // 18px
        lineHeight: "1.75",
        weight: 400,
      },
      base: {
        size: "1rem", // 16px
        lineHeight: "1.5",
        weight: 400,
      },
      sm: {
        size: "0.875rem", // 14px
        lineHeight: "1.43",
        weight: 400,
      },
      xs: {
        size: "0.75rem", // 12px
        lineHeight: "1.33",
        weight: 400,
      },
    },

    // Labels & Captions
    label: {
      size: "0.875rem", // 14px
      lineHeight: "1.43",
      weight: 600,
    },
    caption: {
      size: "0.75rem", // 12px
      lineHeight: "1.33",
      weight: 500,
    },
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

export type Typography = typeof typography;
