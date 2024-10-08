import Link from 'next/link'
import stripeHandleClick from '../../libraries/stripe-handle-click'

export default function PricingFaq() {
  return (
    <>
      <div id='pricing' className='container'>
        <div className='item get-started'>
          <h3>Ready to get started?</h3>
          <p>
            Our subscription keeps your credit cards active every{' '}
            <span>3 months</span> for just
          </p>
          <p>
            <strong>
              <span>
                <sup>$</sup>1.00
              </span>{' '}
              <em>(per card)</em>
            </strong>
          </p>
          <a
            className='button'
            href='#'
            onclick='return false;'
          >
            Inactive
          </a>
        </div>

        <div className='item questions'>
          <h3>Still have questions?</h3>
          <p>See our frequently asked questions</p>
          <p>
            <Link href='/contact#faqs'>
              <a>
                Visit our FAQs <i className='gg-arrow-right-o'></i>
              </a>
            </Link>
          </p>
          <div>
            <p>Provide us with feedback or concerns</p>
          </div>
          <p>
            <Link href='/contact'>
              <a>
                Contact us <i className='gg-arrow-right-o'></i>
              </a>
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-gap: 60px;
          padding: 60px 0 80px;
        }

        @media (min-width: 800px) {
          .container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .item {
          padding: 40px 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
          /*font-size: clamp(1rem, 2vw, 1.5rem);*/
        }

        @media (min-width: 700px) {
          .item {
            padding: 40px 60px 60px;
          }
        }

        .get-started {
          border-top: 40px solid var(--color-secondary);
          transition: all ease-in-out 0.2s;
        }

        .get-started p {
          margin: 20px 0;
          font-size: 16px;
        }

        @media (min-width: 700px) {
          .get-started p {
            font-size: 18px;
          }
        }

        .get-started p > span {
          color: var(--color-secondary);
        }

        .get-started strong {
          font-size: 16px;
          font-weight: 400;
          line-height: 1;
          color: var(--color-base);
        }

        .get-started strong span {
          position: relative;
          left: -7px;
          display: block;
          font-size: 40px;
          font-weight: 700;
          color: var(--color-secondary);
        }

        .get-started strong span sup {
          font-size: 24px;
        }

        a.button {
          display: inline-block;
          min-width: 175px;
          margin: 20px 0 0;
          padding: 10px;
          border: 2px solid var(--color-secondary);
          background: var(--color-secondary);
          border-radius: 5px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
          transition: all ease-in-out 0.2s;
          text-decoration: none;
          text-align: center;
          pointer-events: none;
          cursor: not-allowed;
          text-decoration: none;
        }

        a.button:hover {
          box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
        }

        h3 {
          font-size: 22px;
        }

        @media (min-width: 700px) {
          .questions {
            border-top: 40px solid transparent;
          }
        }

        .questions p {
          margin: 20px 0;
          font-size: 16px;
        }

        @media (min-width: 700px) {
          .questions p {
            font-size: 18px;
          }
        }

        .questions a {
          padding: 10px;
          border: 2px solid var(--color-primary);
          border-radius: 4px;
          color: var(--color-primary);
          text-decoration: none;
        }

        .questions a:hover {
          background: var(--color-primary);
          color: #fff;
        }

        .questions div {
          margin: 40px 0 0;
        }

        .gg-arrow-right-o {
          box-sizing: border-box;
          position: relative;
          top: 4px;
          display: inline-block;
          margin: 0 0 0 4px;
          width: 22px;
          height: 22px;
          border: 2px solid;
          transform: scale(var(--ggs, 1));
          border-radius: 20px;
        }

        .gg-arrow-right-o::after,
        .gg-arrow-right-o::before {
          content: '';
          display: block;
          box-sizing: border-box;
          position: absolute;
          right: 4px;
        }

        .gg-arrow-right-o::after {
          width: 6px;
          height: 6px;
          border-top: 2px solid;
          border-right: 2px solid;
          transform: rotate(45deg);
          bottom: 6px;
        }

        .gg-arrow-right-o::before {
          width: 10px;
          height: 2px;
          bottom: 8px;
          background: currentColor;
        }
      `}</style>
    </>
  )
}
