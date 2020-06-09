import Link from 'next/link'
import stripeHandleClick from '../lib/stripe-handle-click'

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='background'></div>
        <div className='content'>
          <h1 className='title'>Prevent credit card inactivity.</h1>
          <h2>
            Start a recurring subscription to keep your credit cards active and
            your credit history intact.
          </h2>
          <button className='button-fill' onClick={stripeHandleClick}>
            Add Credit Card
          </button>
          <Link href='#about'>
            <a className='button-border'>Learn more</a>
          </Link>
        </div>
      </div>
    </>
  )
}
