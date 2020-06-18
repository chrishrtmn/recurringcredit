import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Disclaimer({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Header />

        <main>
          <div className='wrapper'>
            <h1>RecurringCredit Disclaimer</h1>

            <h2>Consent</h2>

            <p>
              By using <a href='/'>recurringcredit.com</a>, you hereby consent
              to our disclaimer and agree to its terms.
            </p>

            <p>
              recurringcredit.com will not be liable for any damages experienced
              in connection with the use of our service.
            </p>

            <p>
              <strong>
                If you do not agree to our Disclaimer STOP now and do not access
                or use this service.
              </strong>
            </p>

            <h2>Educational and Informational Purposes</h2>

            <p>
              The information contained on this service is intended for
              educational and informational purposes only. It is not intended to
              be a substitute of either the written law or regulations.
            </p>

            <h2>Not Legal or Financial Advice</h2>

            <p>
              The authors of recurringcredit.com are not legal or financial
              advisors and therefore the information found on this service is
              not intended to be used in place of professional legal and/or
              financial advice.
            </p>

            <p>
              We have taken care to ensure the information contained on this
              service is correct however, we are not responsible for any errors
              or omissions.
            </p>

            <h2>External Links </h2>

            <p>
              Some links on this service connect to external websites which are
              maintained by third parties. recurringcredit.com is not
              responsible for any of the information provided by a third party
              website.{' '}
            </p>

            <p>
              You are subject to the terms and conditions, disclaimer, and
              privacy policy of the third party websites when you leave our
              service.
            </p>

            <h2>Personal Responsibility</h2>

            <p>
              You acknowledge you are using our service voluntarily and that any
              choices, actions and results now and in the future are solely your
              responsibility.
            </p>

            <p>
              recurringcredit.com will not be liable to you or any other party
              for any decision made or action taken in reliance on the
              information given by our service.
            </p>

            <h2>Contact & Credit</h2>

            <p>
              By using our service you are agreeing to the above disclaimer.
              Should you have any queries regarding anything in this disclaimer
              please contact us at:{' '}
              <a href='https://recurringcredit.com/contact'>
                recurringcredit.com/contact
              </a>
            </p>

            <p>
              <em>This page was last updated on June 18, 2020.</em>
            </p>
          </div>
        </main>
      </Layout>
    </>
  )
}
