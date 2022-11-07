import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <h2>Fantastic Fruits (Markdown Blog Template)</h2>
        </Link>
      </div>
    </header>
  )
}
