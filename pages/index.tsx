import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getAllPosts } from "../lib/api"
import PostType from "../types/post"
import Head from "next/head"
import Header from "../components/Header"
import PostList from "../components/PostList"

type HomeProps = {} & InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="container max-w-screen-md mx-auto h-full flex flex-col space-y-8">
          <Header />
          <PostList posts={posts} />
        </div>
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
