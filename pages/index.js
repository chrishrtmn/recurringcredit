import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Newsletter from '../components/shared/newsletter'
import Faq from '../components/home/faq'
import MetricCounts from '../components/home/metrics-counts'
import stripeHandleClick from '../libraries/stripe-handle-click'

export default function Index({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />

        <main>
          <div className='wrapper'>
            <p className='introduction'>
              Are you trying to stop credit card usage but keep your credit
              history? This service gives a piece of mind from feeling forced to
              use or manage your credit cards to keep them active and open, to
              prevent dormancy and inactivity, leading to closure and hurting
              your credit history.
            </p>

            {/*
            <div className='use-cases'>
              <h2>"Why You Need This"</h2>
              <ul>
                <li></li>
                <li>
                  Charged annual fee and couldn’t opt out of the charge as I
                  hadn’t used the credit card all year
                </li>
                <li>
                  2nd oldest standing credit card randomly closed due to
                  inactivity, without any notice (not a law everywhere)
                </li>
                <li>
                  Denied credit increase due to low usage in recent months
                </li>
                <li>Difficult to remember which cards had last been used</li>
              </ul>
            </div>
            */}

            {/*
            <div className='boxes'>
              <div className='box'>
                The average person in the US have at least 3 credit cards. Etc.
              </div>
              <div className='box'>
                The average person has 2 major banking credit cards.
              </div>
              <div className='box'>
                The average person has 1 store credit cards.
              </div>
            </div>
            */}

            <div className='benefits'>
              <h2>Benefits</h2>

              <div>
                <img />
                <h3>Spend less time worrying.</h3>
                <p>
                  Are you trying to stop credit card usage, but keep your credit
                  history? Your credit cards and history will still be active.
                </p>
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
                <h3>Perfect for minimalists.</h3>
                <p>
                  Do you only use 1 or 2 credit cards, yet have several more and
                  want to maintain their credit histories without worrying
                  they'll be closed due to inactivity.
                </p>
              </div>
            </div>

            {/*
            <div className='clients'>
              <h2>Our clients love us</h2>
            </div>
            */}

            {/*
            <div className='metrics'>
              <MetricsCounts />
            </div>
            */}

            {/*
            <div className='media'>
              <h2>RecurringCredit In The Media</h2>
              <h2>As featured in:</h2>
              <p>Website 1</p>
              <p>Website 2</p>
              <p>Website 3</p>
            </div>
            */}

            {/*
            <div>
              <p>
                Your security and trust are important to us. We're committed to
                protecting...
              </p>
              <ul>
                <li>Partnership with Stripe: A payment processor</li>
              </ul>
            </div>
            */}

            <div className='container'>
              <div className='item get-started'>
                <h2>Ready to get started?</h2>
                <strong>Get on autopilot with your cards on autopay.</strong>
                <p>Let us help keep your accounts active</p>
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

        .boxes {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
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
          grid-template-columns: repeat(auto-fill, minmax(40ch, 1fr));
          grid-gap: 60px;
          padding: 60px 0 80px;
        }

        .item {
          padding: 60px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
          /*font-size: clamp(1rem, 2vw, 1.5rem);*/
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
