import React from "react"
import { getFileBySlug } from "../lib/api"
import { GetStaticProps } from "next"
import { Params } from "next/dist/next-server/server/router"
import hydrate from "next-mdx-remote/hydrate"
import { MdxRemote } from "next-mdx-remote/types"
import PostPage from "../components/PostPage"
import { PostHeaderData } from "../types/post"

type BlogPropTypes = {
  mdxSource: MdxRemote.Source
  slug: string
  frontmatter: PostHeaderData
}

export default function Blog({ mdxSource, slug, frontmatter }: BlogPropTypes) {
  const content = hydrate(mdxSource, {})
  return <PostPage frontmatter={frontmatter}>{content}</PostPage>
}

export async function getStaticProps<GetStaticProps>({ params }: Params) {
  const postData = await getFileBySlug("about", "pages")
  return { props: postData }
}
