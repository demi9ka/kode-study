import { addToast } from '@features/toast'
import { authApi } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

export const useAuthLogout = () => {
  return useMutation({
    mutationFn: async (refreshToken: string) => {
      return (
        await authApi.postApiAuthLogout({
          postApiAuthRefreshRequest: {
            refreshToken,
          },
        })
      ).data
    },
    onError: e => {
      addToast({
        message: e.message,
        variant: 'error',
      })
    },
  })
}
