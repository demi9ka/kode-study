import { StackScreenProps } from '@react-navigation/stack'
import { AuthSetPinCodeConnector } from '@screens/auth/auth-set-pin-code/auth-set-pin-code-connector'
import { RootStackParamsList } from '..'

type Props = StackScreenProps<RootStackParamsList, 'authSetPinCode'>

export const AuthSetPinCodeScreen = ({ navigation }: Props) => {
  const onSkip = () => {
    navigation.navigate('authSuccess')
  }

  const goToPinCode = () => {
    navigation.navigate('pinCode', {
      variant: 'create',
      pinCodeLen: 5,
    })
  }

  return <AuthSetPinCodeConnector onSkip={onSkip} goToPinCode={goToPinCode} />
}
