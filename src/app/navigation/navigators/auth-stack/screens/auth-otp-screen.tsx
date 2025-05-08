import { StackScreenProps } from '@react-navigation/stack'
import { OtpConnector } from '@features/otp'
import { AuthStackScreenParams } from '../types'

type Props = StackScreenProps<AuthStackScreenParams, 'authOtp'>

export const AuthOtpScreen = ({ route, navigation }: Props) => {
  const goToTop = () => {
    navigation.popToTop()
  }
  return <OtpConnector goToTop={goToTop} {...route.params} />
}
