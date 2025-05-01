import { addToast } from '@features/toast'
import { useMutation } from '@tanstack/react-query'

export const usePaymentRequest = () => {
  return useMutation({
    mutationFn: (otpId: string) => {
      return new Promise<{ result: boolean }>(resolve => {
        setTimeout(() => {
          const res = Math.random()
          resolve({ result: res > 0.5 })
        }, 1000)
      })
    },
    onError: ({ message }) => {
      addToast({
        message,
        variant: 'error',
      })
    },
  })
}
