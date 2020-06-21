import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <nav>
        {/*<a>Light/Dark (Minimalist) Mode</a>*/}

        {/*
          <Link href='/about'>
            <a>About</a>
          </Link>
          
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        */}

        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/#pricing'>
          <a>Pricing</a>
        </Link>

        {/*
        <Link href='/faq'>
          <a>FAQ</a>
        </Link>
        */}

        <Link href='/contact'>
          <a>Contact</a>
        </Link>

        {/*<a onClick={stripeHandleClick}>Add Credit Card</a>*/}

        <a
          className='portal'
          href='https://mysuperportal.com/access/recurringcredit/'
          style={{
            border: '1px solid #fff',
            borderRadius: '10px',
            padding: '3px 10px 3px',
          }}
        >
          Customer Login
        </a>
      </nav>

      <style jsx>{`
        nav {
          float: right;
          margin: 1px 0 0;
        }

        nav a {
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

        nav a:first-of-type {
          margin-left: 0;
        }

        nav a:hover {
          text-decoration: none;
          border-bottom: 2px solid #fff;
        }
      `}</style>
    </>
  )
}
