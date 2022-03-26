import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}
class Document extends NextDocument<Props> {
  render() {
    return <GreenFieldDocument />
  }
}

const GreenFieldDocument = () => {
  return (
    <Html>
      <Head>
      <link rel="preload" href="/fonts/getaway.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/Scudy.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/Tacenda.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
