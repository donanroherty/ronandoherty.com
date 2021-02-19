import React from "react"
import PostType from "../types/post"
import PostListItem from "./PostListItem"

type PostListProps = {
  posts: PostType[]
}

function PostList({ posts }: PostListProps) {
  return (
    <ul className="space-y-10">
      {posts.map(post => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostList
