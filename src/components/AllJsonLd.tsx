import Head from 'next/head'
import SEO from '../next-seo.config'

export type WebPage = {
  url: string
  title: string
  description: string
  datePublished: string
  dateModified: string
}

export const AllJsonLd = ({
  webpage,
  additionalType
}: {
  webpage: WebPage
  additionalType?: { [key: string]: object | string }
}) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld(webpage, additionalType)) }}
      />
    </Head>
  )
}

export const fullname = `${SEO.openGraph?.profile?.firstName} ${SEO.openGraph?.profile?.lastName}`

const jsonld = (webpage: WebPage, additionalType?: { [key: string]: object | string }) => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': ['Person', 'Organization'], '@id': `${SEO.openGraph?.url}#person`, name: fullname },
      {
        '@type': 'WebSite',
        '@id': `${webpage.url}#website`,
        url: webpage.url,
        name: fullname,
        publisher: { '@id': `${SEO.openGraph?.url}#person` },
        inLanguage: 'it-IT'
      },
      {
        '@type': 'Person',
        '@id': `${SEO.openGraph?.url}#author`,
        name: fullname,
        image: {
          '@type': 'ImageObject',
          '@id': `${SEO.openGraph?.url}avatar.jpg`,
          url: `${SEO.openGraph?.url}avatar.jpg`,
          caption: fullname,
          inLanguage: 'it-IT'
        },
        sameAs: [
          'https://www.instagram.com/gianlucacarucci5/',
          'https://www.facebook.com/caruccigianluca/',
          'https://twitter.com/rucka'
        ]
      },
      {
        '@type': 'WebPage',
        '@id': `${webpage.url}#webpage`,
        url: webpage.url,
        name: webpage.title,
        datePublished: webpage.datePublished,
        dateModified: webpage.dateModified,
        author: { '@id': `${SEO.openGraph?.url}#author` },
        isPartOf: { '@id': `${SEO.openGraph?.url}#website` },
        inLanguage: 'it-IT'
      },
      additionalType
    ]
  }
}
