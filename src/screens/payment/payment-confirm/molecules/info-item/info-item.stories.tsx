import React from 'react'
import { InfoItem as InfoItemComponent, Props } from './info-item'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'payment-confirm/molecules/InfoItem',
  component: InfoItemComponent,
}

export default Meta

export const InfoItem = (args: Props) => {
  return (
    <Wrapper>
      <InfoItemComponent {...args} />
    </Wrapper>
  )
}
InfoItem.args = {
  title: 'Заголовок по умолчанию',
  value: 'Значение по умолчанию',
}
