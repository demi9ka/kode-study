import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { PaymentCreateConnector } from '@screens/payment'

type Props = StackScreenProps<RootStackParamsList, 'paymentCreate'>

export const PaymentCreateScreen = (props: Props) => {
  return <PaymentCreateConnector {...props} />
}
