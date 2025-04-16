import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme"); // Import defaultTheme

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        background: "#F8F8F8", // Light off-white
        foreground: "#111111", // Dark Gray/Black
        primary: {
          DEFAULT: "#C0A062", // Muted Gold
          foreground: "#111111", // Text on primary bg
        },
        secondary: {
          DEFAULT: "#A0A0A0", // Lighter Gray
          foreground: "#111111", // Text on secondary bg
        },
        muted: {
          DEFAULT: "#CCCCCC", // Lightest Gray
          foreground: "#222222", // Text on muted bg
        },
      },
      fontFamily: {
        // Add custom font families
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
