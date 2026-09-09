import type { Config } from "tailwindcss";

// Palette pulled from the band's own material: the dusk-blue hero photo,
// the red star on the wordmark, the seafoam Strat, the parchment tour poster.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07070c",        // page base, near-black with a blue cast
        dusk: "#141a3a",       // hero shadow / indigo
        paper: "#e9e2d1",      // aged poster cream
        "paper-dim": "#bfb7a3",
        star: "#e0391e",       // wordmark red
        jade: "#4fa79a",       // the guitar
        bone: "#f4f1ea",       // type on dark
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { widest2: "0.28em" },
    },
  },
  plugins: [],
};
export default config;
