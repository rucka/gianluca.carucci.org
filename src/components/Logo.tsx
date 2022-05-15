import styled from 'styled-components'

export const LogoText = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  line-height: 1.2;
  font-size: 20px;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${({ theme }) => theme.black};
`

export const Logo = () => <LogoText>Gianluca Carucci</LogoText>
