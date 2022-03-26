import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { HeadlineImage } from '../assets/images'
import { Header } from '../components'
import useGeolocation from '../hooks/useGeolocation'
import { AboutMe, BlogPosts, Hero, Method, Testimonial } from '../components/Home'
import Footer from '../components/Footer'

const HomeContainer = styled.div`
  display: block;
`

const Home: NextPage = () => {
  const { country } = useGeolocation()
  const router = useRouter()
  if (country && country !== 'it') {
    router.push('/en')
    return <></>
  }
  console.log('HeadlineImage:', HeadlineImage)
  return (
    <HomeContainer>
      <Head>
        <title>Gianluca Carucci - Software Engineer</title>
        <meta name="description" content="Gianluca Carucci - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Testimonial />
      <Method />
      <BlogPosts />
      <AboutMe />
      <Footer />
    </HomeContainer>
  )
}

export default Home
