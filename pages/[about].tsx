import React from "react"
import { getFilenameFromSlug, getPostByFilename } from "../lib/api"
import { GetStaticPathsResult, GetStaticProps } from "next"
import PostType from "../types/post"
import { Params } from "next/dist/next-server/server/router"
import PostPage from "../components/PostPage"

export default PostPage

export async function getStaticPaths<GetStaticPaths>() {
  const about = getPostByFilename("about.md", ["slug"])
  const params = [
    {
      params: {
        about: about.slug,
      },
    },
  ]
  return {
    paths: params,
    fallback: false,
  }
}

export async function getStaticProps<GetStaticProps>({ params }: Params) {
  const fileName = getFilenameFromSlug(params.about)
  const post = fileName
    ? getPostByFilename(fileName, ["title", "date", "content", "description"])
    : undefined

  return {
    props: {
      post: post,
    },
  }
}
