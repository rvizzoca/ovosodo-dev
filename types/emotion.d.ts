import '@emotion/react'
import { Theme as CustomTheme } from 'app/theme'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
