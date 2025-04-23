import { coreApi } from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import { DefaultApiPostApiCoreOtpRequest } from 'shared/api/core-axios-client'

type TResponse = {
  otpId: string
  otpLen: number
  resendIn: number
  attemptsLeft: number
}

//НЕ работает поэтому пока заглушка(((
// export const useOtp = () => {
//   return useMutation({
//     mutationFn: () => {
//       return new Promise<TResponse>(resolve => {
//         console.log('ut')
//         return setTimeout(() => {
//           resolve({
//             otpId: '699d9156-bdb1-49bc-abb0-b5b989fc0aee',
//             otpLen: 6,
//             resendIn: 60,
//             attemptsLeft: 0,
//           })
//         }, 1000)
//       })
//     },
//   })
// }

export const useOtp = () => {
  return useMutation({
    mutationFn: (payload: DefaultApiPostApiCoreOtpRequest) =>
      coreApi.postApiCoreOtp(payload),
  })
}
