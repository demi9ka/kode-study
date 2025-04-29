import { paymentApi } from '@shared/api'
import { useQuery } from '@tanstack/react-query'

export const usePaymentService = (serviceId: string) => {
  return useQuery({
    queryFn: async () =>
      paymentApi.getApiCorePaymentServiceId({
        authorization: 'Bearer 123',
        serviceId,
      }),
    queryKey: ['payment-service'],
  })
}
