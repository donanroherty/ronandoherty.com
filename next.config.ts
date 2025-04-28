import { NextConfig } from "next"
import remarkGfm from "remark-gfm"
import remarkFrontmatter from 'remark-frontmatter'
import createMDX from "@next/mdx"

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
}

export default nextConfig

// module.exports = withMDX(nextConfig)
