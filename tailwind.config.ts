import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FDF6EC",
        saffron: "#E8871E",
        gold: "#C9A84C",
        forest: "#3A5A40",
        offwhite: "#FAF7F0",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
