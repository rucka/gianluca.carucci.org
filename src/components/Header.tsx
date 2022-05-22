import { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from '../hooks/useRouter'
import { ALink } from './ALink'
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

const LogoLink = styled.a`
  cursor: pointer;
`

const routes = [
  { url: '/', label: 'Home' },
  { url: '/post/project-management-guida', label: 'INIZIA DA QUI' },
  { url: '/conference/pyconit', label: 'Pycon IT 2022' },
  { url: '/post/introduzione-a-scrum', label: 'Scrum' }
]

export function Header() {
  const { goto, route } = useRouter()
  const [opened, setOpened] = useState<boolean>(false)

  return (
    <HeaderContainer>
      <Left>
        {route === '/' ? (
          <Logo />
        ) : (
          <LogoLink onClick={() => goto('/')}>
            <Logo />
          </LogoLink>
        )}
      </Left>
      <Right>
        <HamburgerMenu opened={opened} onToggle={() => setOpened(!opened)}>
          {routes.map(({ url, label }) => (
            <LinkElement key={url} slug={url} label={label} />
          ))}
        </HamburgerMenu>
      </Right>
    </HeaderContainer>
  )
}

const LinkElement = ({ slug: url, label }: { slug: string; label: string }) => {
  const { asPath } = useRouter()
  if (asPath === `${url}`) {
    return <Empty />
  }
  return <ALink href={`${url}`}>{label}</ALink>
}
