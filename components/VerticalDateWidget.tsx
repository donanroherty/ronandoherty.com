import React from "react"

type VerticalDateWidgetProps = {
  date: Date
}

export default function VerticalDateWidget({ date }: VerticalDateWidgetProps) {
  const day = date.toLocaleDateString("en", { day: "numeric" })
  const month = date.toLocaleDateString("en", { month: "short" })
  const year = date.getFullYear().toString().substr(2, 2)

  return (
    <div className="flex flex-col">
      <div className="mx-auto text-xs text-subtitle font-body font-extrabold">
        {day}
      </div>
      <div className="mx-auto text-xs text-subtitle font-body font-extrabold">
        {month}
      </div>
      <div className="mx-auto text-xs text-subtitle font-body font-extrabold">
        {year}
      </div>
    </div>
  )
}
