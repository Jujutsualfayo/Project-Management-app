import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Enforce case-sensitive import paths
      "import/no-unresolved": ["error", { caseSensitive: true }],
    },
  },
];

export default eslintConfig;


