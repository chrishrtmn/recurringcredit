import Layout from '../components/layout'
import Hero from '../components/hero'

export default function Index({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero />

        <main>
          <p>This is the home page</p>

          <p>Lorem ipsum.</p>

          <div id='about'>This is the about section.</div>
        </main>
        <style jsx>{`
          main > p:first-of-type {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
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
