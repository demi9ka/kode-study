import { addToast } from '@features/toast'
import { authApi } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

export const useOtpCode = () => {
  return useMutation({
    mutationFn: async (phone: string) => {
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
