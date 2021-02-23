import React from "react"
import PostType from "../types/post"
import PostContent from "./PostContent"
import PostPageTitleBar from "./PostPageTitleBar"

type PostProps = {
  post: PostType
}

export default function PostPage({ post }: PostProps) {
  if (!post.title || !post.content) return null

  return (
    <div className="space-y-6 sm:space-y-12">
      <PostPageTitleBar titleText={post.title} date={post.date} />
      <PostContent markdown={post.content} />
    </div>
  )
}
