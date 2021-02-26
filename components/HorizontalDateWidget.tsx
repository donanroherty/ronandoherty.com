import React, { ReactNode } from "react"

type HorizontalDateWidgetProps = {
  date: string
  orient: "horizontal" | "vertical"
}

export default function HorizontalDateWidget({
  date,
  orient = "horizontal",
}: HorizontalDateWidgetProps) {
  const dateObj = new Date(date)
  const day = dateObj.toLocaleDateString("en", { day: "numeric" })
  const month = dateObj.toLocaleDateString("en", { month: "short" })
  const year = dateObj.getFullYear().toString().substr(2, 2)

  const flexParams = orient == "horizontal" ? "lex-row space-x-1" : "flex-col"

  return (
    <div className={`flex ${flexParams}`}>
      <div
        className={`text-center text-xs text-subtitle dark:text-headingDark font-body font-extrabold`}
      >
        {day} {month} {year}
      </div>
    </div>
  )
}
