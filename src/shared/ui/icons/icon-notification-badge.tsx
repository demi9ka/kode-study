import React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconNotificationBadge = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 20} height={size ?? 20} viewBox="0 0 20 20" fill="none">
      <Rect
        x={1}
        y={1}
        width={18}
        height={18}
        rx={9}
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
        stroke="#352F3D"
        strokeWidth={2}
      />
      <Path
        d="M7.49512 13H12.5781V11.8135H9.47266V11.7012L10.7764 10.4854C12.0605 9.29883 12.4756 8.63477 12.4756 7.83398V7.81934C12.4756 6.60352 11.46 5.77344 10.0098 5.77344C8.4668 5.77344 7.41211 6.70117 7.41211 8.05371L7.41699 8.07324H8.7793V8.04883C8.7793 7.37988 9.25293 6.9209 9.94141 6.9209C10.6152 6.9209 11.0254 7.34082 11.0254 7.94141V7.95605C11.0254 8.44922 10.7568 8.80566 9.76562 9.76758L7.49512 12.0088V13Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
