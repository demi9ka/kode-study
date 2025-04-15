import React, {
  TextInput,
  TextInputProps,
  ViewProps,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme, styled } from '@shared/ui/theme'
import { IconClose } from '@shared/ui/icons'
import { ReactNode } from 'react'

const Wrapper = styled(View)<{
  //хз почему но padding по вертикали Больше чем нужно, не знаю как поправить
}>`
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing(3 / 4)}px
    ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(3 / 4)}px
    ${({ theme }) => theme.spacing(1)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  gap: ${({ theme }) => theme.spacing(1 / 2)}px;
`
const InputNode = styled(TextInput)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 15px;
  flex-grow: 2;
`

export interface Props extends TextInputProps {
  hasClearButton?: boolean
  leftSection?: ReactNode
  wrapperStyle?: ViewProps['style']
}

export const Input = ({
  hasClearButton,
  leftSection,
  wrapperStyle,
  ...props
}: Props) => {
  const theme = useTheme()
  const handleOnPress = () => props.onChangeText && props.onChangeText('')
  return (
    <Wrapper style={wrapperStyle}>
      {leftSection}

      <InputNode
        placeholderTextColor={theme.palette.text.tertiary}
        keyboardAppearance='dark'
        {...props}
      />

      {hasClearButton ? (
        <TouchableOpacity onPress={handleOnPress}>
          <IconClose color={theme.palette.content.tertiary} />
        </TouchableOpacity>
      ) : null}
    </Wrapper>
  )
}
