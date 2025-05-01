import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { AuthPhoneConnector } from '@screens/auth'
import { OtpConnectorProps } from '@features/otp/otp-connector'

type Props = StackScreenProps<RootStackParamsList, 'authPhone'>

export const AuthPhoneScreen = ({ navigation }: Props) => {
  const goToOtp = (props: OtpConnectorProps) => {
    navigation.navigate('otp', props)
  }

  return <AuthPhoneConnector goToOtp={goToOtp} />
}
