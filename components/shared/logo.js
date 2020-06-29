import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <a title='RecurringCredit'>
          Recurring<span>Credit</span>
        </a>
      </Link>

      <style jsx>{`
        a {
          /*position: relative;
          z-index: 99999999;*/
          display: inline-block;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 22px;
          font-style: italic;
          font-weight: 500;
          text-decoration: none;
          transition: all ease-in-out 0.2s;
        }

        header.nav-toggle.open a {
          color: var(--color-primary);
        }

        span {
          display: inline-block;
          margin: 0 0 0 6px;
          padding: 3px 4px;
          border: 2px solid #fff;
          border-radius: 4px;
          font-size: 20px;
          font-weight: 400;
        }
      `}</style>
    </>
  )
}
