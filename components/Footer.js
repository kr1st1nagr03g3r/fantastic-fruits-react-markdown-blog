import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="spacer"></div>
      <div className="footer">
        <div className="container">
          <p>
            This is a Static Markdown blog powered by{' '}
            <Link passHref href="https://nextjs.org/">
              Next.js
            </Link>
            ,{' '}
            <Link passHref href="https://mui.com/">
              MUI
            </Link>
            , and{' '}
            <Link passHref href="https://vercel.com/">
              Vercel
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
