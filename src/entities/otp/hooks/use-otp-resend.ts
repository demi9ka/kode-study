import { addToast } from '@features/toast'
import { useMutation } from '@tanstack/react-query'

import { coreApi } from 'shared/api'
import { DefaultApiPostApiCoreOtpResendRequest } from 'shared/api/core-axios-client'

export const useResendOtp = () => {
  return useMutation({
    mutationFn: (payload: DefaultApiPostApiCoreOtpResendRequest) =>
      coreApi.postApiCoreOtpResend(payload),
    onError: ({ message }) => {
      addToast({
        message,
        variant: 'error',
      })
    },
  })
}
