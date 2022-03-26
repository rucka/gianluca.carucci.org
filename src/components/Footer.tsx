import styled from 'styled-components'

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: ${(props) => props.theme.invertedBackground};
  /* padding: 0 20px; */
  width: 100%;
`

const Empty = styled.div``
const Footer = () => {
  return (
    <HeaderContainer>
      <Empty />
    </HeaderContainer>
  )
}

export default Footer
