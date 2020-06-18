import Layout from '../components/layout'
import Header from '../components/header'
import Newsletter from '../components/newsletter'

export default function Contact({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            <p>This is the Contact page.</p>
          </div>
        </main>

        <Newsletter />
      </Layout>
    </>
  )
}
