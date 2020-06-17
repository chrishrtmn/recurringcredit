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
          display: inline-block;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 22px;
          font-style: italic;
          font-weight: 500;
          text-decoration: none;
          transition: all ease-in-out 0.2s;
        }

        span {
          display: inline-block;
          margin: 0 0 0 6px;
          padding: 3px 4px;
          border: 2px solid #fff;
          border-radius: 4px;
          font-size: 20px;
          font-weight: 400;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
          transition: all ease-in-out 0.2s;
        }

        a:hover span {
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  )
}
