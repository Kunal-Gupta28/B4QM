import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#251574",       // Logo 'B' Deep Indigo
          cyan: "#008AD8",         // Logo '4' Vibrant Cyan Blue
          cyanHover: "#0077BC",
          coral: "#FF4D5A",        // Logo 'Q' Crimson Coral
          coralHover: "#E63946",
          navy: "#180C4F",         // Executive Deep Purple Navy
          emerald: "#10B981",      // Verified Emerald
          surfaceLight: "#F8FAFC",
          surfaceMuted: "#F1F5F9",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(37, 21, 116, 0.06), 0 8px 24px rgba(37, 21, 116, 0.08)",
        glow: "0 0 25px rgba(0, 138, 216, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
