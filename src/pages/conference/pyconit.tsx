import { useState } from 'react'
import styled, { css } from 'styled-components'
import { GithubIcon, SlideIcon, TextIcon } from '../../assets/icons'
import { Pyconit } from '../../assets/images'
import Layout from '../../components/Layout'
import { Section } from '../../components/Section'

export default function ConferencePage() {
  const [showSlide, setShowSlide] = useState(false)

  const SlideButton = () => {
    if (showSlide) {
      return (
        <>
          <ResourceButton onClick={() => setShowSlide(false)}>abstract</ResourceButton> <TextIcon />
        </>
      )
    }
    return (
      <>
        <ResourceButton onClick={() => setShowSlide(true)}>slide</ResourceButton> <SlideIcon />
      </>
    )
  }

  return (
    <>
      <Layout>
        <Section
          name={talk.conference}
          css={css`
            font-family: 'Roboto', serif;
            padding-left: 5rem;
            padding-right: 5rem;
            padding-bottom: 5rem;
          `}>
          <Container>
            <Title>{talk.title}</Title>
            <Tags>
              <Tag>{talk.conference}</Tag>
              <Tag>{talk.date}</Tag>
            </Tags>
            <Content>
              <Abstract visible={!showSlide}>{talk.abstract}</Abstract>
              <SlideWrapper
                visible={showSlide}
                dangerouslySetInnerHTML={{
                  __html: `<div
                    style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
                    <iframe
                      loading="lazy"
                      style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                      src="${talk.slideUrl}?embed"
                      allow="fullscreen" 
                      ></iframe>
                  </div>`
                }}></SlideWrapper>
            </Content>
          </Container>
          <Sidebar>
            <Pyconit />
            <ResourceBox>
              <Resource>
                <Code href={talk.codeUrl} target="_blank">
                  download code
                </Code>
                <GithubIcon />
              </Resource>
              <Resource>
                <SlideButton />
              </Resource>
            </ResourceBox>
          </Sidebar>
        </Section>
      </Layout>
    </>
  )
}

const Container = styled.div`
  font-family: 'Roboto', serif;
`

const Content = styled.div`
  margin-top: 3rem;
  max-width: 710px;
  margin-left: auto;
  margin-right: auto;
`

const Sidebar = styled.div``
const ResourceBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  svg {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
  }
`

const Resource = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  font-size: 2rem;
  text-align: right;
`

const Code = styled.a`
  color: ${(p) => p.theme.secondaryColor};
  padding-right: 1rem;
`

const ResourceButton = styled.span`
  color: ${(p) => p.theme.secondaryColor};
  text-decoration: underline;
  padding-right: 1rem;
  cursor: pointer;
`

const SlideWrapper = styled.div<{ visible: boolean }>`
  ${(p) =>
    p.visible
      ? css`
          opacity: 1;
          transition: opacity 1s linear;
        `
      : css`
          opacity: 0;
          display: none;
        `}
`

const Abstract = styled.div<{ visible: boolean }>`
  letter-spacing: 0.05rem;
  line-height: 2.3;
  ${(p) =>
    p.visible
      ? css`
          opacity: 1;
          transition: opacity 1s linear;
        `
      : css`
          opacity: 0;
          display: none;
        `}
`

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3.8571rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 710px;
  margin-top: 0;
`

const Tags = styled.div`
  display: flex;
`

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  margin-right: 1rem;
  background-color: ${(p) => p.theme.black};
  color: ${(p) => p.theme.white};
`

const talk = {
  conference: 'pycon it',
  title: 'Autenticazione e autorizzazione in salsa microservice',
  abstract: `Se partiamo da un monolite è tutto facile: verifichiamo le credenziali sul database (e/o utilizziamo oauth) e il gioco è fatto. I monoliti sono semplici e utili in tantissimi casi, ma non sempre. A volte abbiamo bisogno di una architettura a microservizi, magari con linguaggi e stack tecnologici differenti. Chi verifica le credenziali? Come ogni servizio è in grado di identificare in modo sicuro l’utente e assegnargli i giusti ruoli per poter esaudire le richieste? Queste sono alcune domande che un sistema distribuito ci impone di valutare. In questo talk analizzeremo tramite demo e un caso reale e complesso, i diversi modi e le tecniche per gestire l’autorizzazione e l’autenticazione in un mondo a microservizi, illustrando pregi e difetti di ogni soluzione.`,
  slideUrl: 'https://www.canva.com/design/DAE_JvWj2LU/view',
  codeUrl: 'https://github.com/rucka/pyconit2022',
  date: '3 giugno 2022'
}
