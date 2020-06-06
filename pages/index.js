import Layout from '../components/layout'
import stripeHandleClick from '../lib/stripe-handle-click'
import Hero from '../components/hero'

export default function Index({ title, description, ...props }) {
  return (
    <>
      <Hero />
      <Layout pageTitle={title} description={description}>
        <main>This is the home page</main>
        <footer>
          <div>This is the ROOT_URL: {process.env.NEXT_PUBLIC_ROOT_URL}</div>
          <button onClick={stripeHandleClick}>STRIPE BUTTON</button>
        </footer>
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
