import React, { ReactElement } from "react"
import DateWidget from "./DateWidget"

interface Props {
  titleText: string
  date: string
}

export default function PostPageTitle({
  titleText,
  date,
}: Props): ReactElement {
  return (
    <div className="space-y-1">
      <div className="text-3xl font-bold text-heading dark:text-headingDark">
        {titleText}
      </div>
      <DateWidget date={date} vertical={false} />
    </div>
  )
}
