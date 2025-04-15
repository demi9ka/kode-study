import React from 'react'
import { CardItem as CardItemComponent, Props } from './card-item'
import { styled } from '@shared/ui/theme'
import { Icon1GIBDD } from '@shared/ui/icons'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui/CardItem',
  component: CardItemComponent,
}

export default Meta

export const CardItem = ({ ...args }: Props) => {
  return (
    <Wrapper>
      <CardItemComponent
        description='Описание'
        leftSection={<Icon1GIBDD />}
        title='Title'
      />
      <CardItemComponent {...args} />
    </Wrapper>
  )
}
