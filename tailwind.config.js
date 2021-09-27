const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
    },
    extend: {},
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [],
};
