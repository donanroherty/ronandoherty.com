import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from "react"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Image: (props: ImageProps) => (<Image className="rounded-md" {...props} />),
    CustomLink,
    YouTube,
    BoidsElement,
    ...components,
  }
}


function CustomLink(
  props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
) {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href || ""} {...props} />
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
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
  React.useEffect(() => import("./web-components/boids-element.mjs"), [])
  // @ts-ignore
  return <boids-element {...props} />
}
