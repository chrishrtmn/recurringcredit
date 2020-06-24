import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Benefits from '../components/home/benefits'
import PricingFaq from '../components/home/pricing-faq'
import Newsletter from '../components/shared/newsletter'

export default function Index({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />

        <main>
          <div className='wrapper'>
            {/*
            <Introduction />
            */}

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

            <PricingFaq />

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
