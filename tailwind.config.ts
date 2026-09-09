import type { Config } from "tailwindcss";

// Palette lifted from the hero photo: black, dusk navy, one electric blue.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050609",
        navy: "#0a1235",
        dusk: "#131b52",
        blue: "#15267d",
        ice: "#7f90d6",
        white: "#f2f3f7",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
