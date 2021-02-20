import React from "react"

type ContainerProps = {
  children: JSX.Element | JSX.Element[] | React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container max-w-screen-md mx-auto h-full flex flex-col space-y-8">
      {children}
    </div>
  )
}
