import { HomeTabsParamsList } from '@routing/home-tabs-navigation'

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList
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
