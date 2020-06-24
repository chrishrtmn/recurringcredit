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
            <h1>Contact</h1>

            <p>
              Please contact us if you are having difficulties with
              cancellations or editing your subscription.
            </p>

            <p>Provide feedback on our site, service or other!</p>

            <FormContact />

            <Faq />
          </div>
        </main>

        <Newsletter />
      </Layout>

      <style jsx>{`
        h1 {
          font-size: 40px;
        }

        p {
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
      description: configData.default.descriptionContact,
    },
  }
}
