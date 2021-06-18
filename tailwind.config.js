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
        heading: ["Montserrat"],
        body: ["Open Sans", "system-ui"],
        mono: ["DankMono"],
      },
      colors: {
        heading: "#484848",
        subtitle: "#646464",
        body: "#3C3C3C",
        error: colors.red[600],

        headingDark: colors.gray[300],
        subtitleDark: colors.gray[500],
        bodyDark: colors.gray[400],
      },
      typography: (theme) => ({
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
    fontFamily: theme("fontFamily.heading"),
    body: {
      textRendering: "optimizeLegibility",
      fontFamily: theme("fontFamily.body"),
    },
    p: {
      fontFamily: "Open Sans",
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
