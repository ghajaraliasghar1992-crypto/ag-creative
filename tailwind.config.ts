import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#07090F"
      },
      boxShadow: {
        glow: "0 10px 50px rgba(105, 118, 255, 0.25)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top right, rgba(123, 97, 255, 0.35), transparent 40%), radial-gradient(circle at 20% 20%, rgba(30, 144, 255, 0.2), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
