import { createGlobalStyle } from 'styled-components'
// export { default as LightTheme } from './LightTheme'
// export { default as BlackWhiteTheme } from './BlackWhiteTheme'
export { default as FoticoTheme } from './FoticoTheme'

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  /* background: ${(props) => props.theme.secondaryColor}; */
  color: ${(props) => props.theme.black};
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
}

body{
  font-family: "Roboto" sans-serif;
  font-size: 14px;
  line-height: 1.5;
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

export function hexToRGB(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}