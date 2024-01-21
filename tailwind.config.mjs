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
        slash: "9.5rem",
        bigSlash: "19rem",
      },
      colors: {
        theme: {
          text: "hsl(var(--color-text) / <alpha-value>)",
          background: "hsl(var(--color-background) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
