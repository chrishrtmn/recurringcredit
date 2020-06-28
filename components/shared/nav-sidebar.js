import Link from 'next/link'
import ActiveLink from '../../libraries/nav-active-class'

export default function NavSidebar() {
  return (
    <>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>

        {/*
        <Link href='/#pricing'>
          <a>Pricing</a>
        </Link>
        */}

        <ActiveLink activeClassName='active' href='/contact'>
          <a>Contact</a>
        </ActiveLink>

        <a
          className='login'
          href='https://mysuperportal.com/access/recurringcredit/'
          target='_blank'
        >
          Login
        </a>
      </div>
    </>
  )
}
