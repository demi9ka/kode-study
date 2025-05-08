import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { AuthPasswordConnector } from '@screens/auth/auth-password/auth-password-connector'

type Props = StackScreenProps<RootStackParamsList, 'authPassword'>

export const AuthPasswordScreen = ({ route, navigation }: Props) => {
  const goToPinCode = () => {
    navigation.navigate('authSetPinCode')
  }
  const popToTop = () => {
    navigation.popToTop()
  }
  const { guestToken } = route.params
  return (
    <AuthPasswordConnector
      guestToken={guestToken}
      goToPinCode={goToPinCode}
      popToTop={popToTop}
    />
  )
}
