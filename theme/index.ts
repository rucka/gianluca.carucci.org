import { createGlobalStyle } from 'styled-components'
export { default as LightTheme } from './LightTheme'

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
}

body{

  /* background-color:#fafafa; */
  min-width:100vw;
  min-height:100vh;
  /* padding: 1rem; */
  /* margin-top:0; */
  /* font-family:Verdana; */
  margin:0;
  padding: 0;
}

html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        min-height:100vh;
        min-width:100vw;
        margin: 0;
        padding: 0; 
      }
`
