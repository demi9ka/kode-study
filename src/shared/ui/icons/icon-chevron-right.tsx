import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconChevronRight = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.84467 7.09467C10.1376 6.80178 10.6124 6.80178 10.9053 7.09467L15.1553 11.3447C15.4482 11.6376 15.4482 12.1124 15.1553 12.4053L10.9053 16.6553C10.6124 16.9482 10.1376 16.9482 9.84467 16.6553C9.55178 16.3624 9.55178 15.8876 9.84467 15.5947L13.5643 11.875L9.84467 8.15533C9.55178 7.86244 9.55178 7.38756 9.84467 7.09467Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
