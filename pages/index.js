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
            <p className='introduction'>
              Prevent credit dormancy and inactivity leading to closure and
              hurting your credit history.
            </p>

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
          padding: 40px 0 60px;
          text-align: center;
          font-size: 18px;
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
