import React, { useState, useEffect } from "react"
import { Theme } from "../types/theme"

type ThemeProviderType = {
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeProviderType | undefined>(
  undefined
)

function ThemeProvider(props: any) {
  const [theme, setThemeState] = useState<Theme>(Theme.light)

  function setTheme(t: Theme) {
    const themeName = Theme[t]
    localStorage.setItem("theme", themeName)
    setThemeState(t)
  }

  function toggleTheme() {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light)
    console.log(theme)
  }

  useEffect(
    function setThemeClass() {
      const html = document.querySelector("html")

      if (html) {
        const themes = Object.keys(Theme).filter(t => isNaN(Number(t)))
        for (const theme in themes) {
          html.classList.remove(Theme[theme])
        }

        html.classList.add(Theme[theme])
      }
    },
    [theme]
  )

  useEffect(function loadInitialTheme() {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      const themes = Object.keys(Theme).filter(t => isNaN(Number(t)))
      const isValid = themes.includes(storedTheme)
      if (isValid) {
        setTheme(Theme[storedTheme as keyof typeof Theme])
      }
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme }}
      {...props}
    />
  )
}

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

export { ThemeProvider }
export default useTheme
