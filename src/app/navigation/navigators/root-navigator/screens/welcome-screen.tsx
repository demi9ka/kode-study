import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { WelcomeConnector } from '@screens/welcome'
import { CommonActions } from '@react-navigation/native'

type Props = StackScreenProps<RootStackParamsList, 'welcome'>

export const welcomeScreen = ({ navigation, route }: Props) => {
  const goToPhoneNumber = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'authPhone' }],
      }),
    )
  }
  const goToPassword = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'authPassword' }],
      }),
    )
  }

  return (
    <WelcomeConnector
      goToPassword={goToPassword}
      goToPhoneNumber={goToPhoneNumber}
    />
  )
}
