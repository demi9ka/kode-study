import React from 'react'

import { Line as LineComponent, Props } from './line'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui/Line',
  component: LineComponent,
}

export default Meta

export const Line = (args: Props) => {
  return (
    <Wrapper>
      <LineComponent {...args} />
    </Wrapper>
  )
}
Line.args = {
  backgroundColor: 'red',
  marginHorizontal: 3,
  marginVertical: 4,
  height: 1,
}
