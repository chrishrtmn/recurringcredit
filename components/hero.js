import Link from 'next/link'
import stripeHandleClick from '../lib/stripe-handle-click'
import Header from './header'

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='background'></div>

        <Header />

        <div className='wrapper'>
          <div className='content'>
            <h1 className='title'>Prevent credit card inactivity.</h1>

            <h2>
              Start a recurring subscription to keep your credit cards active
              and your credit history intact.
            </h2>

            <button className='button-fill' onClick={stripeHandleClick}>
              Add Credit Card
            </button>

            <Link href='#about'>
              <a className='button-border'>Learn more</a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 540px;
          overflow: hidden;
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
        }

        .content {
          position: relative;
          color: white;
        }
      `}</style>
    </>
  )
}
