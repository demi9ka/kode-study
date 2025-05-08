import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FieldErrors, FormProvider } from 'react-hook-form'
import { getSchema, TAuthPassword } from './model'
import { AuthPassword } from './auth-password'
import { useAuthEnter } from './hooks/use-auth-enter'
import { storeString } from '@features/storage'

type AuthPhoneConnectorType = {
  guestToken: string
  goToPinCode: VoidFunction
  popToTop: VoidFunction
}

export const AuthPasswordConnector = ({
  guestToken,
  goToPinCode,
  popToTop,
}: AuthPhoneConnectorType) => {
  const { mutateAsync, isError } = useAuthEnter()
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
    const { accessToken, refreshToken } = await mutateAsync({
      password,
      guestToken,
    })
    storeString('accessToken', accessToken)
    storeString('refreshToken', refreshToken)
    goToPinCode()
  }

  return (
    <FormProvider {...form}>
      <AuthPassword
        popToTop={popToTop}
        handleSubmit={handleSubmit(onValid)}
        control={control}
        isLoading={false}
      />
    </FormProvider>
  )
}
