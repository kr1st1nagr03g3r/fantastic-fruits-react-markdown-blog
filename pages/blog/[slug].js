import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <Image
          src={cover_image}
          alt=""
          width={700}
          height={475}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="post-body">
          {/* inserting HTML via marked using dangerouslySetInnerHTML */}
          <div
            dangerouslySetInnerHTML={{
              __html: marked(content),
            }}
          ></div>
          <Link className="btn btn-back" href="/">
            Go Back
          </Link>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  // return an object with paths with objects in it with params, object, path or id
  // The format of this return looks like this:
  // paths: [{ params: { slug: 'my slug' } }],

  // return an array of objects, so use parenthesis
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    // fallback: false If you try to access a path / slug that doesn't exist, it will go to a 404 page.
    fallback: false,
  }
}

// Fetch file data based on the slug
// Destructure and get params and the slug
export async function getStaticProps({ params: { slug } }) {
  // Folder and filename 'posts', slug (filename) and it's extension
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8',
  )
  // destructure and pull content
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
