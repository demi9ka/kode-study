import { paymentApi } from '@shared/api'
import { useQuery } from '@tanstack/react-query'

export const usePaymentService = (serviceId: string) => {
  return useQuery({
    queryFn: async () =>
      paymentApi.getApiCorePaymentServiceId({
        authorization: 'Bearer 123',
        serviceId,
      }),
    //   new Promise(resolve => {
    //     setTimeout(
    //       () =>
    //         resolve({
    //           data: {
    //             service_id: 1,
    //             cashback_percentage: 1750,
    //             recipient_mask: '9XX XXX XX XX',
    //             comment_mask: null,
    //           },
    //         }),
    //       1000,
    //     )
    //   }),
    queryKey: ['payment-service'],
  })
}
