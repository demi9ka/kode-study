import { StackScreenProps } from '@react-navigation/stack'
import { AuthPhoneConnector } from '@features/auth'
import { OtpProps } from '@features/otp/otp-connector'
import { AuthStackScreenParams } from '../types'

type Props = StackScreenProps<AuthStackScreenParams, 'authPhone'>

export const AuthPhoneScreen = ({ navigation }: Props) => {
  const goToOtp = (props: OtpProps) => {
    navigation.replace('authOtp', props)
  }
  const goToPassword = (guestToken: string) => {
    navigation.replace('authPassword', { guestToken })
  }

  return <AuthPhoneConnector goToOtp={goToOtp} goToPassword={goToPassword} />
}
