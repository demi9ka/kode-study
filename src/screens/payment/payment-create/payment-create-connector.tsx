import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentCreate } from './payment-create'
import { useEffect, useState } from 'react'
import { balance } from './constansts'
import { usePaymentService } from '@entities/payments/hooks/use-payment-service'
import { getMaskedPhone, numberValueFormMoney, moneyString } from './model'
import { formatBalance } from './helpers'

export type PaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>

export const PaymentCreateConnector = ({
  navigation,
  route,
}: PaymentCreateProps) => {
  const { id, icon, name } = route.params
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(0)
  const { data } = usePaymentService(id)
  const { recipient_mask, cashback_percentage } = !data
    ? { cashback_percentage: 0 }
    : data.data

  const handleChangePhone = (inputText: string) =>
    setPhone(
      getMaskedPhone({
        phone: inputText,
        pattern: recipient_mask
          ? '+7 ' + recipient_mask.replaceAll('X', '9')
          : undefined,
      }),
    )

  const handleChangeAmount = (inputValue: string) => {
    const numberValue = numberValueFormMoney(inputValue)
    setAmount(numberValue)
  }

  const continueTransaction = () => {
    navigation.navigate('paymentConfirm', {
      amount,
      phone,
      name,
      cashback_percentage: cashback_percentage!,
    })
  }

  const currentMoneyValue = numberValueFormMoney(String(amount))
  const cacheBackString =
    currentMoneyValue > 0 && cashback_percentage
      ? `Ваш кешбек составит ${cashback_percentage / 100}% - ${moneyString(
          currentMoneyValue * (cashback_percentage / 10000),
        )}`
      : ''

  //

  const balanceFormatted = formatBalance(balance)

  return (
    <PaymentCreate
      balance={balanceFormatted}
      continueTransaction={continueTransaction}
      handleChangeAmount={handleChangeAmount}
      handleChangePhone={handleChangePhone}
      iamgeSource={icon}
      phone={phone}
      cacheBackString={cacheBackString}
      value={amount}
    />
  )
}
