import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getAllPostFrontmatter } from "../lib/api"
import Head from "next/head"
import PostList from "../components/PostList"

type HomeProps = {} & InferGetStaticPropsType<typeof getStaticProps>

export default function Index({ blogData, projectsData }: HomeProps) {
  debugger
  return (
    <div>
      <Head>
        <title>Home - RonanDoherty.com</title>
      </Head>

      <PostList title="Posts" contentFolder="blog" postsData={blogData} />

      <PostList title="Projects" contentFolder="projects" postsData={projectsData} />

      <footer></footer>
    </div>
  )
}

export async function getStaticProps<GetStaticProps>() {
  const blogData = getAllPostFrontmatter("blog").filter(
    (post) => post.frontmatter.published && post.frontmatter.listed
  )

  const projectsData = getAllPostFrontmatter("projects").filter(
    (post) => post.frontmatter.published && post.frontmatter.listed
  )

  return {
    props: {
      blogData,
      projectsData,
    },
  }
}
