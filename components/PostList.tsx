import React from "react"
import { PostHeaderData } from "../types/post"
import PostListItem from "./PostListItem"

type PostListProps = {
  postsData: Array<{ slug: string; frontmatter: PostHeaderData }>
}

function PostList({ postsData }: PostListProps) {
  return (
    <ul className="space-y-10">
      {postsData.map(data => (
        <PostListItem
          key={data.slug}
          slug={data.slug}
          post={data.frontmatter}
        />
      ))}
    </ul>
  )
}

export default PostList
