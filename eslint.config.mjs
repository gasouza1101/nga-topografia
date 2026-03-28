import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "dist/**",
    "coverage/**",
    "node_modules/**",
  ]),
  {
    rules: {
      // Acessibilidade
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",

      // React best practices
      "react/no-unescaped-entities": "warn",
      "react/display-name": "off",

      // TypeScript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Variáveis não utilizadas
      "no-unused-vars": "off",
    },
  },
]);

export default eslintConfig;

