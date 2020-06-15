export default function HeadTags() {
  return (
    <>
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
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicons/safari-pinned-tab.svg'
        color='#000000'
      />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='theme-color' content='#000' />

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
    </>
  )
}
