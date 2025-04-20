import { HomeTabsParamsList } from '../home-tabs-navigator'
import { TPaymentService } from '@screens/payment/payment-services/types'

export type RootStackScreenParams = {
  paymentServices: undefined
  paymentCreate: TPaymentService
  paymentConfirm: {
    name: string
    phone: string
    amount: number
  }
  paymentSuccess: {
    amount: number
  }
}

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList
} & RootStackScreenParams
