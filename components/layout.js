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
    </>
  )
}
