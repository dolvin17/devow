const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        chromate: ["var(--font-chromate)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
