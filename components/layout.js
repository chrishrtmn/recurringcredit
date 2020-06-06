import Head from 'next/head'
import Header from './header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <title>
          {/* <title> should be less than 55 characters for SEO */}
          {description} | {pageTitle}
        </title>
      </Head>

      <section className='layout'>
        <Header />
        <div className='content'>{children}</div>
      </section>
    </>
  )
}
