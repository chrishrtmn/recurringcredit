import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script src='https://getinsights.io/static/js/insights.js'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                insights.init('${process.env.INSIGHT_TRACKING_ID}');
                insights.trackPages();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
