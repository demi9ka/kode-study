import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    palette: {
      background: {
        primary: string
        secondary: string
      }
      content: {
        primary: string
        secondary: string
        tertiary: string
      }
      accent: {
        primary: string
        secondary: string
        tertiary: string
      }
      text: {
        primary: string
        secondary: string
        tertiary: string
      }
      indicator: {
        error: string
        done: string
        success: string
      }
      button: {
        primary: string
        secondary: string
      }
      helpers: {
        bottomMenu: string
        overlay: string
        calendarPeriod: string
      }
    }
    typography: {
      title: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      largeTitle: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      subtitle: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      body20: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      body17Medium: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      body17Regular: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      body15Regular: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      body15Semibold: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      caption1: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      caption2: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
      button: {
        size: string
        lineHeight: string
        letterSpacing: string
        fontFamily: string
      }
    }
    spacing: (multiplier: number) => number
  }
}
