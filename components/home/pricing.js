export default function Pricing() {
  return (
    <>
      <div id='pricing' className='pricing'>
        <h2>Pricing</h2>

        <div>$1 every 3 months =</div>
        <div>$4 every year</div>
        <p>(Per card)</p>
      </div>

      <style jsx>{`
        .pricing {
          padding: 60px 0;
          text-align: center;
        }
      `}</style>
    </>
  )
}
