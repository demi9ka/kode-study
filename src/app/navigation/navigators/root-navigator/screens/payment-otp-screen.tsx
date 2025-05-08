import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { OtpConnector } from '@features/otp'

type Props = StackScreenProps<RootStackParamsList, 'paymentOtp'>

export const PaymentOtpScreen = ({ route, navigation }: Props) => {
  const goToTop = () => {
    navigation.popToTop()
  }
  return <OtpConnector goToTop={goToTop} {...route.params} />
}
