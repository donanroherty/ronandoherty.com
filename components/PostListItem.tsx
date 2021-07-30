import React from "react"
import { PostHeaderData } from "../types/post"
import Link from "next/link"
import NextImage, { ImageProps } from "next/image"
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

        <Link href={slug}>
          <a className="w-full">
            {showThumbnail && post.thumbnail && (
              <div className="relative w-full h-36">
                <NextImage
                  className="filter grayscale "
                  src={post.thumbnail}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
            )}

            <div className="font-sans text-lg font-extrabold transition-colors duration-500 xs:text-xl text-heading dark:text-headingDark">
              {post.title}
            </div>

            <div className="font-sans text-base transition-colors duration-500 xs:text-lg text-subtitle dark:text-subtitleDark">
              {post.description}
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostListItem
