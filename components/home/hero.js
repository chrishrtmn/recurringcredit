import stripeHandleClick from '../../libraries/stripe-handle-click'
import Header from '../shared/header'

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

              <h2>
                A simple recurring subscription to help keep your credit cards
                active and protect your creditworthiness.
              </h2>

              <button onClick={stripeHandleClick}>Add credit card</button>
            </div>

            <img src='/images/general/cards.svg' alt='' />
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

        @media (min-width: 1100px) {
          .container {
            display: grid;
            grid-template-columns: 660px 1fr;
            grid-gap: 40px;
            position: relative;
          }
        }

        .content {
          position: relative;
          max-width: 800px;
          margin: 60px 0 0;
          padding: 0 0 40px;
          color: #fff;
          transition: padding ease-in-out 1s;
        }

        @media (min-width: 700px) {
          .content {
            padding: 0 50px 60px;
          }
        }

        h1.title {
          font-size: 32px;
          line-height: 1.2;
        }

        @media (min-width: 700px) {
          h1.title {
            font-size: 40px;
          }
        }

        h2 {
          margin: 20px 0 50px;
          font-size: 16px;
          font-weight: 400;
        }

        @media (min-width: 700px) {
          h2 {
            font-size: 20px;
          }
        }

        @media (max-width: 700px) {
          .buttons {
            text-align: center;
          }
        }

        button {
          display: inline-block;
          min-width: 175px;
          margin: 0 0 20px;
          padding: 10px;
          border: 2px solid #f85b5b;
          background: #f85b5b;
          border-radius: 5px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          cursor: pointer;
          box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);
          transition: all ease-in-out 0.2s;
        }

        button:hover {
          box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
        }

        img {
          display: none;
        }

        @media (min-width: 1100px) {
          img {
            display: inline-block;
            position: absolute;
            right: 60px;
            bottom: 20px;
            z-index: 1;
            max-width: 350px;
            transition: bottom ease-in-out 1s;
          }
        }

        @media (min-width: 1500px) {
          img {
            bottom: 60px;
          }
        }
      `}</style>
    </>
  )
}
