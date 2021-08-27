const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "715px",
        md: "843px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "4rem",
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        postList: "repeat(auto-fit, minmax(240px, 1fr))",
        postListItemSmall: "1fr auto",
      },
      backgroundColor: "bg-green-700",
      fontFamily: {
        title: ["Montserrat"],
        sans: ["Open Sans"],
        serif: ["Charter"],
        mono: ["dm"],
      },
      fontSize: {
        xl: ["1.25rem", "1.5rem"],
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
            ...codeBlockStyle(theme),
          },
        },
        sm: { css: { ...codeBlockStyle(theme) } },
        lg: { css: { ...codeBlockStyle(theme) } },
        xl: { css: { ...codeBlockStyle(theme) } },
        "2xl": { css: { ...codeBlockStyle(theme) } },
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

const codeBlockStyle = (theme) => ({
  pre: {
    fontSize: "0.8rem",
  },
  ":not(pre) > code": {
    backgroundColor: "#fafafa",
    padding: ".2em",
    fontWeight: "900",
    borderColor: "#ededed",
    borderWidth: ".05em",
    borderStyle: "solid",
    fontFamily: theme("fontFamily.mono"),
  },
  "code::before": {
    content: "none",
  },
  "code::after": {
    content: "none",
  },
})
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
    fontSize: theme("fontSize"),
  },
  code: {
    fontFamily: theme("fontFamily.mono"),
  },
})
