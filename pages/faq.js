import Layout from '../components/layout'
import Header from '../components/shared/header'
import Newsletter from '../components/shared/newsletter'

export default function Faq({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            <h2>Frequently Asked Questions</h2>

            <div className='question'>
              <strong>Why is the price not $0.01 per card?</strong>
              <p>To cover the costs of payment processing fees.</p>
            </div>

            <div className='question'>
              <strong>Will this be available outside of the US?</strong>
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
        </main>

        <Newsletter />

        <style jsx>{`
          .question {
            margin: 20px auto;
          }
        `}</style>
      </Layout>
    </>
  )
}
