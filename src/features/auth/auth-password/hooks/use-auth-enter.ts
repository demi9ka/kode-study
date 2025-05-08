import { addToast } from '@features/toast'
import { authApi } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

type Props = {
  guestToken: string
  password: string
}

export const useAuthEnter = () => {
  return useMutation({
    mutationFn: async ({ guestToken, password }: Props) => {
      return (
        await authApi.postApiAuthEnter({
          postApiAuthEnterRequest: {
            guestToken,
            password,
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
