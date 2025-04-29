import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { AuthPhoneConnector } from '@screens/auth'

type Props = StackScreenProps<RootStackParamsList, 'authPhone'>

export const AuthPhoneScreen = ({ navigation, route }: Props) => {
  //   const goToPhoneNumber = () => {
  //     navigation.navigate('authPhone')
  //   }
  //   const goToPassword = () => {
  //     navigation.navigate('authPassword', {
  //       create: false,
  //     })
  //   }

  return <AuthPhoneConnector />
}
