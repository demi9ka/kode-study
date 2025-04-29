import { addToast } from '@features/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FieldErrors, FormProvider } from 'react-hook-form'
import { AuthPhone } from './auth-phone'
import { TAuthPostOtpCode, getMaskedPhone, getSchema } from './model'
import { useEffect } from 'react'
import { useOtpCode } from './hooks/use-otp-code'

type AuthPhoneConnectorType = {}

export const AuthPhoneConnector = ({}: AuthPhoneConnectorType) => {
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
    const res = await mutateAsync(phone)
    console.log(res)
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
