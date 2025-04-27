import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { PaymentConfirmConnector } from '@screens/payment/payment-confirm'

type Props = StackScreenProps<RootStackParamsList, 'paymentConfirm'>

export type goToPaymentOtpType = {
  attemptsLeft: number
  otpId: string
  otpLen: number
  resendIn: number
  onConfirm: () => void
}

export const PaymentConfirmScreen = ({ navigation, route }: Props) => {
  const { phone, amount, name, cashback_percentage } = route.params
  const goToPaymentResult: (result: boolean) => void = result =>
    navigation.navigate('paymentResult', { amount, result })

  const goToPaymentOtp = (data: goToPaymentOtpType) => {
    navigation.navigate('paymentOtp', { ...data })
  }
  return (
    <PaymentConfirmConnector
      goToPaymentResult={goToPaymentResult}
      goToPaymentOtp={goToPaymentOtp}
      amount={amount}
      cashback_percentage={cashback_percentage}
      name={name}
      phone={phone}
    />
  )
}
