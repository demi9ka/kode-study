import { useMutation, useQuery } from '@tanstack/react-query'

export const usePaymentRequest = () => {
  return useMutation({
    mutationFn: (otpId: string) => {
      return new Promise<{ result: boolean }>(resolve => {
        setTimeout(() => {
          const res = Math.random()
          console.log(res)
          resolve({ result: res > 0.5 }) // Пример: возвращает true/false с шансом 50%
        }, 1000)
      })
    },
  })
}
