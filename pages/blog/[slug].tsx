import React from "react"
import {
  getAllPosts,
  getFilenameFromSlug,
  getPostByFilename,
} from "../../lib/api"
import { GetStaticPathsResult, GetStaticProps } from "next"
import PostType from "../../types/post"
import { Params } from "next/dist/next-server/server/router"

import PostContent from "../../components/PostContent"
import PostPageTitleBar from "../../components/PostPageTitleBar"

type PostProps = {
  post: PostType
}

function PostPage({ post }: PostProps) {
  if (!post.title || !post.content) return null

  return (
    <div className="space-y-6 sm:space-y-12">
      <PostPageTitleBar titleText={post.title} date={post.date} />
      <PostContent markdown={post.content} />
    </div>
  )
}

export async function getStaticPaths<GetStaticPaths>() {
  const params = getAllPosts(["slug"]).map(post => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths: params,
    fallback: false,
  }
}

export async function getStaticProps<GetStaticProps>({ params }: Params) {
  const fileName = getFilenameFromSlug(params.slug)
  const post = fileName
    ? getPostByFilename(fileName, ["title", "date", "content", "description"])
    : undefined

  return {
    props: {
      post: post,
    },
  }
}

export default PostPage
