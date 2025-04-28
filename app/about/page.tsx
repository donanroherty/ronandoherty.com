import React from "react"
import PostPage from "../../components/PostPage"
import Icon from "../../components/Icon"
import ContactForm from "../../components/ContactForm"
import { readMdx } from "../../lib/readMdx"

export default async function Page() {
  const { content, frontmatter } = await readMdx("about", "pages")

  return (
    <div className="space-y-6">
      <PostPage frontmatter={frontmatter}>
        {content}
      </PostPage>

      {/* Social links */}
      <div className="flex flex-row flex-wrap justify-between w-full gap-3 pt-2 pb-2 sm:pb-6 sm:pt-6">
        <a
          href="https://www.github.com/donanroherty"
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-row gap-2"
        >
          <Icon name="github" className="w-5 xs:w-6" />
          <div className="">github.com/donanroherty</div>
        </a>

        <a
          href="https://www.linkedin.com/in/ronan-doherty-dev"
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-row gap-2"
        >
          <Icon name="linkedin" className="w-5 xs:w-6" />
          <div className="">linkedin.com/in/ronan-doherty-dev</div>
        </a>
      </div>
      <div className="">
        <ContactForm />
      </div>
    </div>)
}
