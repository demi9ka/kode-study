import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentServices } from './payment-services'
import { useEffect, useState } from 'react'
import { useGetServices } from './entities/hooks/use-get-services'
import { TPaymentService } from './types'

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>

export const PaymentServicesConnector = ({
  navigation,
}: PaymentServicesProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [services, setServices] = useState<TPaymentService[] | null>(null)
  const [services_data, setServicesData] = useState<TPaymentService[] | null>(
    null,
  )

  useEffect(() => {
    const services_responce = useGetServices()
    services_responce.then(res => {
      if (!res) return
      setServices(res)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!services) return
    const filter_services = services.filter(({ name }) =>
      name.toUpperCase().includes(search.toUpperCase()),
    )
    setServicesData(filter_services)
  }, [services, search])

  const openCreate = (id: string) => {
    if (!services) return
    const crnt_service = services.find(
      ({ id: service_id }) => service_id === id,
    )!
    navigation.navigate('paymentCreate', crnt_service)
  }

  return (
    <PaymentServices
      search={search}
      setSearch={setSearch}
      services_data={services_data || []}
      openCreate={openCreate}
      isLoading={isLoading}
    />
  )
}
