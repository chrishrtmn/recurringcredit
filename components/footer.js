import Link from 'next/link'

let dateYear = new Date().getFullYear()

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='wrapper'>
          <span className='copyright'>
            &copy; <span className='date-year'>{dateYear}</span>{' '}
            RecurringCredit. All rights reserved.
          </span>

          <br />

          <span className='legal-links'>
            <Link href='/terms'>
              <a>Terms and Conditions</a>
            </Link>

            <Link href='/privacy'>
              <a>Privacy Policy</a>
            </Link>

            <Link href='/disclaimer'>
              <a>Disclaimer</a>
            </Link>
          </span>

          <br />

          <span className='social-links'>
            <a href='#twitter'>Twitter</a>

            <a href='#facebook'>Facebook</a>
          </span>
        </div>
      </footer>

      <style jsx>{`
        footer {
          padding: 30px 0;
        }
      `}</style>
    </>
  )
}
