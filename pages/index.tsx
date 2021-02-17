import { GetStaticProps, InferGetServerSidePropsType } from "next"
import { getAllPosts } from "../lib/api"
import PostType from "../types/post"
import Head from "next/head"
import Header from "../components/Header"

type HomeProps = {
  posts: PostType[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <ul>
          {posts.map(post => (
            <li className="p-4">
              <h1 className="text-xl text-heading font-extrabold font-heading">
                {post.title}
              </h1>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer></footer>
    </div>
  )
}

export async function getStaticProps<GetStaticProps>() {
  const posts = getAllPosts([
    "slug",
    "title",
    "date",
    "description",
    "content",
    "published",
  ])

  return {
    props: {
      posts: posts,
    },
  }
}
