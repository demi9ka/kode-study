import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { WelcomeConnector } from '@screens/welcome'

type Props = StackScreenProps<RootStackParamsList, 'welcome'>

export const WelcomeScreen = ({ navigation }: Props) => {
  const goToPhoneNumber = () => {
    navigation.replace('authPhone')
  }
  const goToPassword = (guestToken: string) => {
    navigation.replace('authPassword', { guestToken })
  }
  const goToPinCode = (pinCode: string) => {
    navigation.replace('pinCode', {
      pinCodeLen: pinCode.length,
      variant: 'write',
      compareValue: pinCode,
    })
  }

  return (
    <WelcomeConnector
      goToPinCode={goToPinCode}
      goToPassword={goToPassword}
      goToPhoneNumber={goToPhoneNumber}
    />
  )
}
