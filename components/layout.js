import Head from 'next/head'
import HeadTags from './head-tags'
import Footer from './footer'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          {/* <title> should be less than 55 characters for SEO */}
          {description} | {pageTitle}
        </title>
        <HeadTags />
      </Head>

      {children}

      <Footer />

      <style jsx global>{`
        body,
        #__next {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        .wrapper {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (min-width: 900px) {
          .wrapper {
            max-width: 900px;
          }
        }

        @media (min-width: 1200px) {
          .wrapper {
            max-width: 1200px;
          }
        }
      `}</style>
    </>
  )
}
