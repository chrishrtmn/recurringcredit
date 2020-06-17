import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Cancel({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <div className='wrapper'>
          <main>
            This is the cancel page. Return{' '}
            <Link href='/'>
              <a>Home</a>
            </Link>
          </main>
        </div>
      </Layout>
    </>
  )
}
