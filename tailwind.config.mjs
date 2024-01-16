/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        melodyLight: ["melody-light", "sans-serif"],
      },
      fontSize: {
        main: "1.2rem",
        xl: "2.5rem",
      },
      colors: {
        theme: {
          base: "hsl(var(--color-theme) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
