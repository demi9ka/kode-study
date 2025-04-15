import React from 'react'
import { InfoItem as InfoItemComponent, Props } from './info-item'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  flex: 1;
  gap: ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui/InfoItem',
  component: InfoItemComponent,
}

export default Meta

export const InfoItem = ({ ...args }: Props) => {
  return (
    <Wrapper>
      <InfoItemComponent value='Описание' title='Title' />
      <InfoItemComponent value='Название' title='Привет' />
      <InfoItemComponent {...args} />
    </Wrapper>
  )
}
