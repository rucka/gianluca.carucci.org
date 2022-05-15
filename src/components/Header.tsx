import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import { Empty } from './Empty'
import { HamburgerMenu } from './HamburgerMenu'
import { Logo } from './Logo'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  height: ${({ theme }) => theme.header.headerHeight};
  width: 100%;
  z-index: 100;
`

const Left = styled.div`
  padding: 0 ${({ theme }) => theme.containerMargin};
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.containerMargin};
`

export function Header() {
  const [opened, setOpened] = useState<boolean>(false)

  return (
    <HeaderContainer>
      <Left>
        <Logo />
      </Left>
      <Right>
        <HamburgerMenu opened={opened} onToggle={() => setOpened(!opened)}>
          <Home />
        </HamburgerMenu>
      </Right>
    </HeaderContainer>
  )
}

const Home = () => {
  const { route } = useRouter()

  if (route === '/') {
    return <Empty />
  }
  return <Link href={'/'}>Home</Link>
}
