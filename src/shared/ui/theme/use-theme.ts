import React from 'react'
import { ThemeContext } from 'styled-components/native'

export const useTheme = () => {
  const theme = React.useContext(ThemeContext)

  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return theme
}
