import Link from 'next/link'

import styles from '../styles/regions/header.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <a className='logo'>RecurringCredit</a>
        </Link>
        <nav className='nav'>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
          <Link href='/portal'>
            <a className='portal'>Log In</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
