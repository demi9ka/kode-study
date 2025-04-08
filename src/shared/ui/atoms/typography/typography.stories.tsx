import React from 'react'

import { Typography as TypographyComponent } from './typography'
import { styled } from '@shared/ui/theme'

const TypographyWithPadding = styled(TypographyComponent)`
  padding: ${({ theme }) => theme.spacing(1.5)}px
    ${({ theme }) => theme.spacing(2)}px;
`

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui',
}

export default Meta

export const Typography = () => (
  <Wrapper>
    <TypographyWithPadding variant='title'>Title 34 bold</TypographyWithPadding>
    <TypographyWithPadding variant='largeTitle'>
      Large title 28 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant='subtitle'>
      Subtitle 20 semibold
    </TypographyWithPadding>
    <TypographyWithPadding variant='body20'>
      Body 20 regular
    </TypographyWithPadding>
    <TypographyWithPadding variant='body17Medium'>
      Body 17 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant='body17Regular'>
      Body 1 17 regular
    </TypographyWithPadding>
    <TypographyWithPadding variant='body15Regular'>
      Body 2 15 regular
    </TypographyWithPadding>
    <TypographyWithPadding variant='body15Semibold'>
      Body 15 semibold
    </TypographyWithPadding>
    <TypographyWithPadding variant='caption1'>
      Caption 1 13
    </TypographyWithPadding>
    <TypographyWithPadding variant='caption2'>
      Caption 2 11
    </TypographyWithPadding>
    <TypographyWithPadding variant='button'>Button</TypographyWithPadding>
  </Wrapper>
)
