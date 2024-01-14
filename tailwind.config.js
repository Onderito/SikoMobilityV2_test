/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class", // Ne pas oublier d'ajouter le mode darkMode à class pour profiter de l'avantage dark de tailwind
};
