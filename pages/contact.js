import Layout from '../components/layout'
import Header from '../components/shared/header'
import Faq from '../components/faq'
import FormContact from '../libraries/form-contact'
import Newsletter from '../components/shared/newsletter'

export default function Contact({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            <div className='contact'>
              <h1>Contact</h1>

              <p>
                Please contact us if you are having difficulties with
                cancellations or editing your subscription.
              </p>

              <p>Provide feedback on our site, service or other!</p>

              <FormContact />
            </div>

            <Faq />
          </div>
        </main>

        <Newsletter />
      </Layout>

      <style jsx>{`
        .contact {
          padding: 0 0 40px;
          border-bottom: 3px solid var(--color-base-light);
        }

        h1 {
          font-size: 34px;
        }

        p {
          font-size: 16px;
        }

        @media (min-width: 700px) {
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

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.descriptionContact,
    },
  }
}
