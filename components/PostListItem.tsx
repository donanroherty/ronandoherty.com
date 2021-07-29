import React from "react"
import { PostHeaderData } from "../types/post"
import Link from "next/link"
import DateWidget from "./DateWidget"

type PostListItemProps = {
  slug: string
  post: PostHeaderData
  showThumbnail?: boolean
  showDate?: boolean
}

function PostListItem({ post, slug, showThumbnail = false, showDate = false }: PostListItemProps) {
  return (
    <div className="w-full">
      <div className="flex flex-row space-x-4">
        {showDate && (
          <div className="my-auto">
            <DateWidget date={post.date} vertical />
          </div>
        )}

        <div>
          <Link href={slug}>
            <a>
              <div className="font-sans text-lg font-extrabold transition-colors duration-500 xs:text-xl text-heading dark:text-headingDark">
                {post.title}
              </div>
            </a>
          </Link>

          <div className="font-sans text-base transition-colors duration-500 xs:text-lg text-subtitle dark:text-subtitleDark">
            {post.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostListItem
