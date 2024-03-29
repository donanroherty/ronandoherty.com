import React from "react"
import Link from "next/link"
import NextImage, { ImageProps } from "next/image"
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"
import path from "path"

function CustomLink(
  props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
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
  return <NextImage className="rounded-md" {...props} />
}

type YouTubeProps = {
  videoID: string
  title?: string
  frameBorder?: string
  width?: string
  aspectRatio?: string
}
function YouTube(props: YouTubeProps) {
  const { videoID, title, frameBorder, width, aspectRatio } = props

  return (
    <iframe
      width={width ?? "100%"}
      src={`https://www.youtube.com/embed/${videoID}?rel=0&amp;showinfo=0`}
      title={title ?? "YouTube video player"}
      frameBorder={frameBorder ?? "0"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ aspectRatio: aspectRatio ?? "16/9" }}
    ></iframe>
  )
}

function BoidsElement(props: any) {
  // @ts-ignore
  React.useEffect(() => import("../web-components/boids-element.mjs"), [])
  return <boids-element {...props} />
}

const MDXComponents = {
  a: CustomLink,
  Image,
  YouTube,
  "boids-element": BoidsElement,
}

export default MDXComponents
