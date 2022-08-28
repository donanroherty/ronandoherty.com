import React from "react"
import { PostHeaderData } from "../types/post"
import Link from "next/link"
import NextImage from "next/image"
import DateWidget from "./DateWidget"

type PostListItemProps = {
  slug: string
  title: string
  date: string
  description: string
  thumbnail?: string | null
  showThumbnail?: boolean
  showDate?: boolean
  showDescription?: boolean
}

function PostListItem({
  title,
  date,
  description,
  thumbnail,
  slug,
  showThumbnail,
  showDate,
  showDescription,
}: PostListItemProps) {
  const willShowTN = showThumbnail && thumbnail

  return (
    <div className="w-full">
      <div className="flex flex-row space-x-4">
        {showDate && (
          <div className="my-auto">
            <DateWidget date={date} vertical />
          </div>
        )}

        <Link href={`/${slug}`}>
          <a className={`flex justify-between w-full gap-4`}>
            {willShowTN && (
              <div
                className={`
                relative order-last w-20 h-20 my-auto rounded-md overflow-hidden
              `}
              >
                <NextImage
                  className="filter grayscale"
                  src={thumbnail}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
            )}

            <div className="flex flex-col">
              <div className="my-auto font-sans text-base font-bold transition-colors duration-500 sm:my-0 xs:text-xl text-heading dark:text-headingDark">
                {title}
              </div>

              <div
                className={`
                 font-sans text-base transition-colors duration-500 
                sm:block xs:text-lg text-subtitle dark:text-subtitleDark
                ${showDescription && "hidden sm:block"}
                `}
              >
                {description}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostListItem
