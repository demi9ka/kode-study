import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconPayPass = ({ size }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6.5 10C6.5 10 7 11 7 12C7 13 6.5 14 6.5 14"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M9.5 8.5C9.5 8.5 10.5 10 10.5 12C10.5 14 9.5 15.5 9.5 15.5"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M12.5 7C12.5 7 14 9 14 12C14 15 12.5 17 12.5 17"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M15.5 5.5C15.5 5.5 17.5 8 17.5 12C17.5 16 15.5 18.5 15.5 18.5"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}
