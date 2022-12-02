import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { memo } from 'react'

import { MediaContextProvider } from './media'

export type Theme = typeof theme

export const theme = {
  colors: {
    variants: {
      neutralLight1: '#FFFFFF',
      neutralLight2: '#F7F8F9',
      neutralDark1: '#251841',
      neutralDark2: '#888293',
    },
  },
  fontFamily: {
    default: "'Poppins', sans-serif",
  },
}

export const ThemeProvider = memo(function ThemeProvider({ children }: any) {
  return (
    <EmotionThemeProvider theme={theme}>
      <MediaContextProvider>{children}</MediaContextProvider>
    </EmotionThemeProvider>
  )
})
