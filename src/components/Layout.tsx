import { Header } from '.'
import Footer from './Footer'
import React from 'react'
import { LayoutContainer, ContentContainer } from '../pages/index'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </LayoutContainer>
  )
}
