import Link from "next/link"
import React from "react"
import Icon from "./Icon"
import useTheme from "./ThemeProvider"

function Header() {
  const { toggleTheme } = useTheme()

  return (
    <div className="flex-row pt-10">
      <div className="flex flex-row">
        <Link href="/">
          <a className="flex-auto -space-y-2">
            <div className="select-none font-heading font-extrabold text-4xl xs:text-5xl text-heading dark:text-headingDark">
              Ronan
            </div>
            <div className="select-none font-heading font-extrabold text-4xl xs:text-5xl text-heading dark:text-headingDark">
              Doherty
            </div>
          </a>
        </Link>

        <div className="flex flex-col justify-between justify-items-end pt-1">
          <div onClick={toggleTheme}>
            <Icon
              name="moon"
              className="w-4 xs:w-5 mx-auto box-content pt-1 pl-2 pb-1"
            />
          </div>
          <Link href="/about">
            <a>
              <Icon
                name="info"
                className="w-5 xs:w-6 box-content pt-1 pl-1 pb-1"
              />
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div className="font-heading font-semibold text-sm xs:text-lg text-subtitle dark:text-subtitleDark">
          Developer
        </div>
      </div>
    </div>
  )
}

export default Header
