import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        card: "#0D0D0D",
        surface: "#111111",
        border: "#202020",
        primary: {
          DEFAULT: "#FFB020",
          hover: "#FFC44D",
        },
        success: "#28D17C",
        warning: "#FFB020",
        error: "#FF5D5D",
        text: "#F5F5F5",
        muted: "#9A9A9A",
      },
    },
  },
  plugins: [],
};

export default config;
