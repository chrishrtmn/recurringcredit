import Link from 'next/link'
import stripeHandleClick from '../lib/stripe-handle-click'
import styles from '../styles/regions/header.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <a className='logo'>RecurringCredit</a>
        </Link>
        <nav className='nav'>
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
      </header>
    </>
  )
}
