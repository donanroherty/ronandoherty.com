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
              <div className="text-lg xs:text-xl text-heading dark:text-headingDark transition-colors duration-500 font-extrabold font-heading">
                {post.title}
              </div>
            </a>
          </Link>

          <div className="font-body text-base xs:text-lg text-subtitle dark:text-subtitleDark transition-colors duration-500">
            {post.description}
          </div>
        </div>
      </div>
    </li>
  )
}

export default PostListItem
