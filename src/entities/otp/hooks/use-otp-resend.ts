import { addToast } from '@features/toast'
import { DefaultApiPostApiCoreOtpResendRequest } from '@shared/api/core-axios-client'
import { useMutation } from '@tanstack/react-query'
import { coreApi } from 'shared/api'

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
