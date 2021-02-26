import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getAllPostFrontmatter } from "../lib/api"
import Head from "next/head"
import PostList from "../components/PostList"

type HomeProps = {} & InferGetStaticPropsType<typeof getStaticProps>

export default function Index({ postData }: HomeProps) {
  return (
    <div>
      <Head>
        <title>RonanDohertyBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostList postsData={postData} />

      <footer></footer>
    </div>
  )
}

export async function getStaticProps<GetStaticProps>() {
  const postData = getAllPostFrontmatter("blog")

  return {
    props: {
      postData,
    },
  }
}
