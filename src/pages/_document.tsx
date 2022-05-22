import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { GTMBody, GTMScript } from '../components'

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
        <GTMScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <GTMBody />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
