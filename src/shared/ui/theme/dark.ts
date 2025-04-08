import { DefaultTheme } from 'styled-components'
import { THEME_GRID_STEP } from './constants'

export const darkTheme: DefaultTheme = {
  name: 'dark',
  palette: {
    background: {
      primary: '#312C39',
      secondary: '#352F3D',
    },
    content: {
      primary: '#3B3542',
      secondary: '#403A47',
      tertiary: '#706D76',
    },
    accent: {
      primary: '#6C78E6',
      secondary: '#F678BA',
      tertiary: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C2C1C6',
      tertiary: '#706D76',
    },
    indicator: {
      error: '#FB6176',
      done: '#4CD563',
      success: '#6C78E6',
    },
    button: {
      primary: '#6C78E6',
      secondary: '#FFFFFF',
    },
    helpers: {
      bottomMenu: '#352F3D50',
      overlay: '#00000025',
      calendarPeriod: '#6C78E620',
    },
  },
  typography: {
    largeTitle: {
      size: '34px',
      lineHeight: '41px',
      letterSpacing: '0.41px',
      fontFamily: 'SFProDisplay-Bold',
    },
    title: {
      size: '28px',
      lineHeight: '34px',
      letterSpacing: '0.34px',
      fontFamily: 'SFProDisplay-Medium',
    },
    subtitle: {
      size: '20px',
      lineHeight: '25px',
      letterSpacing: '0.38px',
      fontFamily: 'SFProDisplay-Semibold',
    },
    body20: {
      size: '20px',
      lineHeight: '25px',
      letterSpacing: '0.38px',
      fontFamily: 'SFProDisplay-Regular',
    },
    body17Medium: {
      size: '17px',
      lineHeight: '22px',
      letterSpacing: '-0.41px',
      fontFamily: 'SFProDisplay-Medium',
    },
    body17Regular: {
      size: '17px',
      lineHeight: '22px',
      letterSpacing: '-0.41px',
      fontFamily: 'SFProDisplay-Regular',
    },
    body15Regular: {
      size: '15px',
      lineHeight: '20px',
      letterSpacing: '-0.24px',
      fontFamily: 'SFProDisplay-Regular',
    },
    body15Semibold: {
      size: '15px',
      lineHeight: '20px',
      letterSpacing: '-0.24px',
      fontFamily: 'SFProDisplay-Semibold',
    },
    caption1: {
      size: '13px',
      lineHeight: '15.51px',
      letterSpacing: '-0.08px',
      fontFamily: 'SFProDisplay-Regular',
    },
    caption2: {
      size: '11px',
      lineHeight: '13.13px',
      letterSpacing: '0.07px',
      fontFamily: 'SFProDisplay-Regular',
    },
    button: {
      size: '15px',
      lineHeight: '18px',
      letterSpacing: '-0.41px',
      fontFamily: 'SFProDisplay-Semibold',
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
}
