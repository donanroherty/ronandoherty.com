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

  const fontSize = vertical ? "text-xs" : "text-s"

  return (
    <div className={`flex ${flexParams}`}>
      <div
        className={`${fontSize} text-center text-subtitle dark:text-subtitleDark transition-colors duration-500 font-sans font-extrabold`}
      >
        {day}
        {vertical ? <br /> : <>&nbsp;</>}
        {month}
        {vertical ? <br /> : <>&nbsp;</>}
        {year}
      </div>
    </div>
  )
}
