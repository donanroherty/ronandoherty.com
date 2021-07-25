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
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      backgroundColor: "bg-green-700",
      fontFamily: {
        title: ["Montserrat"],
        heading: ["Open Sans"],
        body: ["Charter"],
        mono: ["DankMono"],
        subtitle: ["Charter"],
      },
      colors: {
        title: "#484848",
        heading: "#505050",
        subtitle: "#646464",
        body: "#3C3C3C",
        error: colors.red[600],

        titleDark: colors.gray[300],
        headingDark: colors.gray[300],
        subtitleDark: colors.gray[500],
        bodyDark: colors.gray[400],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ...typographyThemeCommon(theme),
            p: { color: theme("colors.body"), fontFamily: theme("fontFamily.body") },
            h1: { color: theme("colors.heading"), fontFamily: theme("fontFamily.heading") },
            h2: { color: theme("colors.heading"), fontFamily: theme("fontFamily.heading") },
            h3: { color: theme("colors.heading"), fontFamily: theme("fontFamily.heading") },
            h4: { color: theme("colors.heading"), fontFamily: theme("fontFamily.heading") },
          },
        },
        dark: {
          css: {
            ...typographyThemeCommon(theme),
            p: { color: theme("colors.bodyDark"), fontFamily: theme("fontFamily.body") },
            h1: { color: theme("colors.headingDark"), fontFamily: theme("fontFamily.heading") },
            h2: { color: theme("colors.headingDark"), fontFamily: theme("fontFamily.heading") },
            h3: { color: theme("colors.headingDark"), fontFamily: theme("fontFamily.heading") },
            h4: { color: theme("colors.headingDark"), fontFamily: theme("fontFamily.heading") },
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
    fontFamily: theme("fontFamily.heading"),
    body: {
      textRendering: "optimizeLegibility",
      fontFamily: theme("fontFamily.body"),
      fontWeight: "normal",
    },
  }
}
