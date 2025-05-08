import { styled } from '@shared/ui/theme'
import { View } from 'react-native'

export const PinCodeFieldItem = ({
  checked,
  hasError,
}: {
  checked: boolean
  hasError: boolean
}) => {
  return <Wrapper $hasError={hasError} $checked={checked} />
}

const Wrapper = styled(View)<{
  $hasError: boolean
  $checked: boolean
}>`
  width: ${({ theme }) => theme.spacing(1.5)}px;
  height: ${({ theme }) => theme.spacing(1.5)}px;
  background-color: ${({ theme, $checked, $hasError }) => {
    if ($hasError) {
      return theme.palette.indicator.error
    }
    if ($checked) {
      return theme.palette.accent.primary
    }
    return theme.palette.background.primary
  }};
  border: 1px solid ${({ theme }) => theme.palette.text.tertiary};
  border-radius: 50%;
`
