import { ImageSourcePropType } from 'react-native'

export type TServiceResponce = {
  serviceId: string
  serviceName: string
  serviceUrl: string
}

export type TPaymentService = {
  id: string
  name: string
  icon: ImageSourcePropType
}
