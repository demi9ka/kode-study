import React from 'react'
import { ListItem as ListItemComponent, Props } from './list-item'
import { styled } from '@shared/ui/theme'
import { Icon1Internet } from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'

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
    <ListItemComponent {...args} />
  </Wrapper>
)
ListItem.args = {
  hasLine: true,
  leftSection: <Icon1Internet />,
  content: <Typography children='Пример' />,
}
