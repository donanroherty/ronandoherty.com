import React from "react"
import { PostHeaderData } from "../types/post"
import PostPageTitleBar from "./PostPageTitleBar"

type PostProps = {
  frontmatter: PostHeaderData
  children: React.ReactNode
}

export default function PostPage({ frontmatter, children }: PostProps) {
  return (
    <div className="space-y-6 sm:space-y-12">
      <PostPageTitleBar titleText={frontmatter.title} date={frontmatter.date} />
      <div className="prose dark:prose-dark lg:prose-xl">{children}</div>
    </div>
  )
}
