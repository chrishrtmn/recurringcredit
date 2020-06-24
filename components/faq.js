import Link from 'next/link'

export default function Faq() {
  return (
    <>
      <div id='faqs' className='faqs'>
        <h2>Frequently Asked Questions</h2>

        <div className='question'>
          <strong>Why is the price not $0.01 cent per card?</strong>
          <p>To cover the costs of payment processing fees.</p>
        </div>

        {/*
        <div className='question'>
          <strong>Why don't I just close my credit cards I don't use?</strong>
          <p>
            Hurts credit score. Only reasons you may want to are annual fees
            (which sometimes be opted out of if there’s transactional history -
            like us!) or you can’t control your credit card usage/spending
          </p>
        </div>
        */}

        <div className='question'>
          <strong>When will my card be charged?</strong>
          <p>3 months to the day you subscribed with a credit card.</p>
        </div>

        <div className='question'>
          <strong>
            Why use this when I can add Netflix or Spotify to each of my credit
            cards?
          </strong>
          <p>
            Our service is just $1 every 3 months, making it easier to expect
            and budget.
          </p>
          <p>Other subscriptions may change their prices unexpectedly.</p>
        </div>
      </div>

      <style jsx>{`
        .faqs {
          margin: 60px 0 20px;
          padding: 60px 0;
          text-align: center;
          border-top: 3px solid var(--color-base-light);
        }

        h2 {
          font-size: 32px;
          padding: 0 0 40px;
        }

        .question:not(:last-of-type) {
          padding: 0 0 60px;
        }

        .question strong {
          font-size: 20px;
        }

        .question p {
          font-size: 18px;
          color: var(--color-base-light);
        }
      `}</style>
    </>
  )
}
