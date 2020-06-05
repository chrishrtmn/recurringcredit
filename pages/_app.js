import { useEffect } from 'react'
import Router from 'next/router'
import '../styles/main.scss'
import { getPageFiles } from 'next/dist/next-server/server/get-page-files'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      getPageFiles.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
