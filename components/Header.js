import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className='header'>
        <Link href='/' className='logo'>
          <a>RecurringCredit</a>
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
          <Link href='/portal' className='portal'>
            <a>Log In</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
