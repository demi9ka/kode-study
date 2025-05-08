import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { AuthPhoneConnector } from '@features/auth'
import { OtpProps } from '@features/otp/otp-connector'

type Props = StackScreenProps<RootStackParamsList, 'authPhone'>

export const AuthPhoneScreen = ({ navigation }: Props) => {
  const goToOtp = (props: OtpProps) => {
    navigation.replace('otp', props)
  }
  const goToPassword = (guestToken: string) => {
    navigation.replace('authPassword', { guestToken })
  }

  return <AuthPhoneConnector goToOtp={goToOtp} goToPassword={goToPassword} />
}
