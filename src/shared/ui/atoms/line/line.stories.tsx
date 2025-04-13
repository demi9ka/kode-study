import React from 'react'

import { Line as LineComponent, Props } from './line'
import { darkTheme, styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui/Line',
  component: LineComponent,
}

export default Meta

export const Line = (args: Props) => (
  <Wrapper>
    <LineComponent
      backgroundColor={darkTheme.palette.content.tertiary}
      height={2}
      marginHorizontal={3}
      marginVertical={10}
    />
    <LineComponent height={2} marginHorizontal={10} marginVertical={10} />
    <LineComponent
      backgroundColor='red'
      height={4}
      marginHorizontal={10}
      marginVertical={10}
    />
    <LineComponent {...args} />
  </Wrapper>
)
