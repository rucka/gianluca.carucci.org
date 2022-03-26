import { CoverImage } from '../../../assets/images'
import Image from 'next/image'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  filter: grayscale(100%);
  object-fit: cover;
`

const ImageFilter = styled.div`
  background-color: black;
  opacity: 0.01;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const PairContainer = styled.div``
const PairItemContainer = styled.div`
  height: 348px;
  width: 100%;
  position: relative;
`

const Hero = () => {
  return (
    <PairContainer>
      <PairItemContainer>
        <h1>
          Ciao, sono Gianluca!
          <br />
          Aiuto sviluppatori a diventare leader tecnologici e asset strategico per le proprie aziende
        </h1>
        <button>scopri di più</button>
        {/* <button>rimani aggiornato</button> */}
      </PairItemContainer>
      <PairItemContainer>
        <StyledImage layout="fill" src={CoverImage.src} />
        <ImageFilter />
      </PairItemContainer>
    </PairContainer>
  )
}

export default Hero
