import { PaymentServicesConnector } from '@screens/payment'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'

export type Props = StackScreenProps<RootStackParamsList, 'paymentServices'>

export const PaymentServicesScreen = (props: Props) => {
  return <PaymentServicesConnector {...props} />
}
