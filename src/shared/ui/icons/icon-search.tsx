import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconSearch = ({ size }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Circle cx={11} cy={11} r={5.25} stroke="#706D76" strokeWidth={1.5} />
      <Path
        d="M15 15L18.5 18.5"
        stroke="#706D76"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}
