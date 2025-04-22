import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentSuccess } from './payment-success'

export type PaymentSuccessProps = StackScreenProps<
  RootStackParamsList,
  'paymentSuccess'
>

export const PaymentSuccessConnector = ({
  navigation,
  route,
}: PaymentSuccessProps) => {
  const backToMenu = () => {
    navigation.popToTop()
  }
  const amount = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(route.params.amount)
  return <PaymentSuccess backToMenu={backToMenu} amount={amount} />
}
