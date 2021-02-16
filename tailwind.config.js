const colors = require("tailwindcss/colors")

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Roboto", "system-ui"],
            mono: ["DankMono"],
            heading: ["Montserrat"]
        },
        colors: {
            primary: colors.gray[500],
            subtitle: "#545454",
            heading: "#3B3B3B",
            text: colors.gray[300],
            rose: colors.rose[500],
            lime: colors.lime[500]
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
}
