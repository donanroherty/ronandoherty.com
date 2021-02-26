import React from "react"
import { PostHeaderData } from "../types/post"
import Link from "next/link"
import HorizontalDateWidget from "./HorizontalDateWidget"

type PostListItemProps = {
  slug: string
  post: PostHeaderData
}

function PostListItem({ post, slug }: PostListItemProps) {
  return (
    <li className="w-full">
      <div className="flex flex-row space-x-4">
        <div className="my-auto">
          <HorizontalDateWidget date={post.date} orient="vertical" />
        </div>

        <div>
          <Link href={`/blog/${encodeURIComponent(slug)}`}>
            <a>
              <h1 className="text-lg xs:text-xl text-heading font-extrabold font-heading">
                {post.title}
              </h1>
            </a>
          </Link>

          <p className="font-body text-base xs:text-lg text-subtitle">
            {post.description}
          </p>
        </div>
      </div>
    </li>
  )
}

export default PostListItem
