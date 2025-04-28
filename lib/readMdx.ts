import { compileMDX } from "next-mdx-remote/rsc";
import path, { join } from "path";
import fs from "fs"
import MDXComponents from "../components/MDXComponents";
import { PostHeaderData } from "../types/post";
import { createHighlighter } from 'shiki'
import remarkShikiTwoslash from "remark-shiki-twoslash"
import { Plugin } from "unified"
import { visit } from "unist-util-visit"
import * as Shiki from "shiki"


export type ContentType = "blog" | "projects" | "pages"

export async function readMdx(slug: string, contentType: ContentType) {
  const mdx = fs.readFileSync(path.join(getPath(contentType), `${slug}.mdx`), "utf-8")

  const highlighter = await createHighlighter({
    themes: ['nord'],
    langs: ['javascript', 'typescript', 'go', 'bash', 'sh'],
  })

  return await compileMDX<PostHeaderData>({
    source: mdx, options: {
      parseFrontmatter: true, mdxOptions: {
        remarkPlugins: [plugin, { highlighter }],
      }
    },
    components: {
      CustomLink: MDXComponents.a,
      Image: MDXComponents.Image,
      YouTube: MDXComponents.YouTube,
      "boids-element": MDXComponents["boids-element"],
    },

  })
}

function plugin(options: {
  highlighter: Shiki.Highlighter
}): Plugin<[{ highlighter: Shiki.Highlighter }]> {
  return function visitTree(tree) {
    visit(tree, "code", pluginVisitor)

    function pluginVisitor(node: any, idx: number | null, parent: any) {
      if (!node.lang || node.lang.length === 0) return

      node.type = "html"
      node.children = undefined
      node.value = options.highlighter
        .codeToHtml(node.value, node.lang)
        .replace(
          '<pre class="shiki"',
          `<pre class="shiki" language="${node.lang}" meta="${node.meta}"`
        )
    }
  }
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
