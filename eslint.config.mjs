import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

// Assign the configuration array to a variable before exporting
const config = [
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "plugin:tailwindcss/recommended",
    ),
    {
        plugins: {
            tailwindcss: tailwindcssPlugin,
        },
        rules: {
            "tailwindcss/classnames-order": [
                "warn",
                {
                    removeDuplicates: true,
                },
            ],
            "no-undef": "off",
            "no-unused-vars": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "@next/next/no-html-link-for-pages": "error",
            "tailwindcss/classnames-order": "warn",
            "tailwindcss/enforces-negative-arbitrary-values": "warn",
            "tailwindcss/enforces-shorthand": "warn",
            "tailwindcss/no-arbitrary-value": "off",
            "tailwindcss/no-custom-classname": "off",
            "tailwindcss/no-contradicting-classname": "error",
        },
    },
];

export default config;
