import React, {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { useTheme, styled } from '@shared/ui/theme'
import { IconClose } from '@shared/ui/icons'
import { forwardRef, ReactNode } from 'react'

const Wrapper = styled(View)`
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing(3 / 4)}px
    ${({ theme }) => theme.spacing(2)}px;

  align-items: center;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  gap: ${({ theme }) => theme.spacing(1 / 2)}px;
`
const InputNode = styled(TextInput)<{
  $textColor: string
}>`
  color: ${({ $textColor }) => $textColor};
  flex-grow: 2;
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  font-size: ${({ theme }) => theme.typography.body15Regular.size};
  letter-spacing: ${({ theme }) =>
    theme.typography.body15Regular.letterSpacing};
  line-height: ${({ theme }) => theme.typography.body15Regular.lineHeight};
`

export type Props = {
  hasClearButton?: boolean
  isError: boolean
  leftSection?: ReactNode
  rigthSection?: ReactNode
  wrapperStyle?: StyleProp<ViewStyle>
  onChange?: TextInputProps['onChangeText']
  onNativeChange?: TextInputProps['onChange']
} & Omit<TextInputProps, 'onChange' | 'onChangeText'>

export const Input = forwardRef<TextInput, Props>(
  (
    {
      isError,
      hasClearButton,
      leftSection,
      rigthSection,
      wrapperStyle,
      onNativeChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme()
    const handleOnPress = () => onChange && onChange('')
    return (
      <Wrapper style={wrapperStyle}>
        {leftSection}
        <InputNode
          ref={ref}
          onChangeText={onChange}
          onChange={onNativeChange}
          keyboardAppearance='dark'
          placeholderTextColor={
            isError
              ? theme.palette.indicator.error
              : theme.palette.text.tertiary
          }
          $textColor={
            isError ? theme.palette.indicator.error : theme.palette.text.primary
          }
          {...props}
        />
        {rigthSection ? rigthSection : ''}
        {hasClearButton && !rigthSection ? (
          <TouchableOpacity onPress={handleOnPress}>
            <IconClose color={theme.palette.content.tertiary} />
          </TouchableOpacity>
        ) : null}
      </Wrapper>
    )
  },
)
