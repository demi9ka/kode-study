import { useUnit } from 'effector-react'
import { toastModel } from '.'
import { Toasts } from './toast-list'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const ToastsListProvider = ({ children }: Props) => {
  const toasts = useUnit(toastModel.$toasts)
  const removeToast = (id: number) => toastModel.removeToast(id)

  return (
    <Toasts children={children} toasts={toasts} removeToasts={removeToast} />
  )
}
