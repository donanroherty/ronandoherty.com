import React from "react"
import PostType from "../types/post"
import Link from "next/link"
import VerticalDateWidget from "./VerticalDateWidget"

type PostListItemProps = {
  post: PostType
}

function PostListItem({ post }: PostListItemProps) {
  return (
    <li className="w-full">
      <div className="flex flex-row space-x-4">
        <div className="my-auto">
          <VerticalDateWidget date={new Date(post.date)} />
        </div>

        <div>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
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
