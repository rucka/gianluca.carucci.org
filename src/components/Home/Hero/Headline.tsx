import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CallToAction } from '../../CallToAction'
// import { CallToAction } from '../../CallToAction'

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
  padding-left: 5rem;
  padding-right: 5rem;
  max-width: 1530px;
  font-family: 'Roboto', sans-serif;
`

const TitleOverhead = styled.h6`
  color: #787d86;
  font-size: 14.6px;
  letter-spacing: 0.2rem;
  line-height: 1.2;
  font-weight: 400;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const TitleHorizontalLine = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  line-height: 1.2;
  font-size: 3.8571rem;
  margin-top: 0;
`

const ClaimContainer = styled.div`
  padding-left: 12%;
`

const Claim = styled.p`
  margin-bottom: 1rem;
  width: 70%;
  line-height: 1.9;
`
