import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { AuthPasswordConnector } from '@features/auth'
import { Alert } from 'react-native'

type Props = StackScreenProps<RootStackParamsList, 'authPassword'>

export const AuthPasswordScreen = ({ route, navigation }: Props) => {
  const goToPinCode = () => {
    navigation.replace('authSetPinCode')
  }
  const exitAlert = () => {
    Alert.alert('Вы точно хотите выйти?', '', [
      { text: 'Отмена' },
      {
        text: 'Выйти',
        onPress: () => {
          navigation.replace('authPhone')
        },
      },
    ])
  }
  const { guestToken } = route.params
  return (
    <AuthPasswordConnector
      guestToken={guestToken}
      goToPinCode={goToPinCode}
      exitAlert={exitAlert}
    />
  )
}
