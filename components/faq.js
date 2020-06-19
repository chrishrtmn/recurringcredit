import Link from 'next/link'

export default function Faq() {
  return (
    <>
      <h2 className='spacer'>Still have questions?</h2>
      <p>
        <Link href='/faq'>
          <a title='Frequently Asked Questions'>View our FAQ</a>
        </Link>{' '}
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
