import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackScreenProps } from '@react-navigation/stack'
import { PaymentCreate } from './payment-create'
import { useState } from 'react'
import { balance } from './constansts'

export type PaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>
type Props = StackScreenProps<RootStackParamsList, 'paymentCreate'>

export const PaymentCreateConnector = ({ navigation, route }: Props) => {
  const { id, icon, name } = route.params

  const [phone, setPhone] = useState('')
  const [value, setValue] = useState(0)

  const hasDisable = !value || phone.length !== 11

  const incrementalValue = (vl: number) => setValue(v => v + vl)

  const handleChangePhone = (inputText: string) =>
    setPhone(inputText.slice(0, 11))

  const handleChangeAmount = (inputValue: number | null) =>
    setValue(inputValue ? inputValue : 0)

  const continueTransaction = () => {
    navigation.navigate('paymentConfirm', {
      amount: value,
      phone,
      name,
    })
  }

  const balance_formatted = balance
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace('.', ',')

  return (
    <PaymentCreate
      balance={balance_formatted}
      continueTransaction={continueTransaction}
      handleChangeAmount={handleChangeAmount}
      handleChangePhone={handleChangePhone}
      hasDisable={hasDisable}
      iamgeSource={icon}
      incrementalValue={incrementalValue}
      phone={phone}
      value={value}
    />
  )
}
