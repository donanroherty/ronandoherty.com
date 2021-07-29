import React from "react"
import { PostHeaderData } from "../types/post"
import PostListItem from "./PostListItem"

type PostListProps = {
  title: string
  contentFolder: string
  itemMax?: number
  colsMax?: number
  itemType: "listing" | "tile"
  postsData: Array<{ slug: string; frontmatter: PostHeaderData }>
}

function PostList({
  postsData,
  title,
  contentFolder,
  itemMax,
  colsMax = 1,
  itemType,
}: PostListProps) {
  const data = itemMax ? postsData.slice(0, itemMax) : postsData

  const showDate = itemType === "listing"
  const showThumbnail = itemType === "tile"

  return (
    <div className="mt-10 ">
      <div className="w-full mb-6 font-sans text-xl font-extrabold transition-colors duration-500 xs:text-2xl text-heading dark:text-headingDark">
        {title}
      </div>
      <div className={`grid grid-cols-${colsMax} gap-6`}>
        {data.map((data) => (
          <PostListItem
            key={data.slug}
            slug={`${contentFolder}/${encodeURI(data.slug)}`}
            post={data.frontmatter}
            showDate={showDate}
            showThumbnail={showThumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default PostList
