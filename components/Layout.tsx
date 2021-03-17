import React from "react"
import Header from "../components/Header"
import Footer from "./Footer"

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container max-w-screen-md mx-auto space-y-8 h-full grid grid-rows-layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
