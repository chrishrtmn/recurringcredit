import Link from 'next/link'
import Layout from '../components/layout'
import Hero from '../components/hero'

export default function Contact({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <main>
          This is the Contact page. Return{' '}
          <Link href='/'>
            <a>Home</a>
          </Link>
        </main>
      </Layout>
    </>
  )
}
