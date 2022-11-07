import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  // console.log(posts)
  return (
    <>
      <div>
        <Head>
          <title>Fantastic Fruits Markdown Blog Template</title>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍓</text></svg>"
          />
        </Head>

        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  // console.log(files)

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    )

    // console.log(markdownWithMeta)

    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  // console.log(posts)

  return {
    props: {
      // sortByDate will come in from the Utils file
      posts: posts.sort(sortByDate),
    },
  }
}
