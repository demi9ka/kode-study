import { OtpProps } from '@features/otp/otp-connector'
import { PinCodeVariantType } from '@features/pin-code/types'

export type AuthStackScreenParams = {
  authOtp: OtpProps
  authWelcome: undefined
  authPassword: {
    guestToken: string
  }
  authPhone: undefined
  authSuccess: undefined
  authSetPinCode: undefined
  authPinCode: {
    variant: PinCodeVariantType
    compareValue?: string
    pinCodeLen: number
  }
}
