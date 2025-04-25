import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { Linking } from 'react-native'
import { PaymentConfirm } from './payment-confirm'
import { useOtp } from '@entities/otp/hooks'
import { usePaymentRequest } from '@entities/payments/hooks/use-payment-request'
import { addToast } from '@features/toast'
import { goToPaymentOtpType } from '@app/navigation/navigators/root-navigator/screens/payment-confirm-screen'

type Props = {
  goToPaymentResult: (result: boolean) => void
  goToPaymentOtp: (data: goToPaymentOtpType) => void
} & StackScreenProps<RootStackParamsList, 'paymentConfirm'>['route']['params']

export const PaymentConfirmConnector = ({
  goToPaymentResult,
  goToPaymentOtp,
  amount,
  cashback_percentage,
  name,
  phone,
}: Props) => {
  const { mutateAsync, isError, error } = useOtp()
  const { mutateAsync: paymentRequestAsync } = usePaymentRequest()
  const confirmTransaction = async () => {
    const {
      data: { otpId, otpLen, resendIn, attemptsLeft },
    } = await mutateAsync({
      postApiCoreOtpRequest: { operation: 'PAYMENT' },
    })
    if (isError) {
      addToast({
        message: error.message,
        variant: 'error',
      })
    }

    const onConfirm = async () => {
      const { result } = await paymentRequestAsync(otpId)
      goToPaymentResult(result)
    }

    goToPaymentOtp({
      attemptsLeft: attemptsLeft!,
      onConfirm,
      otpId,
      otpLen,
      resendIn,
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
      mobileOperator={name}
      openLink={openLink}
      phone={phone}
      amount={amount}
      cachBack={cachBack}
    />
  )
}
