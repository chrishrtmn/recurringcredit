import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <a>RecurringCredit</a>
      </Link>

      <style jsx>{`
        a {
          color: #fff;
        }
      `}</style>
    </>
  )
}
