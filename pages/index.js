import Layout from '../components/layout'
import Hero from '../components/hero'

const Index = ({ title, description, ...props }) => {
  return (
    <>
      <Hero />>
      <Layout pageTitle={title} description={description}>
        <p className='description'>
          This is a simple blog built with Next, easily deployable on{' '}
          <a href='https://url.netlify.com/r1j6ybSYU'>Netlify</a>.
        </p>
        <main>This is the home page</main>
        <p>
          You can look at the repository for this project{' '}
          <a href='https://github.com/cassidoo/next-netlify-blog-starter'>
            here
          </a>
          , and a tutorial on how to build it {` `}
          <a href='https://url.netlify.com/ByVW0bCF8'>here</a>.
        </p>
      </Layout>
      <style jsx>{``}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
