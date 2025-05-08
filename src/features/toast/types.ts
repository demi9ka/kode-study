export type ToastVariant = 'success' | 'error'
export type RemoveToastParams = {
  id: number
  delay: number
}
export type Toast = {
  id: number
  message: string
  variant: ToastVariant
  duration: number
}
export type AddTostType = {
  message: string
  variant?: ToastVariant
  duration?: number
}
