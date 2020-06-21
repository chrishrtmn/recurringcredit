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
            <h1>Credit card added/Subscription successful!</h1>
            <p>
              <Link href='/'>
                <a>Add another card</a>
              </Link>
            </p>
            <p>
              If you need to edit your subscription, please{' '}
              <Link href='/contact'>
                <a>contact us</a>
              </Link>{' '}
              - NOT NEEDED IF USING PORTAL.
            </p>
            <br />
            <p>
              Return{' '}
              <Link href='/'>
                <a>Home</a>
              </Link>{' '}
              <a href='https://mysuperportal.com/access/recurringcredit/'>
                View/Edit Subscription
              </a>
            </p>
          </div>
        </main>
      </Layout>
    </>
  )
}
