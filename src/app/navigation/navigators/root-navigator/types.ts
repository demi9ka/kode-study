import { TPaymentService } from '@screens/payment/payment-services/types'
import { HomeTabsParamsList } from '../home-tabs-navigator'
import { OtpProps } from '@features/otp/otp-connector'
import { PinCodeVariantType } from '@features/pin-code/types'

export type RootStackScreenParams = {
  welcome: undefined
  paymentServices: undefined
  paymentCreate: TPaymentService
  paymentConfirm: {
    name: string
    phone: string
    amount: number
    cashbackPercentage: number
  }
  paymentResult: {
    amount: number
    result: boolean
  }
  otp: OtpProps
  authPassword: {
    guestToken: string
  }
  authPhone: undefined
  authSuccess: undefined
  authSetPinCode: undefined
  pinCode: {
    variant: PinCodeVariantType
    compareValue?: string
    pinCodeLen: number
  }
}

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList
} & RootStackScreenParams
