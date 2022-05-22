import styled from 'styled-components'

export const ALink = styled.a<{ passHref?: boolean }>`
  text-decoration: none;
  color: ${(p) => p.theme.black};
`
