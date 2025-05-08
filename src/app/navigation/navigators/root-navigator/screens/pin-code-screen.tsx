import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { PinCodeConnector } from '@features/pin-code'

type Props = StackScreenProps<RootStackParamsList, 'pinCode'>

export const PinCodeScreen = ({ navigation, route }: Props) => {
  const { compareValue, pinCodeLen, variant } = route.params

  const goToConfirm = (pinCode: string, pinCodeLen: number) => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'pinCode',
          params: { pinCodeLen, variant: 'confirm', compareValue: pinCode },
        },
      ],
    })
  }
  const goToSuccess = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'authSuccess' }],
    })
  }
  const goToHome = () => {
    navigation.replace('HomeTabs', {
      BankMain: undefined,
      HomeMain: undefined,
      PaymentMain: undefined,
      ProfileMain: undefined,
    })
  }

  const goToPhone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'authPhone' }],
    })
  }

  return (
    <PinCodeConnector
      variant={variant}
      pinCodeLen={pinCodeLen}
      compareValue={compareValue}
      goToConfirm={goToConfirm}
      goToHome={goToHome}
      goToSuccess={goToSuccess}
      goToPhone={goToPhone}
    />
  )
}
