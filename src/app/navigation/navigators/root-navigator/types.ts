import { TPaymentService } from '@screens/payment/payment-services/types'
import { HomeTabsParamsList } from '../home-tabs-navigator'
import { AuthStackScreenParams } from '../auth-stack'
import { OtpProps } from '@features/otp/otp-connector'

export type RootStackScreenParams = {
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
  paymentOtp: OtpProps
}

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList
  AuthStack: AuthStackScreenParams
} & RootStackScreenParams
