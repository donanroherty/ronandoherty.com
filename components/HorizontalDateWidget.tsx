import React from "react"

type HorizontalDateWidgetProps = {
  date: string
}

export default function HorizontalDateWidget({
  date,
}: HorizontalDateWidgetProps) {
  const dateObj = new Date(date)
  const day = dateObj.toLocaleDateString("en", { day: "numeric" })
  const month = dateObj.toLocaleDateString("en", { month: "short" })
  const year = dateObj.getFullYear().toString().substr(2, 2)

  return (
    <div className="flex flex-row space-x-1">
      <div className="text-xs text-subtitle font-body font-extrabold">
        {day}
      </div>
      <div className="text-xs text-subtitle font-body font-extrabold">
        {month}
      </div>
      <div className="text-xs text-subtitle font-body font-extrabold">
        {year}
      </div>
    </div>
  )
}
