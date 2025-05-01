import { addToast } from '@features/toast'
import { authApi } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

export const useOtp = () => {
  return useMutation({
    mutationFn: async (phone: string) => {
      //   if (phone == '+7 552 828-28-28') {
      //     throw new Error('Такой номер не зарегистрирован или доступ ограничен')
      //   }
      return (
        await authApi.postApiAuthOtpCode({
          postApiAuthOtpCodeRequest: {
            phone,
          },
        })
      ).data
    },
    onError: ({ message }) => {
      addToast({
        message,
        variant: 'error',
      })
    },
  })
}
