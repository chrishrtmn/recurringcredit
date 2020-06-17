import Layout from '../components/layout'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import Faq from '../components/faq'
import stripeHandleClick from '../libraries/stripe-handle-click'

export default function Index({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />

        <main>
          <div className='wrapper'>
            <p className='introduction'>
              Are you trying to stop credit card usage, but keep your credit
              history? RecurringCredit gives you a piece of mind from feeling
              forced to use or manage your credit cards in order to keep them
              active and open, to prevent dormancy and inactivity, leading to
              closure and hurting your credit history.
            </p>

            <div className='benefits'>
              <h2>Benefits</h2>

              <div>
                <img />
                <h3>Spend less time worrying.</h3>
                <p>Your credit cards and history will still be active.</p>
              </div>

              <div id='pricing'>
                <h3>Minimal costs.</h3>
                <p>
                  Our subscription is only $1 every 3 months. That is super
                  cost-effective!
                </p>
                <img />
              </div>

              <div>
                <img />
                <h3>Another headline.</h3>
                <p>Description for this section goes here.</p>
              </div>
            </div>

            <div className='container'>
              <div className='item get-started'>
                <h2>Ready to get started?</h2>
                <p>Initial steps followed by what will happen.</p>
                <p>$1 every 3 months.</p>
                <button className='fill alt' onClick={stripeHandleClick}>
                  Add credit card
                </button>
              </div>

              <div className='item'>
                <Faq />
              </div>
            </div>
          </div>

          <Newsletter />
        </main>
      </Layout>

      <style jsx>{`
        .introduction {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 0 60px;
          text-align: center;
          font-size: 18px;
        }

        .benefits {
          padding: 60px 0;
          text-align: center;
        }

        .benefits div {
          padding: 60px 0 0;
        }

        .container {
          display: grid;
          grid-gap: 60px;
          padding: 60px 0 80px;
        }

        @media (min-width: 900px) {
          .container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .item {
          padding: 60px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
        }

        .item p {
          margin: 20px 0;
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
      description: configData.default.description,
    },
  }
}
