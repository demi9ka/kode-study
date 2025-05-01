import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { PaymentConfirmConnector } from '@screens/payment/payment-confirm'
import { OtpConnectorProps } from '@features/otp/otp-connector'

type Props = StackScreenProps<RootStackParamsList, 'paymentConfirm'>

export const PaymentConfirmScreen = ({ navigation, route }: Props) => {
  const { phone, amount, name, cashback_percentage } = route.params
  const goToPaymentResult: (result: boolean) => void = result =>
    navigation.navigate('paymentResult', { amount, result })

  const goToOtp = (data: OtpConnectorProps) => {
    navigation.navigate('otp', data)
  }
  return (
    <PaymentConfirmConnector
      goToPaymentResult={goToPaymentResult}
      goToOtp={goToOtp}
      amount={amount}
      cashback_percentage={cashback_percentage}
      name={name}
      phone={phone}
    />
  )
}
