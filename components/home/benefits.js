import { Cards, Thinking } from '../../libraries/constants-svg'

export default function Benefits() {
  return (
    <>
      <div className='container'>
        <div className='item clear'>
          <img src='/images/general/payment.svg' alt='' />
          <div>
            <h3>Dodge fees.</h3>
            <p>
              Credit companies may deny you from opting out of annual fees due
              to zero activity.
            </p>
          </div>
        </div>

        <div className='item right clear'>
          <img src='/images/general/ideas.svg' alt='' />
          <div>
            <h3>Avoid rejection.</h3>
            <p>
              Low credit usage may contribute to credit limit increase
              rejections.
            </p>
          </div>
        </div>

        <div className='item clear'>
          <img src='/images/general/chart.svg' alt='' />
          <div>
            <h3>Keep score.</h3>
            <p>
              Credit companies may close your accounts without notice, causing a
              decrease in your credit score.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .item {
          width: 100%;
          padding: 0 0 60px;
          text-align: center;
        }

        @media (min-width: 700px) {
          .item {
            text-align: left;
          }

          .item.right {
            text-align: right;
          }
        }

        .item:last-of-type {
          padding: 0 0 120px;
        }

        .item div {
          padding: 20px 0 0;
        }

        @media (min-width: 700px) {
          .item div {
            overflow: hidden;
            max-width: 500px;
            padding: 60px 0 0;
          }
        }

        h3 {
          font-size: 24px;
        }

        @media (min-width: 700px) {
          h3 {
            font-size: 28px;
          }
        }

        p {
          font-size: 18px;
        }

        img {
          max-width: 250px;
          margin: 0 auto;
        }

        @media (min-width: 700px) {
          img {
            float: left;
            margin: 0 40px 0;
          }

          .item.right img {
            float: right;
            margin: 0 0 0 40px;
          }
        }
      `}</style>
    </>
  )
}
