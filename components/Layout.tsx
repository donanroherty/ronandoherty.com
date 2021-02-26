import React from "react"
import Header from "../components/Header"

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container max-w-screen-md mx-auto h-full flex flex-col space-y-8">
      <Header />
      {children}
    </div>
  )
}
