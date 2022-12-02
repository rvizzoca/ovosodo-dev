import './src/theme/destyle.css'
import './src/theme/global.css'

import { ThemeProvider } from './src/theme'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
