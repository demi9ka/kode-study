import { TPaymentService } from '@screens/payment/payment-services/types'
import { HomeTabsParamsList } from '../home-tabs-navigator'
import { ReactNode } from 'react'

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
  paymentOtp: {
    otpId: string
    otpLen: number
    resendIn: number
    attemptsLeft: number
    onConfirm: () => void
  }
  authPassword: {
    create: boolean
  }
  authPhone: undefined
}

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList
} & RootStackScreenParams
