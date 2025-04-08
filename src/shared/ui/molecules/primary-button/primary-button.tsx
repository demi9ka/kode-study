import React, { TouchableOpacityProps } from 'react-native'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

const Wrapper = styled.TouchableOpacity`
  border-radius: 26px;
  padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(4)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`

const ButtonText = styled(Typography)`
  text-align: center;
`

type Props = TouchableOpacityProps

export const PrimaryButton = ({ children, ...rest }: Props) => {
  return (
    <Wrapper activeOpacity={0.7} {...rest}>
      {typeof children === 'string' ? (
        <ButtonText variant='button'>{children}</ButtonText>
      ) : (
        children
      )}
    </Wrapper>
  )
}
