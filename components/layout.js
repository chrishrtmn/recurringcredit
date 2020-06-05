import Head from 'next/head'
import Header from './header'
{
  /*
import absoluteUrl from '../utils/absolute-url'

const { origin } = absoluteUrl(req, 'localhost:3000')
  */
}

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

        <button role='link'>Subscribe</button>

        <footer>Built by me!</footer>
      </section>
    </>
  )
}
