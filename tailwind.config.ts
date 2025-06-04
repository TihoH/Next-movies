import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'baseGreen':'#15803D'
      },
          boxShadow: {
        'equal': '0 0 10px rgba(21, 128, 61, 1)',
      }
    },
  },
  plugins: [],
} satisfies Config;
