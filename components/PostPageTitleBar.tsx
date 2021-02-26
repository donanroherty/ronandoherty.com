import React, { ReactElement } from "react"
import HorizontalDateWidget from "./HorizontalDateWidget"

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
      <HorizontalDateWidget date={date} orient="horizontal" />
    </div>
  )
}
