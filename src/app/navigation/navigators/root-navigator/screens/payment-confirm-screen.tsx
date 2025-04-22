import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { PaymentConfirmConnector } from '@screens/payment/payment-confirm'

type Props = StackScreenProps<RootStackParamsList, 'paymentConfirm'>

export const PaymentConfirmScreen = (props: Props) => {
  return <PaymentConfirmConnector {...props} />
}
