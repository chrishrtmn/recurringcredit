import Link from 'next/link'

export default function Faq() {
  return (
    <>
      <div className='wrapper' style={{ textAlign: 'center' }}>
        <h2>Frequently Asked Questions</h2>

        <div className='question'>
          <strong>Why is the price not $0.01 per card?</strong>
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
          <p>3 months to the day you subscribed with a credit card</p>
        </div>

        <div className='question'>
          <strong>
            Why use this when I can add Netflix or Spotify to each of my credit
            cards?
          </strong>
          <p>
            This service is mostly for people with 1-2 credit cards that don't
            want to have to manage them and keep track of whether their prices
            haven't changed or something. Knowing this is $1 a month ($3/every 3
            months) is easier to budget and expect.
          </p>
        </div>
      </div>
    </>
  )
}
