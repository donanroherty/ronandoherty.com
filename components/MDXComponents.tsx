import Link from "next/link"
import NextImage, { ImageProps } from "next/image"
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"

function CustomLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href || ""}>
        <a {...props} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Image(props: ImageProps) {
  return (
    <NextImage
      className="rounded-tl-sm rounded-bl-sm rounded-tr-3xl rounded-br-3xl"
      {...props}
    />
  )
}

const MDXComponents = {
  a: CustomLink,
  Image,
}

export default MDXComponents
