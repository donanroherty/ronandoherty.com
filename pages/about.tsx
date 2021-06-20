import React from "react"
import { getFileBySlug } from "../lib/api"
import { GetStaticProps } from "next"
import { Params } from "next/dist/next-server/server/router"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

import PostPage from "../components/PostPage"
import { PostHeaderData } from "../types/post"
import MDXComponents from "../components/MDXComponents"
import ContactForm from "../components/ContactForm"

type AboutPropTypes = {
  mdxSource: MDXRemoteSerializeResult
  slug: string
  frontmatter: PostHeaderData
}

export default function About({ mdxSource, slug, frontmatter }: AboutPropTypes) {
  return (
    <div className="space-y-6">
      <PostPage frontmatter={frontmatter} hideDate>
        <MDXRemote {...mdxSource} components={MDXComponents} />

        {/* {content} */}
      </PostPage>
      <ContactForm />
    </div>
  )
}

export async function getStaticProps<GetStaticProps>({ params }: Params) {
  const postData = await getFileBySlug("about", "pages")
  return { props: postData }
}
