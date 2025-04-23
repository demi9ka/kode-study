import { View, TouchableOpacity } from 'react-native'
import { InfoItem } from './molecules/info-item'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { PrimaryButton } from '@shared/ui/molecules'

type Props = {
  openLink: () => void
  confirmTransaction: () => void
  mobile_operator: string
  phone: string
  amount: number
  cachBack: number
}

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const Footer = styled(View)`
  flex-grow: 2;
  padding: ${({ theme }) => theme.spacing(2)}px;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)}px;
`
const Link = styled(Typography)`
  text-align: center;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const PaymentConfirm = ({
  confirmTransaction,
  mobile_operator,
  openLink,
  amount,
  phone,
  cachBack,
}: Props) => {
  return (
    <Wrapper>
      <InfoItem title='Карта для оплаты' value='Карта для зарплаты' />
      <InfoItem title='Телефон получателя' value={phone} />
      <InfoItem title='Мобильный оператор' value={mobile_operator} />
      <InfoItem title='Имя получателя' value='Денис Гладкий' />
      <InfoItem title='Сумма платежа' value={`${amount} ₽`} />
      <InfoItem title='Кешбек' value={`${cachBack} ₽`} />

      <Footer>
        <PrimaryButton children={'Продолжить'} onPress={confirmTransaction} />
        <TouchableOpacity onPress={openLink}>
          <Link variant='caption2'>
            Нажимая «Подтвердить», вы соглашаетесь с условиями проведения
            операции
          </Link>
        </TouchableOpacity>
      </Footer>
    </Wrapper>
  )
}
