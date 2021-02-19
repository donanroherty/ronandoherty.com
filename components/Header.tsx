import React from "react"
import Icon from "./Icon"

function Header() {
  return (
    <div className="flex-row pt-10">
      <div className="flex flex-row">
        <div className="flex-auto">
          <h1 className="font-heading font-extrabold text-3xl xs:text-5xl text-heading">
            Ronan
          </h1>
          <h1 className="font-heading font-extrabold text-3xl xs:text-5xl text-heading">
            Doherty
          </h1>
        </div>

        <div className="flex flex-col justify-between justify-items-end pt-1">
          <Icon
            name="moon"
            className="w-4 xs:w-5 mx-auto box-content pt-1 pl-2 pb-1 "
          />

          <Icon
            name="info"
            className="w-5 xs:w-6 box-content pt-1 pl-1 pb-1 "
          />
        </div>
      </div>
      <div>
        <h2 className="font-heading font-semibold text-sm xs:text-1xl text-subtitle">
          Developer
        </h2>
      </div>
    </div>
  )
}

export default Header
