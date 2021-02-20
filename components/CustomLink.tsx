import React from "react"
import Link from "next/link"

type CustomLinkProps = {
  children: JSX.Element | JSX.Element[]
  href: string
}

export default function CustomLink({ children, href }: CustomLinkProps) {
  const isInternalHref = href.startsWith("/") || href === ""

  return isInternalHref ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
