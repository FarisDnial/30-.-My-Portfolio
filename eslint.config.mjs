import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",      // Essential Next.js rules + performance
    "next",                      // Next.js recommended base config
    "plugin:react-hooks/recommended", // Lint React hooks usage
    "plugin:@typescript-eslint/recommended", // TS-specific best practices
    "plugin:jsx-a11y/recommended" // Accessibility best practices
  ),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react-hooks/exhaustive-deps": "warn",
      "prefer-const": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];

export default eslintConfig;
