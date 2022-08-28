import { InferGetStaticPropsType } from "next"
import { getAllPostFrontmatter } from "../lib/api"
import Head from "next/head"
import PostList from "../components/PostList"
import PostListItem from "../components/PostListItem"

type HomeProps = {} & InferGetStaticPropsType<typeof getStaticProps>

export default function Index({ posts, projects }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Home - RonanDoherty.com</title>
      </Head>

      <PostList
        title="Posts"
        // itemMax={3}
      >
        {posts.map((p) => (
          <PostListItem
            key={p.slug}
            slug={`blog/${p.slug}`}
            title={p.frontmatter.title}
            date={p.frontmatter.date}
            description={p.frontmatter.description}
            showDate
          />
        ))}
      </PostList>

      {/* spacer */}
      <div className="w-full h-10"></div>

      <PostList
        title="Projects"
        multiCol
        // itemMax={2}
      >
        {projects.map((p) => (
          <PostListItem
            key={p.slug}
            slug={`projects/${p.slug}`}
            title={p.frontmatter.title}
            date={p.frontmatter.date}
            description={p.frontmatter.description}
            thumbnail={p.frontmatter.thumbnail}
            // showThumbnail
            showDescription={false}
          />
        ))}
      </PostList>

      <footer></footer>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPostFrontmatter("blog").filter(
    (post) => post.frontmatter.published && post.frontmatter.listed
  )

  const projects = getAllPostFrontmatter("projects").filter(
    (post) => post.frontmatter.published && post.frontmatter.listed
  )

  return {
    props: {
      posts,
      projects,
    },
  }
}
