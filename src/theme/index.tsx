import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { memo } from 'react'

import { MediaContextProvider } from './media'

export type Theme = typeof theme

export const theme = {
  colors: {
    variants: {
      neutralLight5: '#FFFFFF',
      neutralDark1: '#000000',
    },
  },
  fontFamily: {
    heading: "'Prata', serif",
    paragraph: "'Inter', sans-serif",
  },
}

export const ThemeProvider = memo(function ThemeProvider({ children }: any) {
  return (
    <EmotionThemeProvider theme={theme}>
      <MediaContextProvider>{children}</MediaContextProvider>
    </EmotionThemeProvider>
  )
})
