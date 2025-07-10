import type { Config } from "tailwindcss";

/**
 * Tailwind configuration exposing design tokens as utility classes.
 *
 * Only **semantic** CSS variables from `globals.css` are mapped here. Raw
 * `*-500` tokens remain internal so that contributors use concise classes like
 * `bg-primary`, `bg-primary-hover`, `text-light`, etc. If a new semantic
 * token is added to `globals.css`, mirror it here to make a class utility.
 *
 * **Why two files?**  `globals.css` keeps the tokens alive *at runtime* (they
 * can change on-the-fly for theming).  `tailwind.config.ts` runs *at build
 * time*, exposing a curated subset of those tokens as ergonomic utility class
 * names.  This gives us runtime flexibility **and** compile-time safety.
 */
const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                "primary-hover": "var(--color-primary-hover)",

                secondary: "var(--color-secondary)",
                "secondary-hover": "var(--color-secondary-hover)",

                accent: "var(--color-accent)",
                "accent-hover": "var(--color-accent-hover)",

                light: "var(--color-light)",
                "light-hover": "var(--color-light-hover)",

                dark: "var(--color-dark)",
                "dark-hover": "var(--color-dark-hover)",
            },
            borderRadius: {
                DEFAULT: "var(--radius)",
            },
            backdropBlur: {
                DEFAULT: "var(--backdrop-blur)",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
            },
            animation: {
                "pulse-slow": "var(--animate-pulse-slow)",
                float: "var(--animate-float)",
            },
            height: {
                device: "var(--device-height)",
            },
        },
    },
    plugins: [],
};

export default config; 