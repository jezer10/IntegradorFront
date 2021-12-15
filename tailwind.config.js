const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ["'Roboto'", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      height: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",

        "9/10": "90%",
      },
      colors: {
        "primary-dark": "#4447A5",
        primary: "#575CE5",
        "primary-light": "#6C63FF",
        danger: "#FA5959",
        "danger-dark": "#E45A5A",
        success: "#5AE492",
        secondary: "#ED8B52",
        warning: "#E4C65A",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "active","checked"],
      opacity: ["active", "disabled"],
      textColor: ["active"],
      animation: ["active"],
    },
  },
  plugins: [],
};
