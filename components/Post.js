import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// takes in a prop called post (each single post)
export default function Post({ post }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          {/* Image */}
          <Image
            src={post.frontmatter.cover_image}
            alt=""
            width={500}
            height={350}
            sizes="100vw"
            style={{
              objectFit: 'fill',
            }}
          />
        </div>
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
