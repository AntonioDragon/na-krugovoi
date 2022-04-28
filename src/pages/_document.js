import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name='google-site-verification'
          content='T3rXDKZ7lh1va4XuJF8XNb9aQj3abQONqYBbPQJTZFo'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <div className='portals' />
        <NextScript />
      </body>
    </Html>
  )
}
