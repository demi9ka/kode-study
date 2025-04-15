import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { Images } from '@shared/ui/images'
import { darkTheme } from '@shared/ui/theme'
import { useEffect, useState } from 'react'
import CurrencyInput from 'react-native-currency-input'
import {
  View,
  Text,
  Image,
  FlatList,
  ListRenderItem,
  Pressable,
} from 'react-native'
import { services } from '../payment-services/constants'
import { balance, values } from './constansts'
// import { KeyboardView } from '@shared/ui/templates'
import styled from 'styled-components'
import { Line, Typography } from '@shared/ui/atoms'
import { CardItem } from './molecules/card-item'
import { Input, PrimaryButton } from '@shared/ui/molecules'
import { KeyboardView } from '@shared/ui/templates'

export type TPaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>

const Wrapper = styled(View)`
  flex: 1;
  gap: 16px;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
const ContentWrapper = styled(View)`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 16px;
`
const AmountInput = styled(CurrencyInput)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  color: ${({ theme }) => theme.palette.text.primary};
`
const ButtonWrapper = styled(View)`
  flex: 1;
  flex-grow: 2;
  padding: ${({ theme }) => theme.spacing(3)}px;
  justify-content: flex-end;
`
const PressableWrapper = styled(Pressable)`
  padding-left: ${({ theme }) => theme.spacing(2)}px;
  padding-right: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(6 / 8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6 / 8)}px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  border-radius: ${({ theme }) => theme.spacing(1.75)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
`

export const PaymentCreate = ({ navigation, route }: TPaymentCreateProps) => {
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState(0)
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    setDisable(value == 0 || phone.length !== 11)
  }, [value, phone])

  const continueTransaction = () => {
    if (disable) return
    navigation.navigate('paymentConfirm', {
      amount: value,
      phone,
      serviceId: route.params.serviceId,
      title: route.params.title,
    })
  }

  const renderItem: ListRenderItem<{ id: string; value: number }> = ({
    item,
  }) => {
    return (
      <PressableWrapper
        onPress={() => setValue(vl => vl + item.value)}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Увеличиваем зону клика
      >
        <Text style={{ color: darkTheme.palette.text.secondary, fontSize: 13 }}>
          {item.value}
          {' ₽'}
        </Text>
      </PressableWrapper>
    )
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <Typography
          variant='body15Semibold'
          style={{
            fontWeight: 600,

            color: darkTheme.palette.text.tertiary,
          }}>
          Карта для оплаты
        </Typography>
        <CardItem
          description={
            balance
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              .replace('.', ',') + ' ₽'
          }
          title='Карта зарплатная'
          leftSection={
            <Image source={Images.bankcard} style={{ width: 40, height: 28 }} />
          }
        />
      </ContentWrapper>
      <ContentWrapper>
        <Input
          wrapperStyle={{
            backgroundColor: darkTheme.palette.content.primary,
            borderRadius: 26,
            paddingVertical: darkTheme.spacing(1.75),
            paddingLeft: darkTheme.spacing(3),
            gap: darkTheme.spacing(1),
            paddingRight: darkTheme.spacing(2),
          }}
          placeholder='Номер телефона'
          onChangeText={v => setPhone(v.slice(0, 11))} //Не сумел сделать форматирование номера(
          leftSection={
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={
                services.find(
                  ({ serviceId }) => serviceId === route.params.serviceId,
                )!.serviceIcon
              }
            />
          }
          value={phone}
          inputMode='tel'
          useClearButton={!!phone.length}
        />
      </ContentWrapper>
      <ContentWrapper>
        <Typography
          variant='body15Semibold'
          style={{
            fontWeight: 600,
            color: darkTheme.palette.text.tertiary,
          }}>
          Сумма
        </Typography>
        <AmountInput
          value={value}
          onChangeValue={vl => setValue(vl ? vl : 0)}
          keyboardType='numeric'
          prefix='₽'
          placeholder='0'
        />
        <Line />

        <FlatList
          horizontal={true}
          data={values}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={5}
          keyboardShouldPersistTaps='handled'
          style={{
            paddingTop: darkTheme.spacing(1),
          }}
        />
      </ContentWrapper>

      <ButtonWrapper>
        {/* Не смогу прижать кнопку к низу и кусок неё видно при открытии
        клавиатуры */}
        <PrimaryButton disabled={disable} onPress={() => continueTransaction()}>
          <Typography variant='body15Regular' align='center'>
            Продолжить
          </Typography>
        </PrimaryButton>
      </ButtonWrapper>
    </Wrapper>
  )
}
