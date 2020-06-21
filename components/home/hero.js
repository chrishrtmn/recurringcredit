import Link from 'next/link'
import stripeHandleClick from '../../libraries/stripe-handle-click'
import Header from '../shared/header'
import { CreditCard } from '../../libraries/constants-svg'

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='background'></div>

        <Header />

        <div className='wrapper'>
          <div className='container'>
            <div className='content'>
              <h1 className='title'>Prevent credit card closures.</h1>

              {/*
              <h2>
                Manage your credit card history by subscribing to our simple
                recurring plan.
              </h2>
              */}

              {/*
              <h2>
                Recurring subscription for credit card management for
                minimalists.
              </h2>
              */}

              <h2>
                Start a simple recurring subscription to keep your credit cards
                active and your credit history safe.
              </h2>

              <div className='buttons'>
                <button className='fill' onClick={stripeHandleClick}>
                  Add credit card
                </button>

                <Link href='#about'>
                  <button className='outline'>Learn more</button>
                </Link>
              </div>
            </div>

            <div className='image'>
              $1 / 3mo.
              <CreditCard />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          overflow: hidden;
          padding: 80px 0 0;
        }

        .hero :global(header) {
          position: absolute;
          top: 0;
          width: 100%;
          background: none;
        }

        .background {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #363795, #112a6b);
          transform: skewY(-6deg);
          transform-origin: top left;
          transition: transform ease-in-out 1s;
        }

        @media (min-width: 1500px) {
          .background {
            transform: none;
          }
        }

        @media (min-width: 900px) {
          .container {
            display: grid;
            grid-template-columns: 660px 1fr;
            grid-gap: 40px;
          }
        }

        .content {
          position: relative;
          margin: 40px 0 0;
          padding: 0 0 60px;
          color: #fff;
          transition: padding ease-in-out 1s;
        }

        @media (min-width: 600px) {
          .content {
            padding: 0 50px 100px;
          }
        }

        @media (min-width: 900px) {
          .content {
            /*max-width: 660px;*/
          }
        }

        @media (min-width: 1500px) {
          .content {
            padding: 0 50px 60px;
          }
        }

        h1.title {
          font-size: 40px;
          line-height: 1.2;
        }

        h2 {
          margin: 20px 0 50px;
          font-size: 20px;
          font-weight: 400;
        }

        @media (max-width: 600px) {
          .buttons {
            text-align: center;
          }
        }

        button {
          position: relative;
          top: 0;
          min-width: 175px;
          margin: 0 10px 20px;
          padding: 10px;
          border: 2px solid transparent;
          border-radius: 5px;
          background: #eee;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          cursor: pointer;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
          transition: all ease-in-out 0.2s;
        }

        @media (min-width: 600px) {
          button {
            margin: 0;
          }

          button.fill {
            margin: 0 20px 0 0;
          }
        }

        button:hover {
          top: 2px;
          box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
        }

        button.fill {
          border: 2px solid #f85b5b;
          background: #f85b5b;
        }

        button.outline {
          border-color: #fff;
          background: none;
        }

        .image {
          display: none;
        }

        @media (min-width: 900px) {
          .image {
            display: inline-block;
            position: relative;
            z-index: 1;
          }
        }
      `}</style>
    </>
  )
}
