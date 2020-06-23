export default function Averages() {
  return (
    <>
      <div className='boxes'>
        <div className='box'>
          The average person in the US have at least 3 credit cards. Etc.
        </div>
        <div className='box'>
          The average person has 2 major banking credit cards.
        </div>
        <div className='box'>The average person has 1 store credit cards.</div>
      </div>

      <style jsx>{`
        .boxes {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
        }
      `}</style>
    </>
  )
}
