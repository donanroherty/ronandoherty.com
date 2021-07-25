import Link from "next/link"
import React from "react"
import Icon from "./Icon"
import useTheme from "../state/ThemeProvider"

function Header() {
  const { toggleTheme } = useTheme()

  return (
    <div className="pt-10">
      <div className="flex flex-row justify-between">
        {/* Brand */}
        <div>
          <Link href="/">
            <a className="flex-auto -space-y-2">
              <div className="text-4xl font-extrabold transition-colors duration-500 select-none font-title xs:text-5xl text-title dark:text-titleDark">
                Ronan
              </div>

              <div className="text-4xl font-extrabold transition-colors duration-500 select-none font-title xs:text-5xl text-title dark:text-titleDark">
                Doherty
              </div>
            </a>
          </Link>
        </div>
        {/* Buttons */}
        <div className="flex flex-col justify-between h-full pt-1 mt-auto justify-items-end">
          {/* <div onClick={toggleTheme}>
            <Icon
              name="moon"
              className="box-content w-4 pt-1 pb-1 pl-2 mx-auto xs:w-5 "
            />
          </div> */}
          <Link href="/about">
            <a>
              <Icon name="info" className="box-content w-5 pt-1 pb-1 pl-1 xs:w-6" />
            </a>
          </Link>
        </div>
      </div>

      {/* Developer */}
      <div>
        <div className="font-sans text-sm font-semibold transition-colors duration-500 xs:text-lg text-subtitle dark:text-subtitleDark">
          Software Dev
        </div>
      </div>
    </div>
  )
}

export default Header
