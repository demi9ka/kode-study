import { PaymentResultConnector } from '@screens/payment'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'

type Props = StackScreenProps<RootStackParamsList, 'paymentResult'>

export const PaymentResultScreen = (props: Props) => {
  return <PaymentResultConnector {...props} />
}
