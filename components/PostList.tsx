import React from "react"
import { PostHeaderData } from "../types/post"
import PostListItem from "./PostListItem"

type PostListProps = {
  title: string
  contentFolder: string
  itemMax?: number
  itemType: "listing" | "tile"
  postsData: Array<{ slug: string; frontmatter: PostHeaderData }>
}

function PostList({ postsData, title, contentFolder, itemMax, itemType }: PostListProps) {
  const data = itemMax ? postsData.slice(0, itemMax) : postsData

  const showDate = itemType === "listing"
  const showThumbnail = itemType === "tile"
  const multiCol = itemType === "tile"

  return (
    <div>
      <div
        className={`w-full mb-3 font-sans text-2xl font-extrabold transition-colors duration-500 text-heading 
        xs:text-2xl dark:text-headingDark`}
      >
        {title}
      </div>
      <div className={`grid gap-6 ${multiCol && "grid-cols-postList"}  mt-6`}>
        {data.map((data) => (
          <PostListItem
            key={data.slug}
            slug={`${contentFolder}/${encodeURI(data.slug)}`}
            post={data.frontmatter}
            showDate={showDate}
            showThumbnail={showThumbnail}
            itemType={itemType}
          />
        ))}
      </div>

      {/* more */}
      {/* <div className="w-full h-8 p-6 font-serif font-bold text-center text-subtitle">More...</div> */}
    </div>
  )
}

export default PostList
