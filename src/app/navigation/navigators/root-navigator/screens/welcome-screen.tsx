import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { WelcomeConnector } from '@screens/welcome'
import { CommonActions } from '@react-navigation/native'

type Props = StackScreenProps<RootStackParamsList, 'welcome'>

export const WelcomeScreen = ({ navigation }: Props) => {
  const goToPhoneNumber = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'authPhone' }],
      }),
    )
  }
  const goToPassword = (guestToken: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'authPassword', params: { guestToken } }],
      }),
    )
  }
  const goToPinCode = (pinCode: string) => {
    console.log(pinCode)
  }

  return (
    <WelcomeConnector
      goToPinCode={goToPinCode}
      goToPassword={goToPassword}
      goToPhoneNumber={goToPhoneNumber}
    />
  )
}
