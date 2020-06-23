export default function CtaFaq() {
  return (
    <>
      <div className='container'>
        <div className='item get-started'>
          <h2>Ready to get started?</h2>
          <strong>Get on autopilot with your cards on autopay.</strong>
          <p>Let us help keep your accounts active</p>
          <p>Initial steps followed by what will happen.</p>
          <p>$1 every 3 months.</p>
          <button className='fill alt' onClick={stripeHandleClick}>
            Add credit card
          </button>
        </div>

        <div className='item'>
          <h3>Still have questions?</h3>
          <p>Visit our FAQs section</p>
          <p>or</p>
          <p>Contact us</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(40ch, 1fr));
          grid-gap: 60px;
          padding: 60px 0 80px;
        }

        .item {
          padding: 60px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
          /*font-size: clamp(1rem, 2vw, 1.5rem);*/
        }

        .item p {
          margin: 20px 0;
        }
      `}</style>
    </>
  )
}
