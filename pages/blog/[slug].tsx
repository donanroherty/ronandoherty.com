import React from "react"
import { getFileBySlug, getFiles } from "../../lib/api"
import { GetStaticPathsResult, GetStaticProps } from "next"
import { Params } from "next/dist/next-server/server/router"
import PostPage from "../../components/PostPage"
import hydrate from "next-mdx-remote/hydrate"
import { MdxRemote } from "next-mdx-remote/types"
import { PostHeaderData } from "../../types/post"
import MDXComponents from "../../components/MDXComponents"

type BlogPropTypes = {
  mdxSource: MdxRemote.Source
  slug: string
  frontmatter: PostHeaderData
}

export default function Blog({ mdxSource, slug, frontmatter }: BlogPropTypes) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })
  return <PostPage frontmatter={frontmatter}>{content}</PostPage>
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
