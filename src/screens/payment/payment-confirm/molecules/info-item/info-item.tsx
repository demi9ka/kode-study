import React, { View } from 'react-native'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

export interface Props {
  title: string
  value: string
}

const Wrapper = styled(View)`
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.palette.content.secondary};
  border-style: dashed;
  /* border-bottom: 1px dashed ${({ theme }) =>
    theme.palette.content.secondary} ; */
  gap: ${({ theme }) => theme.spacing(0.5)}px;
`
const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`

export const InfoItem = ({ value, title }: Props) => {
  return (
    <Wrapper>
      <Title variant='caption1'>{title}</Title>
      <Typography variant='body15Regular'>{value}</Typography>
    </Wrapper>
  )
}
