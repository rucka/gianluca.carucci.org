import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo,  } from 'next-seo'
import SEO from '../next-seo.config'
import { GlobalStyle, FoticoTheme } from '../../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[{ property: 'og:updated_time', content: `${new Date().toISOString()}` }]}
      />
      <ThemeProvider theme={FoticoTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
