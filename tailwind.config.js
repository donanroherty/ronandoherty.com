const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "715px",
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
        heading: "#3B3B3B",
        subtitle: "#545454",
        body: "#3C3C3C",

        headingDark: colors.gray[300],
        subtitleDark: colors.gray[500],
        bodyDark: colors.gray[400],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            ...typographyThemeLight(theme),
            ...typographyThemeCommon(theme),
          },
        },
        dark: {
          css: {
            ...typographyThemeDark(theme),
            ...typographyThemeCommon(theme),
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

function typographyThemeCommon(theme) {
  return {
    body: {
      textRendering: "optimizeLegibility",
    },
    p: {
      fontFamily: "Open Sans",
    },
    h1: {
      fontFamily: theme("fontFamily.heading"),
      fontSize: "1.3rem",
    },
    h2: {
      fontFamily: theme("fontFamily.heading"),
      fontSize: "1.1rem",
    },
    h3: {
      fontFamily: theme("fontFamily.heading"),
      fontSize: "1rem",
    },
    h4: {
      fontFamily: theme("fontFamily.heading"),
      fontSize: ".9rem",
    },
  }
}

function typographyThemeLight(theme) {
  return {
    p: { color: theme("colors.body") },
    h1: { color: theme("colors.heading") },
    h2: { color: theme("colors.heading") },
    h3: { color: theme("colors.heading") },
    h4: { color: theme("colors.heading") },
  }
}

function typographyThemeDark(theme) {
  return {
    p: { color: theme("colors.bodyDark") },
    h1: { color: theme("colors.headingDark") },
    h2: { color: theme("colors.headingDark") },
    h3: { color: theme("colors.headingDark") },
    h4: { color: theme("colors.headingDark") },
  }
}
