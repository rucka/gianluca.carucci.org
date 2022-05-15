import { Header } from '.'
import Footer from './Footer'
import React from 'react'
import styled, { css, CSSProp, DefaultTheme } from 'styled-components'

type LayoutProps = { children: React.ReactNode; mainCss?: CSSProp<DefaultTheme> }

export default function Layout({ children, mainCss }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer customCss={mainCss}>{children}</ContentContainer>
      <Footer />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ContentContainer = styled.main<{ customCss?: CSSProp<DefaultTheme> }>`
  flex: auto;
  ${(p) => p.customCss ?? css``}
`
