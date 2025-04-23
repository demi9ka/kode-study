import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentServices } from './payment-services'
import { useState } from 'react'
import { usePaymentList } from '@entities/payments/hooks'
import { getServicesMapper } from './entities/get-services-mapper'

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>

export const PaymentServicesConnector = ({
  navigation,
}: PaymentServicesProps) => {
  const [search, setSearch] = useState('')
  const { data, isLoading, refetch } = usePaymentList()

  const data_mapped = data ? getServicesMapper(data.category[0].services!) : []

  const openCreate = (id: string) => {
    if (!data_mapped.length) return
    navigation.navigate('paymentCreate', data_mapped.find(el => el.id === id)!)
  }

  const filter_data = data_mapped.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <PaymentServices
      onRefresh={refetch}
      search={search}
      setSearch={setSearch}
      services_data={filter_data || []}
      openCreate={openCreate}
      isLoading={isLoading}
    />
  )
}
