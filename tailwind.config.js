const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      heading: ["Montserrat"],
      body: ["Open Sans", "system-ui"],
      mono: ["DankMono"],
    },
    colors: {
      primary: colors.gray[500],
      subtitle: "#545454",
      heading: "#3B3B3B",
      body: "#3C3C3C",
      text: colors.gray[300],
      rose: colors.rose[500],
      lime: colors.lime[500],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
