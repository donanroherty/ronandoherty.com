import React from "react"
import { PostHeaderData } from "../types/post"
import PostListItem from "./PostListItem"

type PostListProps = {
  title: string
  contentFolder: string
  postsData: Array<{ slug: string; frontmatter: PostHeaderData }>
}

function PostList({ postsData, title, contentFolder }: PostListProps) {
  return (
    <div className="mt-10">
      <div className="w-full mb-6 font-sans text-xl font-extrabold transition-colors duration-500 xs:text-2xl text-heading dark:text-headingDark">
        {title}
      </div>
      <ul className="space-y-14">
        {postsData.map((data) => (
          <PostListItem
            key={data.slug}
            slug={`${contentFolder}/${encodeURI(data.slug)}`}
            post={data.frontmatter}
          />
        ))}
      </ul>
    </div>
  )
}

export default PostList
