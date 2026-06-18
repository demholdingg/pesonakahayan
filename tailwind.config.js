/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"], // Explicitly define barlow
        "barlow-condensed": ["var(--font-barlow-condensed)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#111111", // Charcoal Black
        },
        secondary: {
          DEFAULT: "#FACC15", // Construction Yellow
        },
        neutral: {
          dark: "#111111", // Charcoal Black
          light: "#F3F4F6", // Light Gray
        },
        background: {
          DEFAULT: "#FFFFFF", // Pure White
        },
      },
    },
  },
  plugins: [],
};
