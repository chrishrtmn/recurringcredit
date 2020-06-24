export default function Introduction() {
  return (
    <>
      <div className='introduction'>
        <div>
          <p>
            Prevent credit dormancy and inactivity leading to closure and
            hurting your credit history.
          </p>
        </div>
        <div>
          <p>
            Store cards can close within 3 months of non-activity whereas
            banking cards can take up to 6 months.
          </p>
        </div>
        <div>
          <p>
            Store cards can close within 3 months of non-activity whereas
            banking cards can take up to 6 months.
          </p>
        </div>
      </div>

      <style jsx>{`
        .introduction {
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 0 80px;
          text-align: center;
          font-size: 18px;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 40px;
        }

        @media (min-width: 900px) {
          .introduction {
            grid-template-columns: 1fr 1fr 1fr;
            padding: 80px 0 120px;
          }
        }

        .introduction div {
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        p {
          color: var(--color-base-light);
        }
      `}</style>
    </>
  )
}
