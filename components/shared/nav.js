import Link from 'next/link'
import ActiveLink from '../../libraries/nav-active-class'

export default function Nav() {
  return (
    <>
      <nav>
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
          className='outline'
          href='https://mysuperportal.com/access/recurringcredit/'
        >
          Login
        </a>
      </nav>

      <style jsx>{`
        nav {
          display: none;
          float: right;
          margin: 1px 0 0;
        }

        @media (min-width: 700px) {
          nav {
            display: inline-block;
          }
        }

        a {
          display: inline-block;
          margin: 0 0 0 30px;
          padding: 5px 0 2px;
          font-size: 18px;
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
          color: #fff;
          border-bottom: 2px solid transparent;
          transition: all ease-in-out 0.2s;
        }

        a:first-of-type {
          margin-left: 0;
        }

        a:hover {
          text-decoration: none;
          border-bottom: 2px solid #fff;
        }

        .outline {
          border: 2px solid #fff;
          border-radius: 4px;
          padding: 3px 10px;
        }

        .outline:hover {
          background: #fff;
          color: #112a6b;
        }
      `}</style>
    </>
  )
}
