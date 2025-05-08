import { StackScreenProps } from '@react-navigation/stack'
import { AuthSetPinCodeConnector } from '@features/auth'
import { RootStackParamsList } from '..'

type Props = StackScreenProps<RootStackParamsList, 'authSetPinCode'>

export const AuthSetPinCodeScreen = ({ navigation }: Props) => {
  const onSkip = () => {
    navigation.replace('authSuccess')
  }

  const goToPinCode = () => {
    navigation.navigate('pinCode', {
      variant: 'create',
      pinCodeLen: 5,
    })
  }

  return <AuthSetPinCodeConnector onSkip={onSkip} goToPinCode={goToPinCode} />
}
