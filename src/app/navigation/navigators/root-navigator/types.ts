import { TPaymentService } from '@screens/payment/payment-services/types'
import { HomeTabsParamsList } from '../home-tabs-navigator'
import { OtpConnectorProps } from '@features/otp/otp-connector'

export type RootStackScreenParams = {
  welcome: undefined
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
  otp: Omit<OtpConnectorProps, 'goToTop'>
  authPassword: {
    create: boolean
  }
  authPhone: undefined
}

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList
} & RootStackScreenParams
