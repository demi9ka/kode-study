import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconCardWhite = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.25 16.5V7.5C1.25 5.42893 2.92893 3.75 5 3.75H19C21.0711 3.75 22.75 5.42893 22.75 7.5V16.5C22.75 18.5711 21.0711 20.25 19 20.25H5C2.92893 20.25 1.25 18.5711 1.25 16.5ZM5 18.75H19C20.2426 18.75 21.25 17.7426 21.25 16.5V7.5C21.25 6.25736 20.2426 5.25 19 5.25H5C3.75736 5.25 2.75 6.25736 2.75 7.5V16.5C2.75 17.7426 3.75736 18.75 5 18.75ZM18.25 8.5H5.75C5.33579 8.5 5 8.83579 5 9.25C5 9.66421 5.33579 10 5.75 10H18.25C18.6642 10 19 9.66421 19 9.25C19 8.83579 18.6642 8.5 18.25 8.5Z'
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
