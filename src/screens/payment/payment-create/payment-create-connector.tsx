import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentCreate } from './payment-create'
import { balance } from './constansts'
import { usePaymentService } from '@entities/payments/hooks/use-payment-service'
import {
  getMaskedPhone,
  numberValueFormMoney,
  moneyString,
  TPaymentCreateForm,
  moneyOnCard,
  getSchema,
  onlyDigitsValue,
} from './model'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatBalance } from './helpers'
import { FieldErrors, FormProvider, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { addToast } from '@features/toast'

export type PaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>

export const PaymentCreateConnector = ({
  navigation,
  route,
}: PaymentCreateProps) => {
  const { id, icon, name } = route.params
  const { data } = usePaymentService(id)
  const { recipient_mask, cashback_percentage } = !data
    ? { cashback_percentage: 0 }
    : data.data

  const form = useForm<TPaymentCreateForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      moneyOnCard,
      phone: '',
      money: moneyString(0),
    },
    resolver: zodResolver(getSchema()),
  })

  const { control, watch, setValue, handleSubmit } = form

  const moneyValue = watch('money')
  const phoneValue = watch('phone')

  //   const handleChangePhone = (inputText: string) =>
  //     setPhone(
  //       getMaskedPhone({
  //         phone: inputText,
  //         pattern: recipient_mask
  //           ? '+7 ' + recipient_mask.replaceAll('X', '9')
  //           : undefined,
  //       }),
  //     )

  //   const handleChangeAmount = (inputValue: string) => {
  //     const numberValue = numberValueFormMoney(inputValue)
  //     setAmount(numberValue)
  //   }

  const onValid = ({ money, phone }: TPaymentCreateForm) => {
    navigation.navigate('paymentConfirm', {
      amount: numberValueFormMoney(money),
      phone,
      name,
      cashback_percentage: cashback_percentage!,
    })
  }

  const onInvalid = (errors?: FieldErrors<TPaymentCreateForm>) => {
    if (errors?.phone?.message) {
      addToast({
        message: errors?.phone?.message,
        variant: 'error',
      })
      return
    }
    if (errors?.money?.message) {
      addToast({
        message: errors?.money?.message,
        variant: 'error',
      })
    }
  }
  const onChipPress = (value: number) => {
    setValue('money', moneyString(value))
  }

  useEffect(() => {
    const newPhoneValue = getMaskedPhone({ phone: phoneValue })
    setValue('phone', newPhoneValue)
  }, [phoneValue])

  useEffect(() => {
    const numberValue = numberValueFormMoney(moneyValue)
    const stringValue = moneyString(numberValue)
    setValue('money', stringValue)
  }, [moneyValue])

  const currentMoneyValue = numberValueFormMoney(String(moneyValue))
  const cacheBackString =
    currentMoneyValue > 0 && cashback_percentage
      ? `Ваш кешбек составит ${cashback_percentage / 100}% - ${moneyString(
          currentMoneyValue * (cashback_percentage / 10000),
        )}`
      : ''

  const balanceFormatted = formatBalance(balance)

  return (
    <FormProvider {...form}>
      <PaymentCreate
        moneyOnCard={balanceFormatted}
        handleSubmit={handleSubmit(onValid, onInvalid)}
        iamgeSource={icon}
        control={control}
        cacheBackString={cacheBackString}
        onChipPress={onChipPress}
      />
    </FormProvider>
  )
}
