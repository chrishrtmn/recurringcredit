import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/shared/header'
import Newsletter from '../components/shared/newsletter'
import stripeHandleClick from '../libraries/stripe-handle-click'

export default function Cancel({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            <div className='success'>
              <h1>Subscription successful!</h1>
              <p>
                AWESOME! WE SUGGEST YOU GO TO YOUR CREDIT CARD PROVIDERS WEBSITE
                AND SET IT TO AUTOPAY IF IT ISNT ALREADY SO YOU CAN BE WORRY
                FREE KNOWING YOURE ONLY PAYING $1 EVERY 3 MONTHS.
              </p>
              <p>
                Add another credit card{' '}
                <button onClick={stripeHandleClick}>Add credit card</button>
              </p>
              <p>
                <a
                  href='https://mysuperportal.com/access/recurringcredit/'
                  target='_blank'
                >
                  View/Edit Subscription
                </a>
              </p>
              <h3>Get your mind on autopilot, and your credit on autopay.</h3>
              <p>
                We recommend putting your credit cards on autopay with your
                credit card provider so you become worry-free knowing your $1
                balance gets paid off every 3 months.
              </p>
              <p>
                If you have any issues, concerns, or feedback, please get in
                touch.
              </p>
              <p>
                <Link href='/contact'>
                  <button>Contact us</button>
                </Link>
              </p>
            </div>
          </div>
        </main>

        <Newsletter />
      </Layout>

      <style jsx>{`
        @media (min-width: 700px) {
          .success {
            padding: 0 0 40px;
          }

          h1 {
            font-size: 40px;
          }

          p {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  )
}
