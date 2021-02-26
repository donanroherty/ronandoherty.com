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
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            body: {
              textRendering: "optimizeLegibility",
            },
            color: theme("colors.body"),
            h1: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.heading"),
              fontSize: "1.3rem",
            },
            h2: {
              color: theme("colors.heading"),
              fontSize: "1.1rem",
            },
            h3: {
              color: theme("colors.heading"),
              fontSize: "1rem",
            },
            h4: {
              color: theme("colors.heading"),
              fontSize: ".9rem",
            },
            p: {
              fontFamily: "Open Sans",
            },
          },
        },
        dark: {
          css: {
            body: {
              textRendering: "optimizeLegibility",
            },
            color: theme("colorsDarkMode.body"),
            h1: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colorsDarkMode.heading"),
              fontSize: "1.3rem",
            },
            h2: {
              color: theme("colorsDarkMode.heading"),
              fontSize: "1.1rem",
            },
            h3: {
              color: theme("colorsDarkMode.heading"),
              fontSize: "1rem",
            },
            h4: {
              color: theme("colorsDarkMode.heading"),
              fontSize: ".9rem",
            },
            p: {
              fontFamily: "Open Sans",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
