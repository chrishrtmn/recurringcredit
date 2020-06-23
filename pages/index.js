import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Benefits from '../components/home/benefits'
import Newsletter from '../components/shared/newsletter'

export default function Index({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />

        <main>
          <div className='wrapper'>
            <div className='introduction'>
              <p>
                Prevent credit dormancy and inactivity leading to closure and
                hurting your credit history.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Store cards can close within 3 months of non-activity whereas
                banking cards can take up to 6 months.
              </p>
            </div>

            {/*
            <UseCases/>
            */}

            {/*
            <Averages />
            */}

            <Benefits />

            {/*
            <div>
              <h3>Simplify your accounts. Worry-free transactions.</h3>
              <p>
                Manage each credit card with a single transaction every three
                months to keep it active.
              </p>
            </div>
            */}

            {/*
            <Pricing />
            */}

            {/*
            <Statistics />
            */}

            {/*
            <Clients />
            */}

            {/*
            <Press />
            */}

            {/*
            <Security />
            */}

            {/*
            <CtaFaq />
            */}
          </div>

          <Newsletter />
        </main>
      </Layout>

      <style jsx>{`
        .introduction {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 0 80px;
          text-align: center;
          font-size: 18px;
        }

        @media (min-width: 1100px) {
          .introduction {
            padding: 80px 0 120px;
          }
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
