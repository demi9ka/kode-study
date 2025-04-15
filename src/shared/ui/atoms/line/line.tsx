import { styled } from '@shared/ui/theme'

import React from 'react'
import { Dimensions, View } from 'react-native'

const Wrapper = styled(View)<{
  $backgroundColor?: string
  $marginHorizontal?: number
  $marginVertical?: number
  $height?: number
  $dimensions: number
}>`
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.palette.content.secondary};
  width: ${({ theme, $marginHorizontal, $dimensions }) =>
    `${$dimensions - theme.spacing($marginHorizontal || 0) * 2}px`};
  margin: ${({ $marginVertical, theme }) =>
      theme.spacing($marginVertical || 0)}px
    0px ${({ $marginVertical, theme }) => theme.spacing($marginVertical || 0)}px
    ${({ $marginHorizontal, theme }) => theme.spacing($marginHorizontal || 0)}px;
  height: ${({ $height, theme }) => `${theme.spacing($height || 1 / 8)}px`};
`
export type Props = {
  backgroundColor?: string
  marginHorizontal?: number
  marginVertical?: number
  height?: number
}
export const Line = ({
  backgroundColor,
  marginHorizontal,
  marginVertical,
  height,
}: Props) => {
  return (
    <Wrapper
      $backgroundColor={backgroundColor}
      $marginHorizontal={marginHorizontal}
      $marginVertical={marginVertical}
      $height={height}
      $dimensions={Dimensions.get('window').width}
    />
  )
}
