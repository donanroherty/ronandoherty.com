import React from "react"
import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"
import CustomLink from "../components/CustomLink"

type PostContentProps = {
  markdown: string
}

export default function PostBody({ markdown }: PostContentProps) {
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: CustomLink,
      },
    })
    .processSync(markdown).result as JSX.Element
  return <article className="prose lg:prose-xl">{content}</article>
}
