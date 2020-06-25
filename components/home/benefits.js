export default function Benefits() {
  return (
    <>
      <div className='container'>
        {/*
        <div className='autopilot'>
          <h2>Get your credit back on autopilot.</h2>
          <p>
            A simple transaction can help prevent credit dormancy and
            inactivity.
          </p>
        </div>
        */}

        <div className='benefits'>
          <h2>Benefits</h2>
          <p>What we can do to help</p>
        </div>

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

        <div className='item last clear'>
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
          max-width: 960px;
          margin: 0 auto;
        }

        .benefits {
          margin: 20px 0;
          text-align: center;
          transition: margin ease-in-out 1s;
        }

        .benefits h2 {
          font-size: 28px;
        }

        @media (min-width: 700px) {
          .benefits {
            margin: 40px 0 20px;
          }

          .benefits h2 {
            font-size: 32px;
          }
        }

        @media (min-width: 1500px) {
          .benefits {
            margin: 80px 0 20px;
          }
        }

        .benefits p {
          font-size: 16px;
          color: var(--color-base-light);
        }

        @media (min-width: 700px) {
          .benefits p {
            font-size: 18px;
          }
        }

        .item {
          width: 100%;
          padding: 40px 0;
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

        .item.last {
          padding: 60px 0;
        }

        @media (min-width: 700px) {
          .item.last {
            padding: 40px 0 80px;
          }
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

          .item.right div {
            float: right;
          }
        }

        h3 {
          font-size: 20px;
        }

        @media (min-width: 700px) {
          h3 {
            font-size: 22px;
          }
        }

        .item p {
          font-size: 16px;
          color: var(--color-base-light);
        }

        @media (min-width: 700px) {
          .item p {
            font-size: 18px;
          }
        }

        img {
          max-width: 250px;
          max-height: 220px;
          margin: 0 auto;
        }

        @media (min-width: 700px) {
          img {
            float: left;
            margin: 0 40px 0 0;
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
