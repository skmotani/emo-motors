/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#D11F2F",
        dark: "#303B47",
        background: "#F1F2F3",
        surface: "#FFFFFF",
        text: "#4B5563",
        muted: "#6B7280",
        border: "#D9DEE3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      lineHeight: {
        tight: "1.05",
      },
    },
  },
  plugins: [],
};
