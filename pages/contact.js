import Layout from '../components/layout'
import Header from '../components/header'
import FormContact from '../libraries/form-contact'
import Newsletter from '../components/newsletter'

export default function Contact({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            <h2>This is the Contact page.</h2>

            <FormContact />
          </div>
        </main>

        <Newsletter />
      </Layout>
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
