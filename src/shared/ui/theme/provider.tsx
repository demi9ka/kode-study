import React, { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

import { darkTheme } from './dark'

type Props = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return <StyledThemeProvider theme={darkTheme}>{children}</StyledThemeProvider>
}
