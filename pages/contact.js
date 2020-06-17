import Layout from '../components/layout'
import Header from '../components/header'

export default function Contact({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <div className='wrapper'>
          <main>This is the Contact page.</main>
        </div>
      </Layout>
    </>
  )
}
