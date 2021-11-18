import PlausibleProvider from 'next-plausible'
import '../styles/main.css'
import 'aos/dist/aos.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain='recurringcredit.com'>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
