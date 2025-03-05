import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  ...new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: {
      extends: [
        "next/core-web-vitals",
        "next/typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      ignorePatterns: [
        "node_modules/",
        "dist/",
        "*.spec.ts",
        "*.test.ts",
        "/.next/",
      ],
      rules: {
        "no-unused-vars": "warn",
        eqeqeq: "error",
        curly: "error",
        "no-console": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        indent: ["error", 2],
        "no-mixed-spaces-and-tabs": "error",
      },
    },
  }).extends(),
];

export default eslintConfig;
