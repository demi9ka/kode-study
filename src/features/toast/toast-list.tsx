import { styled, useTheme } from '@shared/ui/theme'
import { TouchableOpacity, View } from 'react-native'
import { Typography } from '@shared/ui/atoms'
import { IconClose } from '@shared/ui/icons'
import { Toast, ToastVariant } from './types'

type ToastsProps = {
  toasts: Toast[]
  removeToasts: (id: number) => void
}

const Wrapper = styled(View)`
  position: absolute;
  z-index: 10;
  gap: ${({ theme }) => theme.spacing(1)}px;
  top: ${({ theme }) => theme.spacing(1)}px;
  left: ${({ theme }) => theme.spacing(1)}%;
  width: 100%;
`
const Text = styled(Typography)`
  flex-grow: 2;
`
const ToastComponent = styled.View<{
  $variant: ToastVariant
}>`
  flex-direction: row;
  background-color: ${({ theme, $variant }) =>
    theme.palette.indicator[$variant]};
  padding: ${({ theme }) => theme.spacing(2)}px;
  border-radius: ${({ theme }) => theme.spacing(2)}px;
  width: 84%;
`

export const Toasts = ({ removeToasts, toasts }: ToastsProps) => {
  const theme = useTheme()

  return (
    <Wrapper>
      {toasts.map(({ id, message, variant }) => {
        return (
          <ToastComponent key={id} $variant={variant}>
            <Text variant='body15Regular'>{message}</Text>
            <TouchableOpacity onPress={() => removeToasts(id)}>
              <IconClose size={16} color={theme.palette.text.primary} />
            </TouchableOpacity>
          </ToastComponent>
        )
      })}
    </Wrapper>
  )
}
