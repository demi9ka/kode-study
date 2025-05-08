import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { PinCodeConnector } from '@features/pin-code'

type Props = StackScreenProps<RootStackParamsList, 'pinCode'>

export const PinCodeScreen = ({ navigation, route }: Props) => {
  const { compareValue, pinCodeLen, variant } = route.params

  const skipPinCode = () => {
    navigation.navigate('authSuccess')
  }

  const goToConfirm = (pinCode: string, pinCodeLen: number) => {
    navigation.navigate('pinCode', {
      pinCodeLen,
      variant: 'confirm',
      compareValue: pinCode,
    })
  }
  const goToSuccess = () => {
    navigation.navigate('authSuccess')
  }
  const goToHome = () => {
    navigation.navigate('HomeTabs', {
      BankMain: undefined,
      HomeMain: undefined,
      PaymentMain: undefined,
      ProfileMain: undefined,
    })
  }

  return (
    <PinCodeConnector
      variant={variant}
      skipPinCode={skipPinCode}
      pinCodeLen={pinCodeLen}
      compareValue={compareValue}
      goToConfirm={goToConfirm}
      goToHome={goToHome}
      goToSuccess={goToSuccess}
    />
  )
}
