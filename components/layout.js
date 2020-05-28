import Head from 'next/head'

import Header from './header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          {pageTitle} | {description}
        </title>
      </Head>

      <section className='layout'>
        <Header />
        <div className='content'>{children}</div>
      </section>

      <footer>Built by me!</footer>
    </>
  )
}