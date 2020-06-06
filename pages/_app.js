import '../styles/main.scss'

export async function getServerSideProps(context) {
  const { req } = context
  return {
    props: {},
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
