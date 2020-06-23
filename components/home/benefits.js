import { Cards, Thinking } from '../../libraries/constants-svg'

export default function Benefits() {
  return (
    <>
      <div className='benefits'>
        <div>
          <h3>Dodge fees.</h3>
          <p>
            Credit companies may deny you from opting out of annual fees due to
            zero activity.
          </p>
        </div>

        <div>
          <h3>Avoid rejection.</h3>
          <p>Credit limit increase rejections from low credit usage.</p>
        </div>

        <div>
          <h3>Keep score.</h3>
          <p>
            Credit companies may close your accounts with no notice, causing a
            drop in your score.
          </p>
        </div>
      </div>

      <style jsx>{`
        .benefits {
          padding: 60px 0;
          text-align: center;
        }

        .benefits div {
          padding: 60px 0 0;
        }
      `}</style>
    </>
  )
}
