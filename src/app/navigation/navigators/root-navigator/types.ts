import { HomeTabsParamsList } from '../home-tabs-navigator'

export type RootStackScreenParams = {
  paymentServices: undefined
  paymentCreate: { serviceId: string; title: string }
  paymentConfirm: {
    serviceId: string
    title: string
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
