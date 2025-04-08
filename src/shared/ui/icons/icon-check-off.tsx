import React from 'react'
import Svg, { Rect } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconCheckOff = ({ size }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Rect
        x={2.75}
        y={2.75}
        width={18.5}
        height={18.5}
        rx={3.25}
        stroke="#706D76"
        strokeWidth={1.5}
      />
    </Svg>
  )
}
