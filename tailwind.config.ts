import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#c0000a",
          dim: "#8a0007",
        },
        surface: "#0c0c0c",
        "surface-2": "#141414",
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
