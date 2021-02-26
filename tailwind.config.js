const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "280px",
        // "dark-mode": { raw: "(prefers-color-scheme: dark)" },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "4rem",
        },
      },
      backgroundColor: "bg-green-700",
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

        primaryDark: colors.gray[200],
        subtitleDark: colors.gray[200],
        headingDark: colors.gray[200],
        bodyDark: colors.gray[200],
      },

      typography: theme => ({
        DEFAULT: {
          css: {
            body: {
              textRendering: "optimizeLegibility",
            },
            p: {
              fontFamily: "Open Sans",
              color: theme("colors.body"),
            },
            h1: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.heading"),
              fontSize: "1.3rem",
            },
            h2: {
              fontFamily: theme("fontFamily.heading"),

              color: theme("colors.heading"),
              fontSize: "1.1rem",
            },
            h3: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.heading"),
              fontSize: "1rem",
            },
            h4: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.heading"),
              fontSize: ".9rem",
            },
          },
        },
        dark: {
          css: {
            body: {
              textRendering: "optimizeLegibility",
            },
            p: {
              fontFamily: "Open Sans",
              color: theme("colors.bodyDark"),
            },
            h1: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.headingDark"),
              fontSize: "1.3rem",
            },
            h2: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.headingDark"),
              fontSize: "1.1rem",
            },
            h3: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.headingDark"),
              fontSize: "1rem",
            },
            h4: {
              fontFamily: theme("fontFamily.heading"),
              color: theme("colors.headingDark"),
              fontSize: ".9rem",
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
