import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { Linking } from 'react-native'
import { PaymentConfirm } from './payment-confirm'
import { useOtp } from '@entities/otp/hooks'
import { usePaymentRequest } from '@entities/payments/hooks/use-payment-request'
import { addToast } from '@features/toast'
import { OtpProps } from '@features/otp/otp-connector'

type Props = {
  goToPaymentResult: (result: boolean) => void
  goToOtp: (data: OtpProps) => void
} & StackScreenProps<RootStackParamsList, 'paymentConfirm'>['route']['params']

export const PaymentConfirmConnector = ({
  goToPaymentResult,
  goToOtp,
  amount,
  cashbackPercentage,
  name,
  phone,
}: Props) => {
  const { mutate: useOtpMuatate } = useOtp()
  const { mutate: paymentRequestAsync } = usePaymentRequest()

  const onConfirm = (otpId: string) => {
    paymentRequestAsync(otpId, {
      onSuccess: ({ result }) => {
        goToPaymentResult(result)
      },
    })
  }
  const confirmTransaction = () => {
    useOtpMuatate(phone, {
      onSuccess: ({ otpId, otpLen }) => {
        goToOtp({
          attempts: 5,
          onConfirm,
          otpId,
          otpLen,
          resendIn: 60,
          phone,
        })
      },
      onError: error => {
        addToast({
          message: error.message,
          variant: 'error',
        })
      },
    })
  }
  const openLink = () => {
    Linking.openURL('https://career.kode.ru/training/').catch(err =>
      console.error('Failed to open URL:', err),
    )
  }

  const cachBack = amount * (cashbackPercentage / 10000)

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
