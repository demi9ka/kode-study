import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconUser = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6.75C7 9.51142 9.23858 11.75 12 11.75C14.7614 11.75 17 9.51142 17 6.75C17 3.98858 14.7614 1.75 12 1.75C9.23858 1.75 7 3.98858 7 6.75ZM15.5 6.75C15.5 8.683 13.933 10.25 12 10.25C10.067 10.25 8.5 8.683 8.5 6.75C8.5 4.817 10.067 3.25 12 3.25C13.933 3.25 15.5 4.817 15.5 6.75Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
      <Path
        d="M5 22C5 22.4142 4.66421 22.75 4.25 22.75C3.83579 22.75 3.5 22.4142 3.5 22V21C3.5 16.4421 5.90459 13.25 10 13.25H14C18.0954 13.25 20.5 16.4421 20.5 21V22C20.5 22.4142 20.1642 22.75 19.75 22.75C19.3358 22.75 19 22.4142 19 22V21C19 17.1929 17.1597 14.75 14 14.75H10C6.84028 14.75 5 17.1929 5 21V22Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
