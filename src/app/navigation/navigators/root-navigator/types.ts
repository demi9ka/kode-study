import { TPaymentService } from '@screens/payment/payment-services/types'
import { HomeTabsParamsList } from '../home-tabs-navigator'

export type RootStackScreenParams = {
  paymentServices: undefined
  paymentCreate: TPaymentService
  paymentConfirm: {
    name: string
    phone: string
    amount: number
    cashback_percentage: number
  }
  paymentResult: {
    amount: number
    result: boolean
  }
  paymentOtp: {
    otpId: string
    otpLen: number
    resendIn: number
    attemptsLeft: number
    onConfirm: () => void
  }
}

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList
} & RootStackScreenParams
