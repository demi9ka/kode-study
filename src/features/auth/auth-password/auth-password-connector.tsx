import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { getSchema, TAuthPassword } from './model'
import { AuthPassword } from './auth-password'
import { useAuthEnter } from '@entities/auth/hooks'
import { saveValue } from '@features/storage'

type AuthPhoneConnectorType = {
  guestToken: string
  goToPinCode: VoidFunction
  exitAlert: VoidFunction
}

export const AuthPasswordConnector = ({
  guestToken,
  goToPinCode,
  exitAlert,
}: AuthPhoneConnectorType) => {
  const { mutateAsync } = useAuthEnter()
  const form = useForm<TAuthPassword>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(getSchema()),
  })
  const { control, handleSubmit } = form

  const onValid = async ({ password }: TAuthPassword) => {
    try {
      const { accessToken, refreshToken } = await mutateAsync({
        password,
        guestToken,
      })
      saveValue('accessToken', accessToken)
      saveValue('refreshToken', refreshToken)
      goToPinCode()
    } catch (e) {}
  }

  return (
    <FormProvider {...form}>
      <AuthPassword
        exitAlert={exitAlert}
        handleSubmit={handleSubmit(onValid)}
        control={control}
        isLoading={false}
      />
    </FormProvider>
  )
}
