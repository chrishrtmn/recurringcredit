import { useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '../libraries/metrics-google-analytics'
import Popup from 'reactjs-popup'
import Nav from '../components/shared/nav'
import NavSidebar from '../components/shared/nav-sidebar'
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Popup
        modal
        overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
        closeOnDocumentClick={false}
        trigger={(open) => <Nav open={open} />}
      >
        {(close) => <NavSidebar close={close} />}
      </Popup>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
