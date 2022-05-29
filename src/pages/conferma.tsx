import { NextSeo } from 'next-seo'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import { Section } from '../components/Section'
import { device } from '../device'

export const Conferma = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Layout>
        <Section
          css={css`
            margin: 0 auto;
          `}
          sectionItemCss={css`
            @media ${device.laptop} {
              margin: 0 ${(p) => p.theme.containerMargin};
              width: 100%;
            }
          `}>
          <Container>
            <Header>
              <Title>Messaggio Inviato</Title>
              <Description>
                Ora puoi tornare alla <a href="/">pagina principale</a>.
              </Description>
            </Header>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Conferma

const Container = styled.div`
  width: 100%;
`
const Header = styled.header``
const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.2;
  text-align: center;
`
const Description = styled.h3`
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 400;
  text-align: center;
`
