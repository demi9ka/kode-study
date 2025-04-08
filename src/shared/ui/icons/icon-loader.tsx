import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconLoader = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 12C2 17.5228 6.47715 22 12 22V22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"
        stroke={color ?? '#6C78E6'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}
