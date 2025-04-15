import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { darkTheme } from '@shared/ui/theme'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { InfoItem } from './molecules/info-item'
import styled from 'styled-components'
import { Typography } from '@shared/ui/atoms'
import { PrimaryButton } from '@shared/ui/molecules'
import { services } from '../payment-services/constants'

export type PaymentSuccessProps = StackScreenProps<
  RootStackParamsList,
  'paymentConfirm'
>

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

export const PaymentConfirm = ({ navigation, route }: PaymentSuccessProps) => {
  const confirmTransaction = () => {
    navigation.navigate('paymentSuccess', { amount: route.params.amount })
  }
  const openLink = () => {
    Linking.openURL('https://career.kode.ru/training/') // Замените на ваш URL
      .catch(err => console.error('Failed to open URL:', err))
  }
  return (
    <Wrapper>
      <InfoItem title='Карта для оплаты' value='Карта для зарплаты' />
      <InfoItem title='Телефон получателя' value={route.params.phone} />
      <InfoItem
        title='Мобильный оператор'
        value={
          services.find(
            ({ serviceId }) => serviceId === route.params.serviceId,
          )!.serviceName
        }
      />
      <InfoItem title='Имя получателя' value='Денис Гладкий' />
      <InfoItem title='Сумма платежа' value={`${route.params.amount} ₽`} />
      <InfoItem
        title='Кешбек'
        value={`${(route.params.amount * 0.1).toFixed(2)} ₽`}
      />

      <Footer>
        <PrimaryButton onPress={confirmTransaction}>
          <Typography variant='body15Regular' align='center'>
            Продолжить
          </Typography>
        </PrimaryButton>
        <TouchableOpacity onPress={openLink}>
          <Typography
            variant='body15Regular'
            style={{
              //   fontSize: 11,
              textAlign: 'center',
              textDecorationLine: 'underline',
              color: darkTheme.palette.text.secondary,
            }}>
            Нажимая «Подтвердить», вы соглашаетесь с условиями проведения
            операции
          </Typography>
        </TouchableOpacity>
      </Footer>
    </Wrapper>
  )
}
