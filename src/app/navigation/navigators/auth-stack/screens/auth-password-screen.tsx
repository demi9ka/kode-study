import { StackScreenProps } from '@react-navigation/stack'
import { AuthPasswordConnector } from '@features/auth'
import { Alert } from 'react-native'
import { AuthStackScreenParams } from '../types'

type Props = StackScreenProps<AuthStackScreenParams, 'authPassword'>

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
