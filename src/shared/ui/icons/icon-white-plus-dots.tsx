import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconWhitePlusDots = ({ size }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 8} height={size ?? 8} viewBox="0 0 8 8" fill="none">
      <Path d="M4 1V7" stroke="#C2C1C6" strokeWidth={2} strokeLinecap="round" />
      <Path
        d="M1 4L7 4"
        stroke="#C2C1C6"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}
