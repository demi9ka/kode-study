import { PaymentSuccessConnector } from '@screens/payment'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'

type Props = StackScreenProps<RootStackParamsList, 'paymentSuccess'>

export const PaymentSuccessScreen = (props: Props) => {
  return <PaymentSuccessConnector {...props} />
}
