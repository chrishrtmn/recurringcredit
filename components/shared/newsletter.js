import FormNewsletter from '../../libraries/form-newsletter'

export default function Newsletter() {
  return (
    <>
      <div className='newsletter'>
        <div className='wrapper'>
          <h2>Sign up for our newsletter</h2>
          <p>Get notified by email when we release new updates and articles.</p>
        </div>

        <FormNewsletter />
      </div>

      <style jsx>{`
        .newsletter {
          padding: 60px 0;
          text-align: center;
          background: #112a6b;
          color: #fff;
        }
      `}</style>
    </>
  )
}
