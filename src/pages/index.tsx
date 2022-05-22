import Head from 'next/head'
import useGeolocation from '../hooks/useGeolocation'
//@ts-ignore
import { AboutMe, BlogPosts, Testimonial } from '../components/Home'
import { Hero } from '../components'
import React from 'react'
import Layout from '../components/Layout'
import { PostInfo, postList } from '../services/postsService'
import { useRouter } from '../hooks/useRouter'

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
        <title>Gianluca Carucci - Software Engineer</title>
        <meta name="description" content="Gianluca Carucci - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

export async function getStaticProps() {
  const posts = await postList()
  return {
    props: {
      posts
    }
  }
}
