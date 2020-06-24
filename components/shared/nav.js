import Link from 'next/link'
import ActiveLink from '../../libraries/nav-active-class'

export default function Nav() {
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
        >
          Login
        </a>

        <a className='toggle'>
          <i className='gg-menu'></i>
        </a>
      </nav>

      <style jsx>{`
        nav {
          float: right;
          margin: 1px 0 0;
        }

        a {
          display: inline-block;
          margin: 1px 0 0 15px;
          padding: 0 0 3px;
          font-size: 18px;
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
          color: #fff;
          border-bottom: 2px solid transparent;
          transition: all ease-in-out 0.2s;
        }

        a:not(.toggle) {
          display: none;
        }

        @media (min-width: 700px) {
          a {
            margin: 1px 0 0 30px;
          }

          a:not(.toggle) {
            display: inline-block;
          }

          a.toggle {
            display: none;
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

        .toggle {
          margin: 1px -10px 0 15px;
          padding: 16px 10px;
          border: 0;
          cursor: pointer;
        }

        .toggle:hover {
          border: 0;
          color: var(--color-secondary);
        }

        .gg-menu,
        .gg-menu::after,
        .gg-menu::before {
          box-sizing: border-box;
          position: relative;
          display: block;
          width: 20px;
          height: 2px;
          border-radius: 3px;
          background: currentColor;
        }

        .gg-menu::after,
        .gg-menu::before {
          content: '';
          position: absolute;
          top: -6px;
        }

        .gg-menu::after {
          top: 6px;
        }
      `}</style>
    </>
  )
}
