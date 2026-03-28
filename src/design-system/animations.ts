/**
 * Design System - Animation Tokens
 * Animations padronizadas
 */

export const animations = {
  // Durations
  duration: {
    fast: "150ms",
    base: "200ms",
    slow: "300ms",
    slower: "500ms",
  },

  // Easing functions
  easing: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  },

  // Transitions
  transition: {
    all: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    color: "color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // CSS Animations
  keyframes: {
    fadeIn: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,
    slideInUp: `
      @keyframes slideInUp {
        from { 
          opacity: 0;
          transform: translateY(20px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    slideInDown: `
      @keyframes slideInDown {
        from { 
          opacity: 0;
          transform: translateY(-20px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    pulse: `
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `,
  },
} as const;

export type Animations = typeof animations;
