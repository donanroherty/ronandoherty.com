import React from "react"
import { getFileBySlug } from "../lib/api"
import { GetStaticProps } from "next"
import { Params } from "next/dist/next-server/server/router"
import hydrate from "next-mdx-remote/hydrate"
import { MdxRemote } from "next-mdx-remote/types"
import PostPage from "../components/PostPage"
import { PostHeaderData } from "../types/post"
import MDXComponents from "../components/MDXComponents"

type AboutPropTypes = {
  mdxSource: MdxRemote.Source
  slug: string
  frontmatter: PostHeaderData
}

export default function About({
  mdxSource,
  slug,
  frontmatter,
}: AboutPropTypes) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })
  return (
    <PostPage frontmatter={frontmatter} hideDate>
      {content}
    </PostPage>
  )
}

export async function getStaticProps<GetStaticProps>({ params }: Params) {
  const postData = await getFileBySlug("about", "pages")
  return { props: postData }
}
