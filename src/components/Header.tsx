import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Logo } from './Logo'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { Empty } from './Empty'
// import { HamburgerMenu } from './HamburgerMenu'

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

const LogoLink = styled.a`
  cursor: pointer;
`

export function Header() {
  const { push, route } = useRouter()
  // const [opened, setOpened] = useState<boolean>(false)
  return (
    <HeaderContainer>
      <Left>
        {route === '/' ? (
          <Logo />
        ) : (
          <LogoLink onClick={() => push('/')}>
            <Logo />
          </LogoLink>
        )}
      </Left>
      <Right>
        {/* <HamburgerMenu opened={opened} onToggle={() => setOpened(!opened)}>
          <Home />
        </HamburgerMenu>*/}
      </Right>
    </HeaderContainer>
  )
}

// const Home = () => {
//   const { route } = useRouter()

//   if (route === '/') {
//     return <Empty />
//   }
//   return <Link href={'/'}>Home</Link>
// }
