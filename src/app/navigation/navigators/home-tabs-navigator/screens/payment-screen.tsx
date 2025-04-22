import { StackScreenProps } from '@react-navigation/stack'
import { HomeTabsParamsList } from '../types'
import { PaymentMainConnector } from '@screens/payment'
import { CompositeScreenProps } from '@react-navigation/native'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'

type Props = CompositeScreenProps<
  StackScreenProps<HomeTabsParamsList, 'PaymentMain'>,
  StackScreenProps<RootStackParamsList, 'paymentServices'>
>

export const PaymentScreen = (props: Props) => {
  return <PaymentMainConnector {...props} />
}
