import { Images } from '@shared/ui/images'
import { TPaymentService, TServiceResponce } from '../types'

export const getServicesMapper = (
  services: TServiceResponce[],
): TPaymentService[] =>
  services.map(({ serviceUrl, serviceId, serviceName }) => {
    return {
      icon: Images[serviceUrl],
      id: serviceId,
      name: serviceName,
    }
  })

const a = {
  b: 2,
  c: 4,
}
a['b']
