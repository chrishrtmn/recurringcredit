import Link from 'next/link'

const dateYear = new Date().getFullYear()

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='wrapper container'>
          <div className='copyright'>
            &copy; <span className='date-year'>{dateYear}</span>{' '}
            RecurringCredit. All rights reserved.
            <div className='legal-links'>
              <Link href='/terms'>
                <a>Terms & Conditions</a>
              </Link>{' '}
              <Link href='/privacy'>
                <a>Privacy Policy</a>
              </Link>{' '}
              <Link href='/disclaimer'>
                <a>Disclaimer</a>
              </Link>
              {/*
            <Link href='/cancellation'>
              <a>Cancellation</a>
              eg: https://www.youneedabudget.com/cancellation/
            </Link>
            */}
            </div>
          </div>

          <div className='social-links'>
            <a href='#twitter'>Twitter</a> <a href='#facebook'>Facebook</a>{' '}
            <a href='mailto:hello@recurringcredit.com'>Email</a>
          </div>
          {/*
          <span className='company-links'>
            <Link href='/about'><a>About</a></Link>
            eg: https://www.youneedabudget.com/about-us/
            <Link href='/press'><a>Press</a></Link>
            eg: https://www.youneedabudget.com/press/
          </span>
          */}
        </div>
      </footer>

      <style jsx>{`
        footer {
          padding: 30px 0;
          color: #666;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 30px;
        }

        .legal-links a {
          margin: 0 0 0 10px;
          color: #666;
          text-decoration: none;
          border-bottom: 2px solid transparent;
        }

        .legal-links a:hover {
          color: #112a6b;
          border-color: #112a6b;
        }

        @media (min-width: 700px) {
          .legal-links {
            display: inline;
          }
        }

        @media (min-width: 900px) {
          .container {
            grid-template-columns: 1fr 20%;
          }

          .social-links {
            justify-self: end;
          }
        }
      `}</style>
    </>
  )
}
