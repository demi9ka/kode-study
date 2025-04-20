import { HomeTabsParamsList } from '@app/navigation/navigators/home-tabs-navigator'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentMain } from './payment-main'

export type MainStackProps = StackScreenProps<RootStackParamsList>

export type PaymentMainProps = CompositeScreenProps<
  StackScreenProps<HomeTabsParamsList, 'PaymentMain'>,
  MainStackProps
>

export const PaymentMainConnector = ({ navigation }: PaymentMainProps) => {
  const handlerPressMobile = () => navigation.navigate('paymentServices')
  return <PaymentMain handlerPressMobile={handlerPressMobile} />
}
