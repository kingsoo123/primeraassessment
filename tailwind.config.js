/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Asap: ["Asap", "sans-serif"],
        Saira: ["Saira+Condensed", "serif"],
      },
    },
  },
  plugins: [],
};
