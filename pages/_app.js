import { useEffect } from 'react'
import Router from 'next/router'
import { trackPageView } from '../lib/analytics-ga'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
