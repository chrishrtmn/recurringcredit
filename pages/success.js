import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/shared/header'

export default function Cancel({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            This is the success page. Return{' '}
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  )
}
