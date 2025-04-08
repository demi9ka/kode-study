import React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconCheckOn = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Rect
        x={2}
        y={2}
        width={20}
        height={20}
        rx={4}
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
      <Path
        d="M17.7069 9.70687L17.5301 9.5301C17.823 9.23723 17.823 8.76252 17.5301 8.46965C17.2372 8.17678 16.7625 8.17678 16.4697 8.46965L10.9999 13.9394L8.5301 11.4697C8.23723 11.1768 7.76252 11.1768 7.46965 11.4697C7.17678 11.7625 7.17678 12.2372 7.46965 12.5301L10.4699 15.5303C10.6122 15.673 10.8018 15.7499 10.9999 15.7499C11.1978 15.7499 11.3871 15.6731 11.5301 15.5301L17.5301 9.5301L17.7069 9.70687Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
