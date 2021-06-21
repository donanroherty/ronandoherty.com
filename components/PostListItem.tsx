import React from "react"
import { PostHeaderData } from "../types/post"
import Link from "next/link"
import DateWidget from "./DateWidget"

type PostListItemProps = {
  slug: string
  post: PostHeaderData
}

function PostListItem({ post, slug }: PostListItemProps) {
  return (
    <li className="w-full">
      <div className="flex flex-row space-x-4">
        <div className="my-auto">
          <DateWidget date={post.date} vertical />
        </div>

        <div>
          <Link href={`/blog/${encodeURIComponent(slug)}`}>
            <a>
              <div className="text-lg font-extrabold transition-colors duration-500 xs:text-xl text-heading dark:text-headingDark font-heading">
                {post.title}
              </div>
            </a>
          </Link>

          <div className="text-base transition-colors duration-500  font-body xs:text-lg text-subtitle dark:text-subtitleDark">
            {post.description}
          </div>
        </div>
      </div>
    </li>
  )
}

export default PostListItem
