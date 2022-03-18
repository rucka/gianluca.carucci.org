import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useGeolocation from '../hooks/useGeolocation'

const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: ${(props) => props.theme.invertedBackground};
  padding: 0 20px;
  width: 100%;
`

const Empty = styled.div``
const TextualLogo = styled.span`
  color: ${(props) => props.theme.invertedColor};
  text-transform: uppercase;
`

const HomeContainer = styled.div`
  display: flex;
`

const Home: NextPage = () => {
  const { country } = useGeolocation()
  const router = useRouter()
  if (country && country !== 'it') {
    router.push('/en')
    return <></>
  }
  return (
    <HomeContainer>
      <Head>
        <title>Gianluca Carucci - Software Engineer</title>
        <meta name="description" content="Gianluca Carucci - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Empty />
        <TextualLogo>gianluca carucci</TextualLogo>
        <Empty />
      </Header>
    </HomeContainer>
  )
}

export default Home
