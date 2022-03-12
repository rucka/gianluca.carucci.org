import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { svgBackgroundImageUrl } from '../assets/utils'
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
  background: ${(_) => svgBackgroundImageUrl(backgroundPattern())};
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

const backgroundPattern = () =>
  `<svg id="10015.io" viewBox="0 0 1300 930" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern
        id="pattern"
        x="0"
        y="0"
        width="93"
        height="93"
        patternUnits="userSpaceOnUse"
        patternTransform="translate(30, 30) rotate(0) skewX(0)">
        <svg width="63" height="63" viewBox="0 0 100 100">
          <g fill="#4d044f" opacity="1">
            <path d="M99.3808 48.4985L73.8592 22.9768C73.0656 22.1832 71.6614 22.1832 70.8678 22.9768L65.3347 28.5099C64.5082 29.3363 64.5082 30.6759 65.3347 31.5024L83.8281 49.9937L65.3357 68.4881C64.5093 69.3145 64.5093 70.6542 65.3357 71.4806L70.8688 77.0137C71.2656 77.4105 71.8042 77.6348 72.3651 77.6348C72.9248 77.6348 73.4645 77.4105 73.8613 77.0137L99.3808 51.4931C100.207 50.6656 100.207 49.3249 99.3808 48.4985Z"></path>
            <path d="M34.6649 68.4881L16.1747 49.9958L34.6681 31.5045C35.0649 31.1077 35.2882 30.5701 35.2882 30.0082C35.2882 29.4474 35.066 28.9088 34.6681 28.512L29.135 22.9789C28.7382 22.5821 28.1996 22.3588 27.6388 22.3588C27.078 22.3588 26.5394 22.5821 26.1425 22.9789L0.619815 48.4985C-0.206605 49.3249 -0.206605 50.6645 0.619815 51.492L26.1415 77.0126C26.5383 77.4094 27.0769 77.6337 27.6377 77.6337C28.1985 77.6337 28.7371 77.4094 29.134 77.0126L34.6671 71.4795C35.4935 70.6541 35.4935 69.3145 34.6649 68.4881Z"></path>
            <path d="M64.5136 14.3909C64.2449 13.8978 63.792 13.5317 63.2544 13.373L58.7689 12.0492C57.6494 11.7169 56.4706 12.3592 56.1404 13.4798L35.317 83.9985C35.1582 84.5371 35.2196 85.1159 35.4873 85.608C35.755 86.1021 36.209 86.4672 36.7465 86.627L41.2321 87.9507C41.4321 88.01 41.6342 88.0386 41.832 88.0386C42.7452 88.0386 43.5886 87.4418 43.8605 86.5201L64.684 16.0004C64.8427 15.4618 64.7824 14.8829 64.5136 14.3909Z"></path>
          </g>
        </svg>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="#c6f7e5"></rect>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"></rect>
  </svg>`
