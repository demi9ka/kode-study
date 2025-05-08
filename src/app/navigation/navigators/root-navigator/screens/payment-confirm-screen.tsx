import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { PaymentConfirmConnector } from '@screens/payment/payment-confirm'
import { OtpProps } from '@features/otp/otp-connector'

type Props = StackScreenProps<RootStackParamsList, 'paymentConfirm'>

export const PaymentConfirmScreen = ({ navigation, route }: Props) => {
  const { phone, amount, name, cashbackPercentage } = route.params

  const goToPaymentResult = (result: boolean) => {
    navigation.navigate('paymentResult', { amount, result })
  }

  const goToOtp = (data: OtpProps) => {
    navigation.navigate('paymentOtp', data)
  }
  return (
    <PaymentConfirmConnector
      goToPaymentResult={goToPaymentResult}
      goToOtp={goToOtp}
      amount={amount}
      cashbackPercentage={cashbackPercentage}
      name={name}
      phone={phone}
    />
  )
}
