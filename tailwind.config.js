/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Asap", "sans-serif"],
        serif: ["Asap", "Saira Condensed", "serif"],
      },
    },
  },
  plugins: [],
};
