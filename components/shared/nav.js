import Link from 'next/link'
import ActiveLink from '../../libraries/nav-active-class'
import { default as NavSidebarToggle } from './nav-sidebar-toggle'

export default function Nav({ open, ...props }) {
  return (
    <>
      <nav>
        <ActiveLink activeClassName='active' href='/'>
          <a className='home'>Home</a>
        </ActiveLink>

        {/*
        <Link href='/#pricing'>
          <a>Pricing</a>
        </Link>
        */}

        <ActiveLink activeClassName='active' href='/contact'>
          <a>Contact</a>
        </ActiveLink>

        <a
          className='filled'
          href='https://mysuperportal.com/access/recurringcredit/'
          target='_blank'
        >
          Login
        </a>

        <NavSidebarToggle />
      </nav>

      <style jsx>{`
        nav {
          float: right;
          margin: 1px 0 0;
        }

        a {
          display: none;
          margin: 1px 0 0 15px;
          padding: 0 0 3px;
          font-size: 18px;
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
          color: #fff;
          border-bottom: 2px solid transparent;
          transition: all ease-in-out 0.2s;
        }

        @media (min-width: 700px) {
          a {
            margin: 1px 0 0 30px;
            display: inline-block;
          }
        }

        a:first-of-type {
          margin-left: 0;
        }

        a.active,
        a:hover {
          border-bottom: 2px solid #fff;
          text-decoration: none;
        }

        a.home.active {
          display: none;
        }

        .filled {
          cursor: pointer;
          padding: 3px 10px;
          border: 0;
          border-radius: 4px;
          background: #fff;
          color: var(--color-primary);
        }

        .filled:hover {
          background: var(--color-secondary);
          color: #fff;
          border: 0;
        }
      `}</style>
    </>
  )
}
