import React from "react"

type PostListProps = {
  title: string
  itemMax?: number
  multiCol?: boolean
  children: React.ReactNode | React.ReactNode[]
}

function PostList({ multiCol, title, itemMax, children }: PostListProps) {
  return (
    <div>
      <div
        className={`w-full mb-3 font-sans text-2xl font-extrabold transition-colors duration-500 text-heading 
        xs:text-2xl dark:text-headingDark`}
      >
        {title}
      </div>
      <div className={`grid gap-6 w-full mt-6`}>{children}</div>

      {/* more */}
      {/* <div className="w-full h-8 p-6 font-serif font-bold text-center text-subtitle">More...</div> */}
    </div>
  )
}

export default PostList
