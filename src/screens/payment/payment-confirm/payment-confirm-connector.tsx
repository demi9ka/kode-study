import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { Linking } from 'react-native'
import { PaymentConfirm } from './payment-confirm'
import { useOtp } from '@entities/otp/hooks'
import { usePaymentRequest } from '@entities/payments/hooks/use-payment-request'
import { addToast } from '@features/toast'
import { OtpConnectorProps } from '@features/otp/otp-connector'

type Props = {
  goToPaymentResult: (result: boolean) => void
  goToOtp: (data: OtpConnectorProps) => void
} & StackScreenProps<RootStackParamsList, 'paymentConfirm'>['route']['params']

export const PaymentConfirmConnector = ({
  goToPaymentResult,
  goToOtp,
  amount,
  cashback_percentage,
  name,
  phone,
}: Props) => {
  const { mutateAsync: useOtpMuatate, isError, error } = useOtp()
  const { mutateAsync: paymentRequestAsync } = usePaymentRequest()

  const confirmTransaction = async () => {
    const { otpId, otpLen } = await useOtpMuatate(phone)
    if (isError) {
      return addToast({
        message: error.message,
        variant: 'error',
      })
    }

    const onConfirm = async () => {
      const { result } = await paymentRequestAsync(otpId)
      goToPaymentResult(result)
    }

    goToOtp({
      attempts: 5,
      onConfirm,
      otpId,
      otpLen,
      resendIn: 60,
      phone,
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
