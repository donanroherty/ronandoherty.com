import React from "react"
import { getAllPostFrontmatter, getFileBySlug } from "../../lib/api"
import { GetStaticPropsContext } from "next"
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

export async function getStaticPaths() {
  const postData = getAllPostFrontmatter("projects").filter((post) => post.frontmatter.published)
  const params = postData.map((frontmatter) => ({
    params: {
      slug: frontmatter.slug,
    },
  }))

  return {
    paths: params,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = await getFileBySlug(params!.slug as string, "projects")
  return { props: post }
}
