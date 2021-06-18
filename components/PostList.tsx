import React from "react"
import { PostHeaderData } from "../types/post"
import PostListItem from "./PostListItem"

type PostListProps = {
  postsData: Array<{ slug: string; frontmatter: PostHeaderData }>
}

function PostList({ postsData }: PostListProps) {
  return (
    <div>
      <div className="w-full mb-6 text-xl font-extrabold transition-colors duration-500 xs:text-2xl text-heading dark:text-headingDark font-heading">
        Projects
      </div>
      <ul className="space-y-14">
        {postsData.map((data) => (
          <PostListItem key={data.slug} slug={data.slug} post={data.frontmatter} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
