import { useEffect, useState } from 'react'
import { useConfirmOtp, useOtp } from 'entities/otp/hooks'
import { Otp } from './otp'
import { Alert } from 'react-native'

export type OtpProps = {
  otpId: string
  otpLen: number
  resendIn: number
  attempts: number
  onConfirm: (guestToken: string) => void
  phone: string
}

export type OtpConnectorProps = {
  goToTop: VoidFunction
} & OtpProps

export const OtpConnector = ({
  onConfirm,
  otpId: defaultOtpId,
  phone,
  otpLen,
  attempts,
  resendIn: resendInInput,
  goToTop,
}: OtpConnectorProps) => {
  const [otpId, setOtpId] = useState(defaultOtpId)
  const [value, setValue] = useState('')
  const [resendIn, setResendIn] = useState(resendInInput)
  const [canResend, setCanResend] = useState(false)
  const [attemptsLeft, setAttemptsLeft] = useState(attempts)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { mutateAsync: otpConfirmMutate, isPending } = useConfirmOtp()
  const { mutateAsync: otpMutate } = useOtp()

  const handleConfirm = async (otp: string) => {
    if (value.length !== otpLen) return

    otpConfirmMutate(
      {
        postApiAuthConfirmRequest: {
          otpCode: otp,
          otpId,
          phone,
        },
      },
      {
        onSuccess: e => {
          onConfirm(e.data.guestToken)
        },
        onError: e => {
          setAttemptsLeft(prev => prev - 1)
          if (attemptsLeft == 0) {
            Alert.alert(
              `Вы ввели неверно код ${attempts} раз`,
              'Данная сессия авторизации будет сброшена!',
              [
                {
                  text: 'Выход',
                  style: 'destructive',
                  onPress: () => {
                    goToTop()
                  },
                },
              ],
            )
          } else {
            setErrorMessage(`Неверный код. Осталось попыток: ${attemptsLeft}`)
          }
        },
      },
    )
  }

  const onPressNumber = (number: string) => {
    if (isPending) return
    setValue(prev => (prev + number).slice(0, otpLen))
  }

  const onPressRemove = () => {
    if (isPending) return
    setValue(prev_v => prev_v.slice(0, -1))
  }

  const onResend = async () => {
    const { otpId: newOtpId } = await otpMutate(phone)
    setOtpId(newOtpId)
    setResendIn(resendInInput)
    waitResend()
  }

  useEffect(() => {
    handleConfirm(value)
  }, [value])

  useEffect(() => {
    const interval = waitResend()
    return () => {
      clearInterval(interval)
    }
  }, [])

  const waitResend = () => {
    setCanResend(false)
    const interval = setInterval(() => {
      setResendIn(prev => {
        if (prev <= 0) {
          clearInterval(interval)
          setCanResend(true)
        }
        return prev - 1
      })
    }, 1000)
    return interval
  }
  return (
    <Otp
      canResend={canResend}
      resendIn={resendIn}
      onResend={onResend}
      attemptsLeft={attemptsLeft}
      isLoading={isPending}
      onPressNumber={onPressNumber}
      onPressRemove={onPressRemove}
      value={value}
      otpLen={otpLen}
      errorMessage={errorMessage}
      hasError={Boolean(errorMessage)}
    />
  )
}
