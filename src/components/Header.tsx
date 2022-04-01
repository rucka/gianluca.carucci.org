import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: ${(props) => props.theme.invertedBackground};
  /* padding: 0 20px; */
  width: 100%;
`

const Empty = styled.div``
const TextualLogo = styled.span`
  color: ${(props) => props.theme.invertedColor};
  text-transform: uppercase;
  font-family: getaway;
  font-size: 20px;
  letter-spacing: 1.5px;
  /* font-weight: 800; */
`
const Header = () => {
  return (
    <HeaderContainer>
      <TextualLogo>gianluca carucci</TextualLogo>
      <Empty />
      <Empty />
    </HeaderContainer>
  )
}

export default Header
