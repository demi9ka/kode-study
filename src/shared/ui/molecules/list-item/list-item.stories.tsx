import React from 'react'
import { ListItem as ListItemComponent, Props } from './list-item'
import { styled } from '@shared/ui/theme'
import { Icon1Internet } from '@shared/ui/icons'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui/ListItem',
  component: ListItemComponent,
}

export default Meta

export const ListItem = (args: Props) => (
  <Wrapper>
    <ListItemComponent
      content='Привет'
      leftSection={<Icon1Internet color='red' size={30} />}
      useLine={true}
    />
    <ListItemComponent {...args} />
  </Wrapper>
)
