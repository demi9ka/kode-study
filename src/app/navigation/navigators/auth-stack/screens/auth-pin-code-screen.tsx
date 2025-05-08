import { StackScreenProps } from '@react-navigation/stack'
import { AuthStackScreenParams } from '../types'
import { PinCodeConnector } from '@features/pin-code'

type Props = StackScreenProps<AuthStackScreenParams, 'authPinCode'>

export const AuthPinCodeScreen = ({ navigation, route }: Props) => {
  const { compareValue, pinCodeLen, variant } = route.params

  const goToConfirm = (pinCode: string, pinCodeLen: number) => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'authPinCode',
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
      goToSuccess={goToSuccess}
      goToPhone={goToPhone}
    />
  )
}
