// const withPlugins = require("next-compose-plugins")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// module.exports = withPlugins([withMDX], {
//   experimental: { esmExternals: true },
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: { esmExternals: true },
}

module.exports = withMDX(nextConfig)
