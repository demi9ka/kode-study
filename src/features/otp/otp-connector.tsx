import { StackScreenProps } from '@react-navigation/stack'
import { OtpScreen } from './ui/otp-screen/otp-screen'
import { useEffect, useState } from 'react'
import { useConfirmOtp, useResendOtp } from 'entities/otp/hooks'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'

type TPaymentProvidersProps = StackScreenProps<
  RootStackParamsList,
  'paymentOtp'
>

// Делаем фичу переиспользуемой
// type Props = {
//   otpId: string;
//   otpLength: number;
//   resendIn: number;
//   onConfirmed: () => void;
// };

export const OtpConnector = ({ navigation, route }: TPaymentProvidersProps) => {
  const [value, setValue] = useState('')

  const { otpId, otpLen, resendIn, onConfirm, attemptsLeft } = route.params
  const { mutateAsync, data, isPending } = useConfirmOtp()
  const { mutate, data: resendData } = useResendOtp()
  const handleConfirm = (otp: string) => {
    if (value.length === otpLen) {
      mutateAsync(
        {
          postApiCoreOtpConfirmRequest: {
            otp,
            otpId,
          },
        },
        {
          onSuccess: () => {
            onConfirm()
          },
        },
      )
    }
  }

  const onPressNumber = (nm: string) => {
    setValue(prev_v => prev_v + nm)
  }
  const onPressRemove = () => {
    setValue(prev_v => prev_v.slice(0, -1))
  }

  useEffect(() => {
    handleConfirm(value)
  }, [value])

  return (
    <OtpScreen
      isLoading={isPending}
      canResend={false}
      onResend={() => {
        mutate({
          postApiCoreOtpResendRequest: {
            otpId,
          },
        })
      }}
      resendIn={resendData?.data.resendIn || resendIn || 0}
      attemptsLeft={
        resendData?.data.attemptsLeft || data?.data.attemptLeft || 0
      }
      onPressNumber={onPressNumber}
      onPressRemove={onPressRemove}
      value={value}
    />
  )
}
