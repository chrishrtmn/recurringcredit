import Link from 'next/link'

export default function Faq() {
  return (
    <>
      <h2>Still have questions?</h2>
      <p>
        <Link href='/faq'>
          <a title='Frequently Asked Questions'>View our FAQ</a>
        </Link>{' '}
        <Link href='/contact'>
          <a title='Contact'>Connect with us</a>
        </Link>
      </p>
    </>
  )
}
