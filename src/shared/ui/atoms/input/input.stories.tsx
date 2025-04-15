import React from 'react'
import { Input as InputComponent, Props } from './input'
import { styled } from '@shared/ui/theme'
import { Icon1GIBDD } from '@shared/ui/icons'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Meta = {
  title: 'ui/Input',
  component: InputComponent,
}

export default Meta

export const Input = (args: Props) => {
  return (
    <Wrapper>
      <InputComponent {...args} />
    </Wrapper>
  )
}
Input.args = {
  hasClearButton: true,
  leftSection: <Icon1GIBDD />,
}
