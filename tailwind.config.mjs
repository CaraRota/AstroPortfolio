/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                // Light mode
                primaryLight: "#ffffff",
                secondaryLight: "#f0f0f0",
                textLight: "#333333",

                // Dark mode
                primaryDark: "#1a1a1a",
                secondaryDark: "#333333",
                textDark: "#ffffff",
            },
            backgroundColor: {
                body: "var(--bg-color, #ffffff)", // Use CSS variable for dynamic background color
            },
        },
    },
    plugins: [],
};
