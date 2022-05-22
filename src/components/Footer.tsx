import styled from 'styled-components'
import { InstagramIcon, LinkedinIcon, MediumIcon, TwitterIcon, GithubIcon } from '../assets/icons'
import { device } from '../device'
import { useRouter } from '../hooks/useRouter'
import { LogoText } from './Logo'

const FooterWrapper = styled.footer`
  padding: 40px ${(p) => p.theme.containerMargin};
  background-color: #f4f8f9;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Socials = styled.div``
const SocialLink = styled.a`
  margin: 0 0.3rem;
  @media ${device.tablet} {
    margin: 0 0.5rem;
  }
  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
    transition: opacity 0.3s ease;
    opacity: 0.7;
  }
  svg:hover {
    opacity: 0.5;
  }
`

const LogoLink = styled.a`
  cursor: pointer;
`

const Footer = () => {
  const { route, goto } = useRouter()
  const Logo = () => <LogoText>GC</LogoText>

  return (
    <FooterWrapper>
      <Container>
        {route === '/' ? (
          <Logo />
        ) : (
          <LogoLink onClick={() => goto('/')}>
            <Logo />
          </LogoLink>
        )}
        <Socials>
          <SocialLink href="https://www.instagram.com/gianlucacarucci5/" target="_blank">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/rucka/?locale=it_IT" target="_blank">
            <LinkedinIcon />
          </SocialLink>
          <SocialLink href="https://twitter.com/rucka" target="_blank">
            <TwitterIcon />
          </SocialLink>
          <SocialLink href="https://github.com/rucka" target="_blank">
            <GithubIcon />
          </SocialLink>
          <SocialLink href="https://medium.com/@gianlucacarucci" target="_blank">
            <MediumIcon />
          </SocialLink>
        </Socials>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
