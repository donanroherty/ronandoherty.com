import React from "react"

import { GetStaticPathsResult, GetStaticProps } from "next"
import { useRouter } from "next/router"

import { getAllPosts } from "../../lib/api"

function Post() {
  const router = useRouter()
  const { slug } = router.query

  return <div>Slug: {slug}</div>
}

export async function getStaticPaths<GetStaticPaths>() {
  const posts = getAllPosts(["slug"])

  const params = posts.map(post => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths: params,
    fallback: false,
  }
}

export async function getStaticProps<GetStaticProps>() {
  return {
    props: {},
  }
}

export default Post
