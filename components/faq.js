import Link from 'next/link'

export default function Faq() {
  return (
    <>
      <div id='faqs' className='faqs'>
        <h2>Frequently Asked Questions</h2>

        <div className='question'>
          <strong>Why is the price not $0.01 cent per card instead?</strong>
          <p>
            We only charge $1.00 to cover the costs of payment processing fees
            on our end and to keep our service operating smoothly.
          </p>
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
          <p>
            3 months to the day you subscribed with a credit card. If it falls
            on a weekend, the transaction will take place on the next business
            day.
          </p>
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
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 0;
          text-align: center;
        }

        h2 {
          font-size: 26px;
          line-height: 1.2;
          padding: 0 0 40px;
        }

        @media (min-width: 700px) {
          h2 {
            font-size: 32px;
          }
        }

        .question:not(:last-of-type) {
          padding: 0 0 40px;
        }

        .question strong {
          font-size: 18px;
        }

        .question p {
          font-size: 16px;
          color: var(--color-base-light);
        }

        @media (min-width: 700px) {
          .faqs {
            margin: 20px auto 40px;
          }

          .question strong {
            font-size: 20px;
          }

          .question p {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  )
}
