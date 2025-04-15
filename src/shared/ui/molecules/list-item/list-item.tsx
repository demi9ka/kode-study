import React from 'react-native'
import { styled } from '@shared/ui/theme'
import { Line, Typography } from '@shared/ui/atoms'
import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native-gesture-handler'

export interface Props extends TouchableOpacityProps {
  hasLine?: boolean
  leftSection: ReactNode
  content: ReactNode
  onPress?: VoidFunction
}

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
`
const Content = styled(Typography)`
  flex-wrap: wrap;
  text-align: left;
  word-break: break-word;
`

export const ListItem = ({ content, leftSection, hasLine, onPress }: Props) => {
  return (
    <>
      <Wrapper onPress={onPress}>
        {leftSection}
        <Content variant='body15Regular'>{content}</Content>
      </Wrapper>
      {hasLine ? <Line marginHorizontal={9} /> : null}
    </>
  )
}
