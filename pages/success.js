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
              <h1>Successful Payment</h1>

              <p>
                Your subscription for this credit card has been enabled. Every 3
                months you will be charged $1.00 to keep your credit card
                active. Log in with your email to edit your subscription.
              </p>

              <p className='border-button'>
                <a
                  href='https://recurringcredit.superportal.site/portal/login'
                  target='_blank'
                >
                  Edit Subscription <i className='gg-arrow-right-o'></i>
                </a>
              </p>

              <h3>Want to add another card?</h3>

              <p>Statistics show the average American has 3-4 credit cards.</p>

              <button onClick={stripeHandleClick}>Add credit card</button>

              <h3>Get your mind on autopilot, and your credit on autopay.</h3>

              <p>
                We recommend putting your credit cards on autopay with your
                credit card provider. Become worry-free knowing your $1.00
                balance gets paid off every 3 months.
              </p>

              <br />

              <p>
                If you have any issues, concerns, or feedback, please get in
                touch.
              </p>

              <p className='border-button'>
                <Link href='/contact'>
                  <a>
                    Contact us <i className='gg-arrow-right-o'></i>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </main>

        <Newsletter />
      </Layout>

      <style jsx>{`
        .success {
          padding: 0 0 40px;
        }

        h1 {
          margin: 0 0 20px;
          font-size: 34px;
        }

        h3 {
          margin: 20px 0 0;
        }

        p {
          font-size: 16px;
        }

        button {
          display: inline-block;
          min-width: 175px;
          margin: 20px 0;
          padding: 10px;
          border: 2px solid #f85b5b;
          background: #f85b5b;
          border-radius: 5px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          cursor: pointer;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
          transition: all ease-in-out 0.2s;
        }

        button:hover {
          box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
        }

        @media (min-width: 700px) {
          h1 {
            font-size: 40px;
          }

          p {
            font-size: 18px;
          }
        }

        .border-button a {
          display: inline-block;
          margin: 20px 0;
          padding: 10px;
          border: 2px solid var(--color-primary);
          border-radius: 4px;
          color: var(--color-primary);
          text-decoration: none;
        }

        .border-button a:hover {
          background: var(--color-primary);
          color: #fff;
        }

        .border-button div {
          margin: 40px 0 0;
        }

        .gg-arrow-right-o {
          box-sizing: border-box;
          position: relative;
          top: 4px;
          display: inline-block;
          margin: 0 0 0 4px;
          width: 22px;
          height: 22px;
          border: 2px solid;
          transform: scale(var(--ggs, 1));
          border-radius: 20px;
        }

        .gg-arrow-right-o::after,
        .gg-arrow-right-o::before {
          content: '';
          display: block;
          box-sizing: border-box;
          position: absolute;
          right: 4px;
        }

        .gg-arrow-right-o::after {
          width: 6px;
          height: 6px;
          border-top: 2px solid;
          border-right: 2px solid;
          transform: rotate(45deg);
          bottom: 6px;
        }

        .gg-arrow-right-o::before {
          width: 10px;
          height: 2px;
          bottom: 8px;
          background: currentColor;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.descriptionSuccess,
    },
  }
}
