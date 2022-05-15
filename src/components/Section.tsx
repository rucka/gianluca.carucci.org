import React, { Children } from 'react'
import styled, { css, CSSProp, DefaultTheme } from 'styled-components'
import { device } from '../device'
import { Empty } from './Empty'

const SectionContainer = styled.div<{ customCss: CSSProp<DefaultTheme> | undefined }>`
  position: relative;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
  ${({ customCss }) => customCss ?? css``}
`
const SectionItem = styled.div<{ itemCount: number; customCss: CSSProp<DefaultTheme> | undefined }>`
  @media ${device.laptop} {
    width: 50%;
  }
  display: flex;
  justify-content: center;
  ${({ customCss }) => customCss ?? css``}
`
type SectionProps = {
  children: React.ReactNode
  name?: string
  css?: CSSProp<DefaultTheme>
  sectionItemCss?: CSSProp<DefaultTheme>
  sectionNameCss?: CSSProp<DefaultTheme>
}
export function Section({ children, name, css, sectionNameCss, sectionItemCss }: SectionProps) {
  const items: any[] = Children.toArray(children)
  return (
    <SectionContainer customCss={css}>
      {name ? <SectionName data-index={name} customCss={sectionNameCss} /> : <Empty />}
      {items.map((c: any, i) => (
        <SectionItem itemCount={items.length} key={i} customCss={sectionItemCss}>
          {c}
        </SectionItem>
      ))}
    </SectionContainer>
  )
}

const SectionName = styled.span<{ customCss: CSSProp<DefaultTheme> | undefined }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  z-index: 2;
  box-align: center;
  box-pack: center;
  flex-flow: column;

  &:before {
    content: attr(data-index);
    position: relative;
    font-family: ${(p) => p.theme.header.fontFamily};
    letter-spacing: 0.2rem;
    color: ${(p) => p.theme.black};
    opacity: 0.7;
    text-transform: uppercase;
    padding: 20px;
    transform: rotate(180deg);
    z-index: 1;
    writing-mode: vertical-rl;
  }

  &:after {
    content: '';
    width: 1px;
    background-color: #2b2f3b;
    z-index: 1;
    flex: 1;
  }

  ${({ customCss }) => customCss ?? css``}
`

/*

@media (max-width: 1023px)
.u-index {
    width: fit-content;
    font-size: 9px;
}

@media screen and (min-width: 375px) and (min-width: 375px)
.u-index {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    z-index: 2;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    flex-flow: column;
}

@media (max-width: 1023px)
.u-index:before {
    padding: 10px;
}
@media screen and (min-width: 375px) and (min-width: 375px)
.u-index:before {
    content: attr(data-index);
    position: relative;
    color: #2b2f3b;
    text-transform: uppercase;
    padding: 20px;
    transform: rotate(180deg);
    -ms-transform: rotate(-90deg);
    z-index: 1;
    writing-mode: vertical-rl;
    -ms-transform-origin: right top;
}
.u-index:after {
    content: "";
    width: 1px;
    background-color: #2b2f3b;
    z-index: 1;
    flex: 1;
}
*/
