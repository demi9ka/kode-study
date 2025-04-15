import React, { View } from 'react-native'
import { useTheme, styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { ReactNode } from 'react'
import { IconChevronDown } from '@shared/ui/icons'

export interface Props {
  title: string
  description: string
  leftSection: ReactNode
}

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)}px;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(2.6)}px;
`
const Content = styled(View)`
  flex-grow: 2;
  justify-content: center;
  gap: 3px;
`

export const CardItem = ({ description, leftSection, title }: Props) => {
  const theme = useTheme()
  return (
    <>
      <Wrapper>
        {leftSection}
        <Content>
          <Typography variant='body15Regular'>{title}</Typography>
          <Typography variant='caption1'>{description}</Typography>
        </Content>
        <IconChevronDown color={theme.palette.content.tertiary} />
      </Wrapper>
    </>
  )
}
