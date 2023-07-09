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
        poppins: ["var(--font-poppins)"],
        // brunoAce: ["var(--font-bruno_ace)"],
        bruno: "'Bruno Ace', cursive;",
      },
      colors: {
        darkGrey: "#F5F6F6",
      },
    },
  },
  plugins: [],
};
