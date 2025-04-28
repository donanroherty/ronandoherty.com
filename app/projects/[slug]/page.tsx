import React from "react"
import PostPage from "../../../components/PostPage";
import { getAllPostFrontmatter, readMdx } from "../../../lib/readMdx";

type PageProps = {
  params: { slug: string; };
}

export default async function Page(props: PageProps) {
  const { content, frontmatter } = await readMdx(props.params.slug, "projects")

  return (
    <PostPage frontmatter={frontmatter}>
      {content}
    </PostPage>
  )
}


export async function generateStaticParams() {
  const postData = (await getAllPostFrontmatter("projects")).filter((post) => post.frontmatter.published)
  const params = postData.map((frontmatter) => ({
    params: {
      slug: frontmatter.slug,
    },
  }))
  return params
}
