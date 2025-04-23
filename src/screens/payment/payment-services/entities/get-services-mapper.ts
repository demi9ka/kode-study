import { TPaymentService, TServiceResponce } from '../types'

export const getServicesMapper = (
  services: TServiceResponce[],
): TPaymentService[] =>
  services.map(({ service_id, service_name, service_icon }) => {
    return {
      icon: service_icon || '',
      id: service_id,
      name: service_name,
    }
  })
