import React, {
  TextInput,
  TextInputProps,
  ViewProps,
  TouchableOpacity,
  View,
} from 'react-native'
import { darkTheme, styled } from '@shared/ui/theme'
import { IconClose } from '@shared/ui/icons'
import { ReactNode } from 'react'

const Wrapper = styled(View)`
  flex-direction: row;
  padding: ${({ theme }) =>
    theme.spacing(
      3 / 4,
    )}px; //хз почему но padding Больше чем нужно, не знаю как поправить
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
  wrapperStyle?: ViewProps['style']
}

export const Input = ({
  useClearButton,
  leftSection,
  wrapperStyle,
  ...props
}: Props) => {
  return (
    <Wrapper style={wrapperStyle}>
      {leftSection}
      <InputNode
        placeholderTextColor={darkTheme.palette.text.tertiary}
        // value={value || ''}
        // onChangeText={onChangeText ? onChangeText : v => {}}
        keyboardAppearance='dark'
        {...props}
      />
      {useClearButton ? (
        <TouchableOpacity
          onPress={() => props.onChangeText && props.onChangeText('')}>
          <IconClose color={darkTheme.palette.content.tertiary} />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
