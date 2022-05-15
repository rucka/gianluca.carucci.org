import { css, CSSProp, DefaultTheme } from 'styled-components'
import { device } from '../device'

export const inputCssStyle = css`
  width: 100%;
  border: 0;
  color: ${({ theme }) => theme.secondaryColor};
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  padding-bottom: 5px;
  font-size: 1rem;
`
export const heroHeightCss = css`
  height: unset;
  @media ${device.laptop} {
    height: calc(100vh - ${({ theme }) => theme.header.headerHeight} * 2);
  }
`

export const createOverlay = (customCss?: CSSProp<DefaultTheme>) => css`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${() => customCss ?? css``}
  }
`
