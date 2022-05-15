import styled from 'styled-components'
import { Empty } from '../Empty'
import { Section } from '../Section'

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  /* font-family: 'Playfair Display', serif; */
  font-family: 'Roboto', serif;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`

const Container = styled.div`
  margin: 2rem 0;
  background-color: #f4f8f9;
  color: ${(p) => p.theme.black};
  min-height: ${(p) => p.theme.header.headerHeight};
  padding: 1rem 0;
`

export default function Method() {
  // <div>le 3 componenti: comprendere la tecnologia, comprendere il business, definire la strategia (tecnologia business strategia)</div>

  const blocks = ['comprendere il business', 'padroneggiare la tecnologia', 'definire la strategia']

  return (
    <Container>
      <Centered>IMPARERAI A</Centered>
      <Section>
        {blocks.map((b, i) => (
          <Block key={i} text={`${i + 1}. ${b}`} />
        ))}
      </Section>
    </Container>
  )
}

const BlockRow = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 1.5rem;
`

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${BlockRow}:nth-child(2) {
    font-weight: 700;
    font-size: 3rem;

  }
`

const Block = ({ text }: { text: string }) => {
  const parts = text.split(' ')
  if (parts.length === 0) {
    return <Empty />
  }
  if (parts.length === 1) {
    return <div>{text}</div>
  }
  const firstRow = parts.slice(0, -1).join(' ')
  const last = parts.slice(-1)
  return (
    <BlockContainer>
      <BlockRow>{firstRow}</BlockRow>
      <BlockRow>{last}</BlockRow>
    </BlockContainer>
  )
}
