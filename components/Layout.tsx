import React from "react"
import Header from "../components/Header"
import Container from "./Container"

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
