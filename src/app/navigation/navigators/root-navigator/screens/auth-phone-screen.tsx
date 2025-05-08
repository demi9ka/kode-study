import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { AuthPhoneConnector } from '@screens/auth'
import { OtpProps } from '@features/otp/otp-connector'
import { StackActions } from '@react-navigation/native'

type Props = StackScreenProps<RootStackParamsList, 'authPhone'>

export const AuthPhoneScreen = ({ navigation }: Props) => {
  const goToOtp = (props: OtpProps) => {
    navigation.navigate('otp', props)
  }
  const goToPassword = (guestToken: string) => {
    navigation.dispatch(
      StackActions.replace('authPassword', {
        guestToken,
      }),
    )
    // navigation.navigate('authPassword', { guestToken })
  }

  return <AuthPhoneConnector goToOtp={goToOtp} goToPassword={goToPassword} />
}
