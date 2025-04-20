import { services } from '../../constants'
import { TPaymentService } from '../../types'
import { getServicesMapper } from '../get-services-mapper'

export const useGetServices = (): Promise<TPaymentService[]> => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(getServicesMapper(services))
    }, 1000),
  )
}
