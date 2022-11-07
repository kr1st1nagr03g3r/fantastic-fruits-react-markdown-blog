import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import MediumIcon from '../public/images/global/mediumIcon.svg'

export default function Footer() {
  return (
    <>
      <div className="spacer"></div>
      <div className="footer">
        <div className="container footer-content">
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
          <div className="footer-icons">
            {' '}
            <Link
              href="https://github.com/kr1st1nagr03g3r/fantastic-fruits-react-markdown-blog"
              passHref
              alt="fork this repo on github"
            >
              <GitHubIcon className="footer-icon" />
            </Link>{' '}
            <Link
              href="
              https://t.me/+veSYx3FMVPlmMGE5"
              alt="chat with me on telegram"
              passHref
            >
              <TelegramIcon className="footer-icon" />
            </Link>{' '}
            <Link
              href="
              https://medium.com/@kr1st1nagr03g3r"
              alt="Check out my tech writing on Medium"
              passHref
            >
              <Image
                src={MediumIcon}
                alt=""
                height=""
                width=""
                className="footer-icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
