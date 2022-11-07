import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <h1>Fantastic Fruits (Markdown Blog Template)</h1>
        </Link>
      </div>
    </header>
  )
}
