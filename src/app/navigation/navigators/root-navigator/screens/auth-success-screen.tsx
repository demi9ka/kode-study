import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '..'
import { AuthSuccessConnector } from '@screens/auth/auth-success'
import { CommonActions } from '@react-navigation/native'

type Props = StackScreenProps<RootStackParamsList, 'authSuccess'>

export const AuthSuccessScreen = ({ navigation }: Props) => {
  const goToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'HomeTabs' }],
      }),
    )
  }

  return <AuthSuccessConnector goToHome={goToHome} />
}
