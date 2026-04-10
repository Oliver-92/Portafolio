import type { Config } from "tailwindcss";

export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--primary-font)", "sans-serif"],
                mono: ["var(--secondary-font)", "monospace"],
            },
        },
    },
} satisfies Config;