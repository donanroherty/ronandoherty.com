type DateWidgetProps = {
  date: string
  vertical: boolean
}

export default function DateWidget({ date, vertical }: DateWidgetProps) {
  const dateObj = new Date(date)
  const day = dateObj.toLocaleDateString("en", { day: "numeric" })
  const month = dateObj.toLocaleDateString("en", { month: "short" })
  const year = dateObj.getFullYear().toString().substr(2, 2)

  const flexParams = vertical ? "flex-col" : "lex-row space-x-1"

  return (
    <div className={`flex ${flexParams}`}>
      <div
        className={`text-center text-xs text-subtitle dark:text-subtitleDark font-body font-extrabold`}
      >
        {day}
        {vertical && <br />}
        {month}
        {vertical && <br />}
        {year}
      </div>
    </div>
  )
}
