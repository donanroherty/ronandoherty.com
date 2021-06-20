import React from "react"
import { getFileBySlug, getFiles } from "../../lib/api"
import { GetStaticPathsResult, GetStaticProps } from "next"
import { Params } from "next/dist/next-server/server/router"
import PostPage from "../../components/PostPage"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

import { PostHeaderData } from "../../types/post"
import MDXComponents from "../../components/MDXComponents"

type BlogPropTypes = {
  mdxSource: MDXRemoteSerializeResult
  slug: string
  frontmatter: PostHeaderData
}

export default function Blog({ mdxSource, slug, frontmatter }: BlogPropTypes) {
  return (
    <PostPage frontmatter={frontmatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </PostPage>
  )
}

export async function getStaticPaths<GetStaticPaths>() {
  const files = getFiles("blog")
  const params = files.map((file) => ({
    params: {
      slug: file.replace(/\.mdx$/, ""),
    },
  }))

  return {
    paths: params,
    fallback: false,
  }
}

export async function getStaticProps<GetStaticProps>({ params }: Params) {
  const post = await getFileBySlug(params.slug, "blog")
  return { props: post }
}
