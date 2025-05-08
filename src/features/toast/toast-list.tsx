import { styled, useTheme } from '@shared/ui/theme'
import { TouchableOpacity, View } from 'react-native'
import { Typography } from '@shared/ui/atoms'
import { IconClose } from '@shared/ui/icons'
import { Toast, ToastVariant } from './types'
import { ReactNode } from 'react'

type ToastsProps = {
  toasts: Toast[]
  removeToasts: (id: number) => void
  children: ReactNode
}

const Wrapper = styled(View)`
  position: absolute;
  z-index: 10;
  gap: ${({ theme }) => theme.spacing(1)}px;
  top: ${({ theme }) => theme.spacing(1)}px;
  left: ${({ theme }) => theme.spacing(5 / 8)}%;
  width: 100%;
`
const Text = styled(Typography)`
  flex-grow: 2;
`
const ToastComponent = styled.View<{
  $variant: ToastVariant
}>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, $variant }) =>
    theme.palette.indicator[$variant]};
  padding: ${({ theme }) => theme.spacing(2)}px;
  border-radius: ${({ theme }) => theme.spacing(2)}px;
  width: 90%;
`

const IconCloseComponent = styled(IconClose)`
  color: ${({ theme }) => theme.palette.text.primary};
`

export const Toasts = ({ removeToasts, toasts, children }: ToastsProps) => {
  return (
    <>
      {children}
      <Wrapper>
        {toasts.map(({ id, message, variant }) => {
          return (
            <ToastComponent key={id} $variant={variant}>
              <Text variant='body15Regular'>{message}</Text>
              <TouchableOpacity onPress={() => removeToasts(id)}>
                <IconCloseComponent size={16} />
              </TouchableOpacity>
            </ToastComponent>
          )
        })}
      </Wrapper>
    </>
  )
}
