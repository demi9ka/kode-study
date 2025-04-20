import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { Linking } from 'react-native'
import { services } from '../payment-services/constants'
import { PaymentConfirm } from './payment-confirm'

export type PaymentSuccessProps = StackScreenProps<
  RootStackParamsList,
  'paymentConfirm'
>
type Props = StackScreenProps<RootStackParamsList, 'paymentConfirm'>

export const PaymentConfirmConnector = ({ navigation, route }: Props) => {
  const confirmTransaction = () => {
    navigation.navigate('paymentSuccess', { amount: route.params.amount })
  }
  const openLink = () => {
    Linking.openURL('https://career.kode.ru/training/') // Замените на ваш URL
      .catch(err => console.error('Failed to open URL:', err))
  }

  const mobile_operator = services.find(
    ({ serviceId }) => serviceId === route.params.serviceId,
  )!.serviceName

  const cashback = (route.params.amount * 0.1).toFixed(2)
  const { phone, amount } = route.params

  return (
    <PaymentConfirm
      cashback={cashback}
      confirmTransaction={confirmTransaction}
      mobile_operator={mobile_operator}
      openLink={openLink}
      phone={phone}
      amount={amount}
    />
  )
}
