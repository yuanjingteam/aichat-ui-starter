import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("@aichat-ui/react/tailwindcss"),
    require("@aichat-ui/react-markdown/tailwindcss"),
  ],
} satisfies Config;

export default config;
