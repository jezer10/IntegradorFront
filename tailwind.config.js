const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ["'Roboto'",...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor:['checked']
    },
  },
  plugins: [],
};
