import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string
    secondaryColor: string
    black: string
    white: string
    disabled: string
    error: string
    containerMargin: string
    header: { headerHeight: string; fontFamily: string }
  }
}
