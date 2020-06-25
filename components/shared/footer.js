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
            </div>
            <div className='service-links'>
              {/*
              <Link href='/cancellation'>
                <a>Cancellation</a>
                eg: https://www.youneedabudget.com/cancellation/
              </Link>
              */}
              {/*<a>Stripe is our payment processor.</a>*/}
            </div>
          </div>

          <div className='social-links'>
            <a href='https://twitter.com/recurringcredit'>
              <span className='visually-hidden'>Twitter</span>
              <i className='gg-twitter' aria-hidden='true'></i>
            </a>{' '}
            <a href='https://facebook.com/recurringcredit'>
              <span className='visually-hidden'>Facebook</span>
              <i className='gg-facebook' aria-hidden='true'></i>
            </a>{' '}
            <a href='mailto:hello@recurringcredit.com'>
              <span className='visually-hidden'>Email</span>
              <i className='gg-mail' aria-hidden='true'></i>
            </a>
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

        .legal-links {
          margin: 10px 0 0;
        }

        .legal-links a {
          margin: 0 0 0 10px;
          color: #666;
          text-decoration: none;
          border-bottom: 2px solid transparent;
        }

        .legal-links a:first-of-type {
          margin: 0;
        }

        .legal-links a:hover {
          color: #112a6b;
          border-color: #112a6b;
        }

        @media (min-width: 700px) {
          .legal-links {
            display: inline;
            margin: 0;
          }

          .legal-links a:first-of-type {
            margin: 0 0 0 10px;
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

        .social-links a {
          margin: 0 15px 0 0;
        }

        @media (min-width: 900px) {
          .social-links a {
            margin: 0 0 0 15px;
          }
        }

        .social-links i {
          color: var(--color-base-light);
          transition: color ease-in-out 0.2s;
        }

        .social-links a:hover i {
          color: var(--color-primary);
        }

        .gg-twitter,
        .gg-facebook {
          box-sizing: border-box;
          position: relative;
          display: inline-block;
          transform: scale(var(--ggs, 1));
          width: 20px;
          height: 20px;
        }

        .gg-twitter {
          top: 2px;
        }

        .gg-facebook {
          height: 18px;
        }

        .gg-twitter::after,
        .gg-twitter::before {
          content: '';
          display: block;
          position: absolute;
          box-sizing: border-box;
          left: 4px;
        }

        .gg-twitter::before {
          width: 9px;
          height: 14px;
          border-left: 4px solid;
          border-bottom: 4px solid;
          border-bottom-left-radius: 6px;
          background: linear-gradient(to left, currentColor 12px, transparent 0)
            no-repeat center 2px/10px 4px;
          top: 4px;
        }

        .gg-twitter::after {
          width: 4px;
          height: 4px;
          background: currentColor;
          border-radius: 20px;
          top: 2px;
          box-shadow: 7px 4px 0, 7px 12px 0;
        }

        .gg-facebook::after,
        .gg-facebook::before {
          content: '';
          display: block;
          position: absolute;
          box-sizing: border-box;
        }

        .gg-facebook::before {
          width: 8px;
          height: 20px;
          border-left: 4px solid;
          border-top: 4px solid;
          border-top-left-radius: 5px;
          left: 6px;
        }

        .gg-facebook::after {
          width: 10px;
          height: 4px;
          background: currentColor;
          top: 7px;
          left: 4px;
          transform: skew(-5deg);
        }

        .gg-mail,
        .gg-mail::after {
          display: inline-block;
          box-sizing: border-box;
          height: 14px;
          border: 2px solid;
        }

        .gg-mail {
          overflow: hidden;
          transform: scale(var(--ggs, 1));
          position: relative;
          width: 18px;
          border-radius: 2px;
        }

        .gg-mail::after {
          content: '';
          position: absolute;
          border-radius: 3px;
          width: 14px;
          transform: rotate(-45deg);
          bottom: 3px;
          left: 0;
        }
      `}</style>
    </>
  )
}
