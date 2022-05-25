import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'Gianluca Carucci | Software Engineer',
  canonical: 'https://gianluca.carucci.org/',
  description:
    'tutto ciò che uno sviluppatore deve sapere per diventare un leader e asset strategico per la propria azienda',
  robotsProps: {
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: 'large'
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://gianluca.carucci.org/',
    site_name: 'Gianluca Carucci',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Gianluca Carucci | Software Engineer',
        type: 'image/png',
        width: 500,
        height: 355
      }
    ],
    profile: { firstName: 'Gianluca', lastName: 'Carucci', gender: 'male', username: 'gianlucacarucci5' }
  },
  twitter: {
    handle: '@rucka',
    site: '@rucka',
    cardType: 'summary_large_image'
  },
  facebook: {
    appId: '772121789983174'
  }
}

export default config
