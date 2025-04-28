import { serialize } from "next-mdx-remote/serialize"
import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { PostHeaderData } from "../types/post"
import * as Shiki from "shiki"
import { Plugin } from "unified"
import { visit } from "unist-util-visit"

type ContentType = "blog" | "projects" | "pages"

function getPath(dir: ContentType) {
  return join(process.cwd(), "_content", dir)
}

export function getFiles(dir: ContentType) {
  return fs.readdirSync(getPath(dir))
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

export async function getFileBySlug(slug: string, dir: ContentType) {
  const file = fs.readFileSync(join(getPath(dir), `${slug}.mdx`), "utf-8")
  const { data, content } = matter(file)

  const highlighter = Shiki.createHighlighter({ themes: ['github-dark'] })

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[plugin, { highlighter }]],
    },
  })

  return {
    mdxSource,
    slug,
    frontmatter: data as PostHeaderData,
  }
}

export function getFilenameFromSlug(slug: string, dir: ContentType) {
  const files = getFiles(dir).map((file) => file.replace(/\.md$/, ""))

  if (files.find((file) => file === slug)) return slug

  const slugFile = files.find((file) => {
    const sepIdx = file.indexOf("--")
    if (sepIdx) {
      const substr = file.substr(sepIdx + 2)
      return encodeURIComponent(substr) === slug
    }
  })
  return slugFile
}
