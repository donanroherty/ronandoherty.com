import React from "react"
import {
  getAllPosts,
  getFilenameFromSlug,
  getPostByFilename,
} from "../../lib/api"
import { GetStaticPathsResult, GetStaticProps } from "next"
import PostType from "../../types/post"
import { Params } from "next/dist/next-server/server/router"
import PostPage from "../../components/PostPage"

export default PostPage

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
