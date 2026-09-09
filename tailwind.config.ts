import type { Config } from "tailwindcss";

// Palette lifted from the hero photo: black, dusk navy, one electric blue.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050609",
        navy: "#0b1230",
        dusk: "#141d4a",
        blue: "#1f47ff",
        sky: "#9db4ff",
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
