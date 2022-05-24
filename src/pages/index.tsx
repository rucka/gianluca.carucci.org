import Head from 'next/head'
import useGeolocation from '../hooks/useGeolocation'
//@ts-ignore
import { AboutMe, BlogPosts, Testimonial } from '../components/Home'
import { AllJsonLd, Hero } from '../components'
import React from 'react'
import Layout from '../components/Layout'
import { PostInfo, postList } from '../services/postsService'
import { useRouter } from '../hooks/useRouter'
import SEO from '../next-seo.config'
import { fullname } from '../components/AllJsonLd'

type HomeProps = { posts: PostInfo[] }

const Home = ({ posts }: HomeProps) => {
  const { country } = useGeolocation()
  const router = useRouter()
  if (country && country !== 'it') {
    router.goto('/en')
    return <></>
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JsonLd />
      <Layout>
        <Hero />
        <BlogPosts posts={posts} />
        {/* 
      <Testimonial />
      <Method /> 
      <AboutMe /> */}
      </Layout>
    </>
  )
}

export default Home

const JsonLd = () => {
  const datePublished = '2022-05-024T00:00:01+02:00'
  const dateModified = datePublished

  return (
    <AllJsonLd
      webpage={{
        url: SEO.openGraph?.url ?? '',
        title: SEO.title ?? '',
        description: SEO.description ?? '',
        datePublished,
        dateModified
      }}
      additionalType={{
        '@type': 'Article',
        headline: SEO.title ?? '',
        datePublished,
        dateModified,
        author: { '@type': 'Person', name: fullname },
        name: SEO.title ?? '',
        '@id': 'http://gianluca.carucci.org/#schema-1679352',
        isPartOf: { '@id': `${SEO.openGraph?.url}#webpage` },
        publisher: { '@id': `${SEO.openGraph?.url}#person` },
        inLanguage: 'it-IT',
        mainEntityOfPage: { '@id': `${SEO.openGraph?.url}#webpage` }
      }}
    />
  )
}

export async function getStaticProps() {
  const posts = await postList()
  return {
    props: {
      posts
    }
  }
}
