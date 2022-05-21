import { useRouter } from 'next/router'
import styled from 'styled-components'
import { device } from '../../../device'
import { CallToAction } from '../../CallToAction'

export function Headline() {
  const { push } = useRouter()
  return (
    <Container>
      <TitleOverhead>ciao, sono Gianluca!</TitleOverhead>
      <TitleHorizontalLine>
        Aiuto gli sviluppatori a diventare leader e asset strategici per le proprie aziende.
      </TitleHorizontalLine>
      <ClaimContainer>
        <Claim>
          Tutto quello che devi sapere del mondo dell'Information Technology e che nessuno ha mai voluto raccontarti.
          {/* Condividerò con te tutti i miei <b>20 anni di esperienza</b> nel mondo dell'<b>information technology </b>
          come <b>nessuno</b> ha mai fatto prima.
          <br />
          Perchè? Voglio avere un <b>impatto reale</b> in questo settore. Questo spazio è il mio modo.
          <br />
          Ed è completamente <b>gratuito</b>. */}
        </Claim>
        <CallToAction onClick={() => push('/post/project-management-guida')} text="inizia da qui" />
      </ClaimContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  padding-left: 3rem;
  max-width: 1530px;
  font-family: 'Roboto', sans-serif;
  @media ${device.laptop} {
    padding-left: 5rem;
  }
`

const TitleOverhead = styled.h6`
  color: #787d86;
  font-size: 14.6px;
  letter-spacing: 0.2rem;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0;
  @media ${device.laptop} {
    margin-bottom: 1rem;
  }
`

const TitleHorizontalLine = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 0;
  font-size: 2.3rem;

  @media ${device.tablet} {
    font-size: 3.5571rem;
  }

  @media (orientation: landscape) {
    font-size: 2.5rem;
  }

  @media ${device.laptop} {
    font-size: 3.5571rem;
  }
`

const ClaimContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12%;
  margin-top: 2rem;
  @media ${device.laptop} {
    margin-top: 0;
  }
`

const Claim = styled.p`
  width: 70%;
  line-height: 1.9;
  display: none;
  margin-bottom: 1 rem;
  @media ${device.tablet} {
    display: unset;
  }
`
