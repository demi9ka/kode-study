import { useQuery } from '@tanstack/react-query'
import { paymentApi } from 'shared/api'

export const usePaymentList = () => {
  return useQuery({
    queryFn: async () => {
      throw new Error('sdsd')
      return (await paymentApi.getPaymentList()).data
    },

    queryKey: ['payment-service-list'],
  })
}
