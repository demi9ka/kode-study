import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentServices } from './payment-services'
import { useState } from 'react'
import { services } from './constants'

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>

export const PaymentServicesConnector = ({
  navigation,
}: PaymentServicesProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')

  const openCreate = (serviceId: string, title: string) => {
    navigation.navigate('paymentCreate', { serviceId, title })
  }
  const services_data = services.filter(({ serviceName }) =>
    serviceName.toUpperCase().includes(search.toUpperCase()),
  )

  return (
    <PaymentServices
      search={search}
      setSearch={setSearch}
      services_data={services_data}
      openCreate={openCreate}
      isLoading={isLoading}
    />
  )
}
