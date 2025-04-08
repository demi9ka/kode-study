import React from 'react'
import Svg, { Circle } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconRadioOff = ({ size }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={9.25} stroke="#706D76" strokeWidth={1.5} />
    </Svg>
  )
}
