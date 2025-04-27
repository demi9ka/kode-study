import { useUnit } from 'effector-react'
import { toastModel } from '.'
import { Toasts } from './toast-list'

export const ToastsListConnector = () => {
  const toasts = useUnit(toastModel.$toasts)
  const removeToast = (id: string) => toastModel.removeToast(id)

  return <Toasts toasts={toasts} removeToasts={removeToast} />
}
