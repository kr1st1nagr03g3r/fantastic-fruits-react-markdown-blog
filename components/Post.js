import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// takes in a prop called post (each single post)
export default function Post({ post }) {
  return (
    <>
      <div className="card">
        {/* Image */}
        <Image
          src={post.frontmatter.cover_image}
          alt=""
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        {/* Optional Date: */}
        <div className="post-date">Posted on: {post.frontmatter.date}</div>
        {/* Title */}
        <h3>{post.frontmatter.title}</h3>
        {/* Excerpt */}
        <p>{post.frontmatter.excerpt}</p>
        {/* Link to Page */}
        <Link className="btn" href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </>
  )
}
