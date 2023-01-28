import md from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import Head from 'next/head'
import styled, { css, CSSProp, DefaultTheme } from 'styled-components'
import Layout from '../../components/Layout'
import { Header, postList, readPostFromSlug } from '../../services/postsService'
import { AllJsonLd, Comments } from '../../components'
import { device } from '../../device'
import { NextSeo } from 'next-seo'
import SEO from '../../next-seo.config'

type PostProps = { slug: string; header: Header; content: string }

const DESKTOP_COLUMN_SIZE = '650px'

export default function PostPage({ slug, header, content }: PostProps) {
  const mdRender = md({
    highlight: (str, lang) => hljs.highlight(str, { language: lang }).value
  })
  const __html = mdRender.render(content)
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostSEO slug={slug} header={header} />
      <Layout mainCss={mainCss}>
        <PostContainer>
          <PostHeader>
            <PostTitle>{header.title}</PostTitle>
            <span>{header.metaDesc}</span>
          </PostHeader>
          <PostImage src={header.socialImage ?? ''} />
          <PostContent dangerouslySetInnerHTML={{ __html }} />
          <Comments
            identifier={slug}
            title={header.title}
            css={css`
              margin-top: 5rem;
              margin-left: auto;
              margin-right: auto;
              @media ${device.laptop} {
                max-width: ${DESKTOP_COLUMN_SIZE};
              }
            `}
          />
        </PostContainer>
      </Layout>
    </>
  )
}

const PostSEO = ({ slug, header }: Omit<PostProps, 'content'>) => {
  const url = `${SEO.openGraph?.url}post/${slug}`
  const title = header.metaTitle ?? ''
  const description = header.metaDesc ?? ''

  const imageUrl = `${SEO.openGraph?.url}${header.socialImage}`
  const datePublished = extractDatePublished(header)
  const dateModified = header.modifiedDate
  return (
    <>
      <NextSeo
        title={header.metaTitle}
        description={header.metaDesc}
        openGraph={{
          url,
          images: [
            {
              url: imageUrl,
              alt: header.metaTitle,
              type: 'image/jpg',
              width: 1110,
              height: 720
            }
          ]
        }}
        additionalMetaTags={[
          {
            property: 'twitter:title',
            content: header.metaTitle ?? ''
          },
          {
            property: 'twitter:description',
            content: header.metaDesc ?? ''
          },
          {
            property: 'twitter:image',
            content: imageUrl
          },
          {
            property: 'article:publisher',
            content: 'https://www.facebook.com/caruccigianluca'
          },
          {
            property: 'article:published_time',
            content: datePublished
          },
          {
            property: 'article:modified_time',
            content: dateModified
          }
        ]}
      />
      <AllJsonLd
        webpage={{
          url,
          title,
          description,
          datePublished,
          dateModified
        }}
        additionalType={{
          '@type': 'BlogPosting',
          headline: title,
          keywords: header.tags?.join(' ') ?? '',
          datePublished,
          dateModified,
          author: { '@id': `${SEO.openGraph?.url}#author` },
          publisher: { '@id': `${SEO.openGraph?.url}#person` },
          description,
          name: title,
          '@id': `${url}/#richSnippet`,
          isPartOf: {
            '@id': `${url}/#webpage`
          },
          image: {
            '@id': imageUrl
          },
          inLanguage: 'it-IT',
          mainEntityOfPage: {
            '@id': `${url}/#webpage`
          }
        }}
      />
    </>
  )
}

const extractDatePublished = (header: Header) => {
  const date = header.date ?? '20220601'
  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6, 8)
  return `${year}-${month}-${day}T18:05:05+02:00`
}

export async function getStaticPaths() {
  const paths = (await postList()).map((p) => ({ params: { slug: p.slug } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const { header, content } = await readPostFromSlug(slug)
  return {
    props: {
      slug,
      header,
      content
    }
  }
}

const mainCss: CSSProp<DefaultTheme> = css`
  /* margin-top: 60px; */
  max-width: 1140px;
  padding-right: 3rem;
  padding-left: 3rem;
  margin-right: auto;
  margin-left: auto;

  @media ${device.laptop} {
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
  }
`

const PostContainer = styled.div`
  position: relative;
  margin-bottom: 4.28rem;
  padding-top: 4.28rem;
`
const PostHeader = styled.header`
  max-width: 970px;
  margin-bottom: 4.28rem;
  margin-left: auto;
  margin-right: auto;
  span {
    display: inline-block;
    font-size: 1.28rem;
    font-weight: 400;
    width: 100%;
    text-align: center;
  }
`

const PostTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  @media ${device.tablet} {
    font-size: 3.8571rem;
  }
  @media ${device.laptop} {
    font-size: 3.8571rem;
  }
`

const PostImage = styled.img`
  object-fit: cover;
  max-width: 1110px;
  max-height: 720px;
  object-position: 0 0;
  width: 100%;
  vertical-align: middle;
  border-style: none;
  margin-bottom: 4.28rem;
`

const PostContent = styled.div`
  font-family: 'Roboto', serif;
  line-height: 1.5;

  margin-left: auto;
  margin-right: auto;
  @media ${device.laptop} {
    max-width: ${DESKTOP_COLUMN_SIZE};
  }

  img {
    width: 100%;
    @media ${device.laptop} {
      max-width: ${DESKTOP_COLUMN_SIZE};
    }
    display: block;
    margin: 3rem auto;
  }

  a {
    background-color: ${(p) => p.theme.black};
    padding: 0.1rem 0.25rem;
    color: ${(p) => p.theme.white};
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 3.4rem;
  }
  h1 {
    font-size: 3.8571rem;
    margin-bottom: 3.4rem;
  }
  h2 {
    font-size: 3.1428rem;
    /* font-size: 2rem; */
    margin-bottom: 3.4rem;
  }
  h3 {
    /* font-size: 2.4285rem; */
    font-size: 2.2rem;
    margin-bottom: 1.71rem;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 2.28rem;
  }
  h5 {
    font-size: 1.715rem;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  h6 {
    font-size: 1.286rem;
    margin-bottom: 1.6rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.15rem;
  }
  li {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  blockquote {
    font-family: Roboto, sans-serif;
    font-size: 1.71rem;
    font-weight: 400;
    margin: 3.42rem 0 2.4rem;
    /* padding-top: 4.4rem; */
    position: relative;
    line-height: 1.6;
    border-left: 3px rgb(208, 103, 142) dashed;
    padding-left: 1rem;
    background-color: #fbf6f0;
    font-style: italic;

    p:nth-child(2) {
      color: #a1a1a1;
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
    }
  }

  pre p {
    font-style: italic;
  }
`
