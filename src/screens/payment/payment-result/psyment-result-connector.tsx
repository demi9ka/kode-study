import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentResult } from './payment-result'

export type PaymentSuccessProps = StackScreenProps<
  RootStackParamsList,
  'paymentResult'
>

export const PaymentResultConnector = ({
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
  const { result } = route.params
  return (
    <PaymentResult backToMenu={backToMenu} amount={amount} result={result} />
  )
}
