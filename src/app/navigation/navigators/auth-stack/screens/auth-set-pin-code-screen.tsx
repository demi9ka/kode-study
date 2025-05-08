import { StackScreenProps } from '@react-navigation/stack'
import { AuthSetPinCodeConnector } from '@features/auth'
import { AuthStackScreenParams } from '..'

type Props = StackScreenProps<AuthStackScreenParams, 'authSetPinCode'>

export const AuthSetPinCodeScreen = ({ navigation }: Props) => {
  const onSkip = () => {
    navigation.replace('authSuccess')
  }

  const goToPinCode = () => {
    navigation.navigate('authPinCode', {
      variant: 'create',
      pinCodeLen: 5,
    })
  }

  return <AuthSetPinCodeConnector onSkip={onSkip} goToPinCode={goToPinCode} />
}
