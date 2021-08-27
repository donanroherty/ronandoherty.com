import React from "react"
import { PostHeaderData } from "../types/post"
import Link from "next/link"
import NextImage from "next/image"
import DateWidget from "./DateWidget"

type PostListItemProps = {
  slug: string
  post: PostHeaderData
  showThumbnail?: boolean
  showDate?: boolean
  itemType: "listing" | "tile"
}

function PostListItem({
  post,
  slug,
  showThumbnail = false,
  showDate = false,
  itemType,
}: PostListItemProps) {
  const willShowTN = showThumbnail && post.thumbnail

  return (
    <div className="w-full">
      <div className="flex flex-row space-x-4">
        {showDate && (
          <div className="my-auto">
            <DateWidget date={post.date} vertical />
          </div>
        )}

        <Link href={`/${slug}`}>
          <a
            className={`grid w-full grid-cols-postListItemSmall gap-4 
            sm:grid-cols-1 ${willShowTN && "sm:grid-rows-2"}`}
          >
            {willShowTN && (
              <div
                className={`
                relative order-last w-20 h-20 my-auto rounded-md overflow-hidden
                sm:order-none sm:h-36 sm:w-full sm:mx-auto
              `}
              >
                <NextImage
                  className="filter grayscale"
                  src={post.thumbnail}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
            )}

            <div className="flex flex-col">
              <div className="my-auto font-sans text-base font-bold transition-colors duration-500 sm:my-0 xs:text-xl text-heading dark:text-headingDark">
                {post.title}
              </div>

              <div
                className={`
                 font-serif text-base transition-colors duration-500 
                sm:block xs:text-lg text-subtitle dark:text-subtitleDark
                ${itemType === "listing" && "hidden sm:block"}
                `}
              >
                {post.description}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostListItem
