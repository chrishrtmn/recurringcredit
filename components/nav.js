import Link from 'next/link'
import stripeHandleClick from '../lib/stripe-handle-click'

export default function Nav() {
  return (
    <>
      <nav>
        {/*
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>*/}

        <Link href='/contact'>
          <a>Contact</a>
        </Link>

        <a onClick={stripeHandleClick}>Add Credit Card</a>
      </nav>

      <style jsx>{`
        nav a {
          color: #fff;
        }
      `}</style>
    </>
  )
}
