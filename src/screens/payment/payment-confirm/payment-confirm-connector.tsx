import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { Linking } from 'react-native'
import { PaymentConfirm } from './payment-confirm'
import { useOtp } from '@entities/otp/hooks'
import { usePaymentRequest } from '@entities/payments/hooks/use-payment-request'

type Props = StackScreenProps<RootStackParamsList, 'paymentConfirm'>

export const PaymentConfirmConnector = ({ navigation, route }: Props) => {
  const {
    phone,
    amount,
    name: mobile_operator,
    cashback_percentage,
  } = route.params

  const { mutateAsync } = useOtp()
  const { mutateAsync: paymentRequestAsync } = usePaymentRequest()
  const confirmTransaction = async () => {
    const {
      data: { otpId, otpLen, resendIn, attemptsLeft },
    } = await mutateAsync({
      postApiCoreOtpRequest: { operation: 'PAYMENT' },
    })
    const onConfirm = async () => {
      const { result } = await paymentRequestAsync(otpId)
      navigation.navigate('paymentResult', { amount, result })
    }

    navigation.navigate('paymentOtp', {
      attemptsLeft: attemptsLeft!,
      otpId,
      otpLen,
      resendIn,
      onConfirm,
    })
  }
  const openLink = () => {
    Linking.openURL('https://career.kode.ru/training/').catch(err =>
      console.error('Failed to open URL:', err),
    )
  }

  const cachBack = amount * (cashback_percentage / 10000)

  return (
    <PaymentConfirm
      confirmTransaction={confirmTransaction}
      mobile_operator={mobile_operator}
      openLink={openLink}
      phone={phone}
      amount={amount}
      cachBack={cachBack}
    />
  )
}
