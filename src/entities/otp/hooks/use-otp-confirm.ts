import { addToast } from '@features/toast'
import { useMutation } from '@tanstack/react-query'
import { authApi } from 'shared/api'
import { DefaultApiPostApiAuthConfirmRequest } from 'shared/api/auth-axios-client'

export const useConfirmOtp = () => {
  return useMutation({
    mutationFn: (payload: DefaultApiPostApiAuthConfirmRequest) => {
      return authApi.postApiAuthConfirm({ ...payload })
    },
    onError: ({ message }) => {
      addToast({
        message,
        variant: 'error',
      })
    },
  })
}
