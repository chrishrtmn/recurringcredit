import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Contact({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

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
