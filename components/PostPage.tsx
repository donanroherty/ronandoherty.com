import React from "react"
import { PostHeaderData } from "../types/post"
import DateWidget from "./DateWidget"

type PostProps = {
  frontmatter: PostHeaderData
  children: React.ReactNode
  hideDate?: boolean
}

export default function PostPage({
  hideDate,
  frontmatter,
  children,
}: PostProps) {
  return (
    <div className="space-y-6 sm:space-y-12">
      <div className="space-y-1">
        <div className="text-3xl font-bold text-heading dark:text-headingDark transition-colors duration-500">
          {frontmatter.title}
        </div>
        {hideDate !== true && (
          <DateWidget date={frontmatter.date} vertical={false} />
        )}
      </div>

      <article className="prose dark:prose-dark transition-colors duration-500 lg:prose-xl">
        {children}
      </article>
    </div>
  )
}
