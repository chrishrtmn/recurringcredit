import Layout from '../components/layout'
import Header from '../components/shared/header'

export default function ReleaseNotes({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            <h1>Release Notes</h1>
          </div>
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
      description: configData.default.descriptionRelease,
    },
  }
}
