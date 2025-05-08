import { addToast } from '@features/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FieldErrors, FormProvider } from 'react-hook-form'
import { AuthPhone } from './auth-phone'
import { TAuthPostOtpCode, getMaskedPhone, getSchema } from './model'
import { useEffect } from 'react'
import { useOtpCode } from './hooks/use-otp-code'
import { OtpProps } from '@features/otp/otp-connector'
import { saveValue } from '@features/storage'

type AuthPhoneConnectorType = {
  goToOtp: (props: OtpProps) => void
  goToPassword: (guestToken: string) => void
}

export const AuthPhoneConnector = ({
  goToOtp,
  goToPassword,
}: AuthPhoneConnectorType) => {
  const { mutateAsync, isPending } = useOtpCode()
  const form = useForm<TAuthPostOtpCode>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      phone: '',
    },
    resolver: zodResolver(getSchema()),
  })
  const { control, watch, setValue, handleSubmit } = form

  const phoneValue = watch('phone')

  const onValid = async ({ phone }: TAuthPostOtpCode) => {
    const { otpId, otpLen } = await mutateAsync(phone)
    goToOtp({
      otpId,
      otpLen,
      resendIn: 6,
      attempts: 5,
      phone,
      onConfirm: guestToken => {
        saveValue('guestToken', guestToken)
        goToPassword(guestToken)
      },
    })
  }

  const onInvalid = (errors?: FieldErrors<TAuthPostOtpCode>) => {
    if (errors?.phone?.message) {
      addToast({
        message: errors?.phone?.message,
        variant: 'error',
      })
      return
    }
  }

  useEffect(() => {
    const newPhoneValue = getMaskedPhone({ phone: phoneValue })
    setValue('phone', newPhoneValue)
  }, [phoneValue])

  return (
    <FormProvider {...form}>
      <AuthPhone
        handleSubmit={handleSubmit(onValid, onInvalid)}
        control={control}
        isLoading={isPending}
      />
    </FormProvider>
  )
}
