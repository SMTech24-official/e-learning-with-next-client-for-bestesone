import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7F56D9",
        "primary-light": "#F7F3FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        screens: {
          DEFAULT: "1200px",
        },
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
