import React from "react"
import PostPage from "../../../components/PostPage";
import { getAllPostFrontmatter, readMdx } from "../../../lib/readMdx";

type PageProps = {
  params: { slug: string; };
}

export default async function Page(props: PageProps) {
  const params = await props.params

  const { content, frontmatter } = await readMdx(params.slug, "blog")

  return (
    <PostPage frontmatter={frontmatter}>
      {content}
    </PostPage>
  )
}


export async function generateStaticParams() {
  const postData = (await getAllPostFrontmatter("blog")).filter((post) => post.frontmatter.published)
  const params = postData.map((frontmatter) => ({
    params: {
      slug: frontmatter.slug,
    },
  }))
  return params
}
