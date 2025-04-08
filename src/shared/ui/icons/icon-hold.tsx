import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconHold = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Circle
        cx={12}
        cy={12}
        r={10}
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
        stroke="#352F3D"
        strokeWidth={2}
      />
      <Circle cx={12} cy={12} r={5.25} stroke="#C2C1C6" strokeWidth={1.5} />
      <Path
        d="M12 9.5V12L13.5 13.5"
        stroke="#C2C1C6"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
