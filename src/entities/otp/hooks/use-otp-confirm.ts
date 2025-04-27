import { addToast } from '@features/toast'
import { useMutation } from '@tanstack/react-query'

import { coreApi } from 'shared/api'
import { DefaultApiPostApiCoreOtpConfirmRequest } from 'shared/api/core-axios-client'

export const useConfirmOtp = () => {
  return useMutation({
    mutationFn: (payload: DefaultApiPostApiCoreOtpConfirmRequest) =>
      coreApi.postApiCoreOtpConfirm(payload),
    onError: ({ message }) => {
      addToast({
        message,
        variant: 'error',
      })
    },
  })
}
