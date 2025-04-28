import { compileMDX } from "next-mdx-remote/rsc";
import path, { join } from "path";
import fs from "fs"
import MDXComponents from "../components/MDXComponents";
import { PostHeaderData } from "../types/post";

export type ContentType = "blog" | "projects" | "pages"

export async function readMdx(slug: string, contentType: ContentType) {
  const mdx = fs.readFileSync(path.join(getPath(contentType), `${slug}.mdx`), "utf-8")

  return await compileMDX<PostHeaderData>({
    source: mdx, options: {
      parseFrontmatter: true, mdxOptions: {
      }
    },
    components: MDXComponents,
  })
}


export async function getAllPostFrontmatter(dir: ContentType) {
  const allFiles = getFiles(dir)

  const files = allFiles.map(
    async (filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const mdx = fs.readFileSync(join(getPath(dir), filename), "utf-8")

      const { frontmatter: fm } = await compileMDX<PostHeaderData>({
        source: mdx, options: { parseFrontmatter: true }
      })

      const frontmatter: PostHeaderData = {
        title: fm.title,
        date: fm.date,
        description: fm.description,
        published: fm.published,
        listed: fm.listed,
        thumbnail: fm.thumbnail,
      }
      return { slug, frontmatter }
    }
  )


  const sorted = (await (Promise.all(files))
  ).sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )

  return sorted
}

export function getPath(dir: ContentType) {
  return join(process.cwd(), "_content", dir)
}

export function getFiles(dir: ContentType) {
  return fs.readdirSync(getPath(dir))
}
