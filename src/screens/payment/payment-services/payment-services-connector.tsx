import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentServices } from './payment-services'
import { useState } from 'react'
import { usePaymentList } from '@entities/payments/hooks'
import { addToast } from '@features/toast'
import { getServicesMapper } from './mappers/map-services'

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>

export const PaymentServicesConnector = ({
  navigation,
}: PaymentServicesProps) => {
  const [search, setSearch] = useState('')
  const { data, isLoading, refetch, isError, error } = usePaymentList()
  if (isError) {
    addToast({
      message: error.message,
      variant: 'error',
    })
  }

  const dataMapped = data ? getServicesMapper(data.category[0].services!) : []

  const openCreate = (id: string) => {
    if (!dataMapped.length) return
    navigation.navigate('paymentCreate', dataMapped.find(el => el.id === id)!)
  }

  const filteredData = dataMapped.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <PaymentServices
      onRefresh={refetch}
      search={search}
      setSearch={setSearch}
      services_data={filteredData}
      openCreate={openCreate}
      isLoading={isLoading}
    />
  )
}
