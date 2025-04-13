import React, {
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { darkTheme, styled } from '@shared/ui/theme'
import { IconClose } from '@shared/ui/icons'
import { ReactNode } from 'react'

const Wrapper = styled(View)`
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing(3 / 4)}px;
  padding-left: ${({ theme }) => theme.spacing(1)}px;
  padding-right: ${({ theme }) => theme.spacing(1)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  gap: ${({ theme }) => theme.spacing(1 / 2)}px;
`
const InputNode = styled(TextInput)`
  color: white;
  font-size: 15px;
  flex-grow: 2;
`

export interface Props extends TextInputProps {
  useClearButton?: boolean
  leftSection?: ReactNode
}

export const Input = ({
  value,
  onChangeText,
  placeholder,
  useClearButton,
  leftSection,
  style,
}: Props) => {
  return (
    <Wrapper style={style}>
      {leftSection}
      <InputNode
        placeholder={placeholder}
        placeholderTextColor={darkTheme.palette.text.tertiary}
        value={value || ''}
        onChangeText={onChangeText ? onChangeText : v => {}}
        keyboardAppearance='dark'
      />
      {useClearButton ? (
        <TouchableOpacity onPress={() => onChangeText && onChangeText('')}>
          <IconClose color={darkTheme.palette.content.tertiary} />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
