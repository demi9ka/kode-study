import React, { View } from 'react-native'
import { darkTheme, styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

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
  gap: ${({ theme }) => theme.spacing(0.5)}px;
`

export const InfoItem = ({ value, title }: Props) => {
  return (
    <Wrapper>
      <Typography
        variant='caption1'
        style={{ color: darkTheme.palette.text.tertiary }}>
        {title}
      </Typography>
      <Typography variant='body15Regular'>{value}</Typography>
    </Wrapper>
  )
}
