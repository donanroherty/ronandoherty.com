import React from "react"
import Header from "../components/Header"
import Footer from "./Footer"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container h-full max-w-screen-md mx-auto space-y-8 sm:space-y-16 grid-rows-layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
