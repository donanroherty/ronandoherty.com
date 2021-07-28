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
        sans: ["Open Sans"],
        serif: ["Charter"],
        mono: ["DankMono"],
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
            p: { color: theme("colors.body"), fontFamily: theme("fontFamily.serif") },
            h1: h(theme),
            h2: h(theme),
            h3: h(theme),
            h4: h(theme),
            ...codeBlockStyle,
          },
        },
        sm: { css: { ...codeBlockStyle } },
        lg: { css: { ...codeBlockStyle } },
        xl: { css: { ...codeBlockStyle } },
        "2xl": { css: { ...codeBlockStyle } },
        dark: {
          css: {
            ...typographyThemeCommon(theme),
            p: { color: theme("colors.bodyDark"), fontFamily: theme("fontFamily.serif") },
            h1: hDark(theme),
            h2: hDark(theme),
            h3: hDark(theme),
            h4: hDark(theme),
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

const codeBlockStyle = {
  pre: {
    borderTopLeftRadius: "0.125em",
    borderTopRightRadius: "1.5em",
    borderBottomRightRadius: "1.5em",
    borderBottomLeftRadius: "0.125em",
  },
  code: {
    background: "#f5f7ff",
    backgroundColor: "rgb(245, 247, 255)",
    padding: ".2em",
    borderTopLeftRadius: "0.125em",
    borderTopRightRadius: "0.5em",
    borderBottomRightRadius: "0.5em",
    borderBottomLeftRadius: "0.125em",
  },
  "code::before": {
    content: "none",
  },
  "code::after": {
    content: "none",
  },
}
const h = (theme) => ({
  fontWeight: "600",
  fontFamily: theme("fontFamily.sans"),
  color: theme("colors.heading"),
})

const hDark = (theme) => ({
  fontWeight: "600",
  fontFamily: theme("fontFamily.sans"),
  color: theme("colors.headingDark"),
})

const typographyThemeCommon = (theme) => ({
  fontFamily: theme("fontFamily.serif"),
  body: {
    textRendering: "optimizeLegibility",
    fontWeight: "normal",
  },
})
