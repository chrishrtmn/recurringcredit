import Layout from '../components/layout'
import Header from '../components/header'

export default function Faq({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <div className='wrapper'>
          <h2>Frequently Asked Questions</h2>

          <div className='question'>
            <strong>Why can't I subscribe...</strong>
            <p>The cost is the same for both...</p>
          </div>

          <div className='question'>
            <strong>Why can't I subscribe...</strong>
            <p>The cost is the same for both...</p>
          </div>

          <div className='question'>
            <strong>Why can't I subscribe...</strong>
            <p>The cost is the same for both...</p>
          </div>
        </div>

        <style jsx>{`
          .question {
            margin: 20px auto;
          }
        `}</style>
      </Layout>
    </>
  )
}
