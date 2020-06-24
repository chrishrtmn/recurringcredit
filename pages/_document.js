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
          {/* Metrics - Insights */}
          <script src='https://getinsights.io/static/js/insights.js'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                insights.init('${process.env.NEXT_PUBLIC_INSIGHT_TRACKING_ID}');
                insights.trackPages();
              `,
            }}
          />

          {/* Metrics - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />

          {/* Favicons */}
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/favicon/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/favicon/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/favicon/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/favicon/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/favicon/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/favicon/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/favicon/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/favicon/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/favicon/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/favicon/ms-icon-144x144.png'
          />
          <meta name='theme-color' content='#ffffff' />

          {/* Fonts */}
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
            rel='stylesheet'
          ></link>

          {/* Other Properties */}
          {/*<meta name='description' content={description} />*/}
          <link rel='alternate' type='application/rss+xml' href='/feed.xml' />

          {/* Twitter */}
          <meta name='twitter:card' content='summary' key='twcard' />
          {/*<meta name='twitter:creator' content={twitterHandle} key='twhandle' />*/}

          {/* Open Graph */}
          {/*
          <meta property='og:url' content={currentURL} key='ogurl' />
          <meta property='og:image' content={previewImage} key='ogimage' />
          <meta property='og:site_name' content={siteName} key='ogsitename' />
          <meta property='og:title' content={pageTitle} key='ogtitle' />
          <meta property='og:description' content={description} key='ogdesc' />
          */}
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
