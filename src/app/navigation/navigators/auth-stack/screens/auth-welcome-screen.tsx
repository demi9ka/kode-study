import { StackScreenProps } from '@react-navigation/stack'
import { AuthStackScreenParams } from '../types'
import { AuthWelcomeConnector } from '@features/auth'

type Props = StackScreenProps<AuthStackScreenParams, 'authWelcome'>

export const AuthWelcomeScreen = ({ navigation }: Props) => {
  const goToPhoneNumber = () => {
    navigation.replace('authPhone')
  }
  const goToPassword = (guestToken: string) => {
    navigation.replace('authPassword', { guestToken })
  }
  const goToPinCode = (pinCode: string) => {
    navigation.replace('authPinCode', {
      pinCodeLen: pinCode.length,
      variant: 'write',
      compareValue: pinCode,
    })
  }

  return (
    <AuthWelcomeConnector
      goToPinCode={goToPinCode}
      goToPassword={goToPassword}
      goToPhoneNumber={goToPhoneNumber}
    />
  )
}
