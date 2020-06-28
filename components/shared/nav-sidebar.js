import Link from 'next/link'
import ActiveLink from '../../libraries/nav-active-class'

export default function NavSidebar({ close }) {
  return (
    <>
      <nav className='nav-sidebar'>
        <Link onClick={close} href='/'>
          <a>Home</a>
        </Link>

        {/*
        <Link href='/#pricing'>
          <a>Pricing</a>
        </Link>
        */}

        <ActiveLink onClick={close} activeClassName='active' href='/contact'>
          <a>Contact</a>
        </ActiveLink>

        <a
          onClick={close}
          className='login'
          href='https://mysuperportal.com/access/recurringcredit/'
          target='_blank'
        >
          Login
        </a>
      </nav>

      <style jsx>{`
        @media (min-width: 700px) {
          nav {
            display: none;
          }

          nav a {
            color: var(--color-primary);
          }
        }
      `}</style>
    </>
  )
}
