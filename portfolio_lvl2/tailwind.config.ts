import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'darkMint': '#07271a',
        'mintCream': '#e1f4ed',
      },

      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
  
  darkMode: 'class',
};
export default config;
