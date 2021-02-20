import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getAllPosts } from "../lib/api"
import PostType from "../types/post"
import Head from "next/head"
import PostList from "../components/PostList"

type HomeProps = {} & InferGetStaticPropsType<typeof getStaticProps>

export default function Index({ posts }: HomeProps) {
  return (
    <div>
      <Head>
        <title>RonanDohertyBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PostList posts={posts} />
      </main>

      <footer></footer>
    </div>
  )
}

export async function getStaticProps<GetStaticProps>() {
  const posts = getAllPosts(["slug", "date", "title", "description"])

  return {
    props: {
      posts: posts as PostType[],
    },
  }
}
