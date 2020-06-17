import Link from 'next/link'

export default function Faq() {
  return (
    <>
      <h2>See frequently asked questions</h2>
      <p>
        <Link href='/faq'>
          <a title='Frequently Asked Questions'>Check out the FAQ</a>
        </Link>
      </p>
      <h2 className='spacer'>Still have questions?</h2>
      <p>
        <Link href='/contact'>
          <a title='Contact'>Connect with us</a>
        </Link>
      </p>

      <style jsx>{`
        .spacer {
          margin: 40px 0 0;
        }
      `}</style>
    </>
  )
}
