import PostList from "@/components/PostList";
import PostListItem from "@/components/PostListItem";
import { ContentType, getAllPostFrontmatter } from "@/lib/readMdx";
import React from "react"

export default async function Page() {
  const getAllItemsOfType = async (contentType: ContentType) => {
    const postData = await getAllPostFrontmatter(contentType)
    return postData.filter((post) => post.frontmatter.published && post.frontmatter.listed)
  }

  const posts = await getAllItemsOfType("blog")
  const projects = await getAllItemsOfType("projects")

  return (
    <div>

      <PostList
        title="Posts"
      // itemMax={3}
      >
        {posts.map((p) => (
          <PostListItem
            key={p.slug}
            slug={`blog/${p.slug}`}
            title={p.frontmatter.title}
            date={p.frontmatter.date}
            description={p.frontmatter.description}
            showDate
          />
        ))}
      </PostList>

      {/* spacer */}
      <div className="w-full h-10"></div>

      <PostList
        title="Projects"
        multiCol
      // itemMax={2}
      >
        {projects.map((p) => (
          <PostListItem
            key={p.slug}
            slug={`projects/${p.slug}`}
            title={p.frontmatter.title}
            date={p.frontmatter.date}
            description={p.frontmatter.description}
            thumbnail={p.frontmatter.thumbnail}
            showDescription
          // showThumbnail
          />
        ))}
      </PostList>

      <footer></footer>
    </div>
  )
}
