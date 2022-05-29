import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import { Section } from '../components/Section'
import { device } from '../device'

export const Contattami = () => {
  return (
    <>
      <Layout>
        <Section
          css={css`
            margin: 0 auto;
          `}
          sectionItemCss={css`
            @media ${device.laptop} {
              margin: 0 ${(p) => p.theme.containerMargin};
              width: 100%;
            }
          `}>
          <Container>
            <Header>
              <Title>Come posso aiutarti?</Title>
              <Description>
                Hai una domanda o vuoi contattarmi per collaborazioni o eventi?
                <br />
                Compila il form qua sotto e ti risponderò il prima possibile.
              </Description>
            </Header>
            <Form action="https://carucci.us19.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="15f4540d5a1f1b4542ea82de5" />{' '}
              <input type="hidden" name="id" value="9362c991f2" />
              <Dropdown name="MERGE2">
                <DropdownItem selected disabled>
                  voglio parlarti di...
                </DropdownItem>
                <DropdownItem>Domanda generale</DropdownItem>
                <DropdownItem>Un consiglio</DropdownItem>
                <DropdownItem>Proposta e consulenza</DropdownItem>
                <DropdownItem>Intervista, evento, speech</DropdownItem>
                <DropdownItem>Altro</DropdownItem>
              </Dropdown>
              <Input name="MERGE1" placeholder="Inserisci il tuo nome" />
              <Input name="MERGE0" placeholder="Inserisci la tua email" />
              <TextArea name="MERGE3" rows={5} placeholder="Scrivi il tuo messaggio (massimo 5 righe)" />
              <button type="submit" value="submit">
                invia
              </button>
            </Form>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Contattami

const Container = styled.div`
  width: 100%;
`
const Header = styled.header``
const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.2;
  text-align: center;
`
const Description = styled.h3`
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 400;
  text-align: center;
`

const Form = styled.form`
  margin: 5rem auto;
  font-family: 'Roboto', serif;
  font-weight: 700;

  box-sizing: border-box;
  padding: 50px;
  min-width: 350px;

  border: 2px solid ${(p) => p.theme.black};
  input,
  select,
  textarea {
    font-size: 1.5rem;
    width: 100%;
    margin-bottom: 2rem;
  }
  *:focus {
    outline: none;
  }
  input,
  select {
    border: 0;
    border-bottom: ${(p) => p.theme.black} 1.5px dotted;
  }

  @media ${device.laptop} {
    width: 950px;
  }
`
const Dropdown = styled.select``
const DropdownItem = styled.option``
const Input = styled.input`
  &::placeholder {
    color: ${(p) => p.theme.black};
  }
`
const TextArea = styled.textarea`
  border: 1.5px dotted ${(p) => p.theme.black};
  border-top: 0;
  &::placeholder {
    color: ${(p) => p.theme.black};
  }
`
