import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconChevronUp = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.21967 14.5303C6.92678 14.2374 6.92678 13.7626 7.21967 13.4697L11.4697 9.21967C11.7626 8.92678 12.2374 8.92678 12.5303 9.21967L16.7803 13.4697C17.0732 13.7626 17.0732 14.2374 16.7803 14.5303C16.4874 14.8232 16.0126 14.8232 15.7197 14.5303L12 10.8107L8.28033 14.5303C7.98744 14.8232 7.51256 14.8232 7.21967 14.5303Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
