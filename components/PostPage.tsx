import React from "react"
import Head from "next/head"
import { PostHeaderData } from "../types/post"
import DateWidget from "./DateWidget"

type PostProps = {
  frontmatter: PostHeaderData
  children: React.ReactNode
  hideDate?: boolean
}

export default function PostPage({ hideDate, frontmatter, children }: PostProps) {
  return (
    <div className="space-y-6 sm:space-y-12">
      <Head>
        <title>{frontmatter.title} - RonanDoherty.com</title>
      </Head>
      <div className="space-y-1">
        <div className="text-3xl font-bold transition-colors duration-500 text-heading dark:text-headingDark">
          {frontmatter.title}
        </div>
        <div className="font-serif text-base transition-colors duration-500 xs:text-lg text-subtitle dark:text-subtitleDark">
          {frontmatter.description}
        </div>
        {hideDate !== true && <DateWidget date={frontmatter.date} vertical={false} />}
      </div>

      <article className="prose break-words transition-colors duration-500 sm:prose-lg dark:prose-dark">
        {children}
      </article>
    </div>
  )
}
