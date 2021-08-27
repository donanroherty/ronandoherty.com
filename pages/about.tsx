import React from "react"
import { getFileBySlug } from "../lib/api"
import { GetStaticProps } from "next"
import { Params } from "next/dist/server/router"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

import PostPage from "../components/PostPage"
import { PostHeaderData } from "../types/post"
import MDXComponents from "../components/MDXComponents"
import ContactForm from "../components/ContactForm"
import Icon from "../components/Icon"

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

      {/* Social links */}
      <div className="flex flex-row flex-wrap justify-between w-full gap-3 pt-2 pb-2 sm:pb-6 sm:pt-6">
        <a
          href="https://www.github.com/donanroherty"
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-row gap-2"
        >
          <Icon name="github" className="w-5 xs:w-6" />
          <div className="">github.com/donanroherty</div>
        </a>

        <a
          href="https://www.linkedin.com/in/ronan-doherty-dev"
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-row gap-2"
        >
          <Icon name="linkedin" className="w-5 xs:w-6" />
          <div className="">linkedin.com/in/ronan-doherty-dev</div>
        </a>
      </div>

      <div className="">
        <ContactForm />
      </div>
    </div>
  )
}

export async function getStaticProps<GetStaticProps>({ params }: Params) {
  const postData = await getFileBySlug("about", "pages")
  return { props: postData }
}
