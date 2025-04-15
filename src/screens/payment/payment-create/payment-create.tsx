import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { Images } from '@shared/ui/images'
import { useState } from 'react'
import { useTheme } from '@shared/ui/theme'
import CurrencyInput from 'react-native-currency-input'
import { View, Image, FlatList, ListRenderItem, Pressable } from 'react-native'
import { balance, values } from './constansts'
import { styled } from '@shared/ui/theme'
import { Input, Line, Typography } from '@shared/ui/atoms'
import { CardItem } from './molecules/card-item'
import { PrimaryButton } from '@shared/ui/molecules'
import { KeyboardView } from '@shared/ui/templates'
import { services } from '../payment-services/constants'

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
const ContentTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`
const AmountInput = styled(CurrencyInput)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  color: ${({ theme }) => theme.palette.text.primary};
`
const ButtonWrapper = styled(View)`
  flex-grow: 2;
  padding: ${({ theme }) => theme.spacing(3)}px;
  justify-content: flex-end;
`
const PressableWrapper = styled(Pressable)`
  padding: ${({ theme }) => theme.spacing(6 / 8)}px
    ${({ theme }) => theme.spacing(2)}px;
  margin: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(1)}px 0;
  border-radius: ${({ theme }) => theme.spacing(1.75)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
`
const PressableTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const InputImage = styled(Image)`
  width: ${({ theme }) => theme.spacing(3)}px;
  height: ${({ theme }) => theme.spacing(3)}px;
`
const CardItemImage = styled(Image)`
  width: ${({ theme }) => theme.spacing(5)}px;
  height: ${({ theme }) => theme.spacing(3.5)}px;
`
const FlatListComponent = styled(FlatList)`
  padding-top: ${({ theme }) => theme.spacing(1)}px;
`
export const PaymentCreate = ({ navigation, route }: TPaymentCreateProps) => {
  const theme = useTheme()
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState(0)
  const disable = !value || phone.length !== 11

  const continueTransaction = () => {
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
        <PressableTypography variant='caption1'>
          {item.value}
          {' ₽'}
        </PressableTypography>
      </PressableWrapper>
    )
  }

  const handleChangePhone = (inputText: string) =>
    setPhone(inputText.slice(0, 11))

  const handleChangeAmount = (inputValue: number | null) =>
    setValue(inputValue ? inputValue : 0)

  const balance_formatted = balance
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace('.', ',')

  return (
    <Wrapper>
      <ContentWrapper>
        <ContentTitle variant='body15Semibold'>Карта для оплаты</ContentTitle>
        <CardItem
          description={balance_formatted + ' ₽'}
          title='Карта зарплатная'
          leftSection={<CardItemImage source={Images.bankcard} />}
        />
      </ContentWrapper>
      <ContentWrapper>
        <Input
          wrapperStyle={{
            backgroundColor: theme.palette.content.primary,
            borderRadius: 26,
            paddingVertical: theme.spacing(1.75),
            paddingLeft: theme.spacing(3),
            gap: theme.spacing(1),
            paddingRight: theme.spacing(2),
          }}
          placeholder='Номер телефона'
          onChangeText={handleChangePhone} //Не сумел сделать форматирование номера(
          leftSection={
            <InputImage
              source={
                services.find(
                  ({ serviceId }) => serviceId === route.params.serviceId,
                )!.serviceIcon
              }
            />
          }
          value={phone}
          inputMode='tel'
          hasClearButton={Boolean(phone.length)}
        />
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle variant='body15Semibold'>Сумма</ContentTitle>
        <AmountInput
          value={value}
          onChangeValue={handleChangeAmount}
          keyboardType='numeric'
          prefix='₽'
          placeholder='0'
        />
        <Line />

        <FlatList //TODO
          horizontal={true}
          data={values}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialNumToRender={5}
          keyboardShouldPersistTaps='handled'
        />
      </ContentWrapper>

      <ButtonWrapper>
        {/* Не смогу прижать кнопку к низу и кусок неё видно при открытии
        клавиатуры */}
        <PrimaryButton
          children='Продолжить'
          disabled={disable}
          onPress={continueTransaction}
        />
      </ButtonWrapper>
    </Wrapper>
  )
}
