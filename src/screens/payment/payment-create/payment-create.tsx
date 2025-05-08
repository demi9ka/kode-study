import { StackScreenProps } from '@react-navigation/stack'
import { Images } from '@shared/ui/images'
import { useTheme } from '@shared/ui/theme'
import {
  View,
  Image,
  FlatList,
  ListRenderItem,
  Pressable,
  TextInput,
} from 'react-native'
import { styled } from '@shared/ui/theme'
import { Input, Line, Typography } from '@shared/ui/atoms'
import { CardItem } from './molecules/card-item'
import { PrimaryButton } from '@shared/ui/molecules'
import { KeyboardView } from '@shared/ui/templates'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { values } from './constansts'
import { formattedMoneyToString, TPaymentCreateForm } from './model'
import { Control, Controller } from 'react-hook-form'

export type TPaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>

type Props = {
  iamgeSource: string
  control: Control<TPaymentCreateForm, any, TPaymentCreateForm>
  moneyOnCard: string
  cacheBackString: string
  onChipPress: (value: number) => void
  handleSubmit: VoidFunction
}

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
const AmountInput = styled(TextInput)<{
  $textColor: string
}>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  color: ${({ $textColor }) => $textColor};
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
const Cashback = styled(Typography)`
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const PaymentCreate = ({
  iamgeSource,
  cacheBackString,
  control,
  handleSubmit,
  moneyOnCard,
  onChipPress,
}: Props) => {
  const theme = useTheme()

  const renderItem: ListRenderItem<{ id: string; value: number }> = ({
    item,
  }) => {
    return (
      <PressableWrapper
        onPress={() => onChipPress(item.value)}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
        <PressableTypography variant='caption1'>
          {item.value}
          {' ₽'}
        </PressableTypography>
      </PressableWrapper>
    )
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <ContentTitle variant='body15Semibold'>Карта для оплаты</ContentTitle>
        <CardItem
          description={moneyOnCard + ' ₽'}
          title='Карта зарплатная'
          leftSection={<CardItemImage source={Images.bankcard} />}
        />
      </ContentWrapper>
      <ContentWrapper>
        <Controller
          control={control}
          name='phone'
          render={({ field, fieldState }) => {
            return (
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
                leftSection={<InputImage src={iamgeSource} />}
                inputMode='tel'
                hasClearButton={Boolean(field.value.length)}
                isError={Boolean(fieldState.error?.message?.length)}
                {...field}
              />
            )
          }}
        />
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle variant='body15Semibold'>Сумма</ContentTitle>
        <Controller
          control={control}
          name='money'
          render={({ field, fieldState }) => {
            const isError = Boolean(fieldState.error?.message?.length)
            return (
              <AmountInput
                placeholderTextColor={
                  Boolean(isError)
                    ? theme.palette.indicator.error
                    : theme.palette.text.tertiary
                }
                $textColor={
                  Boolean(isError)
                    ? theme.palette.indicator.error
                    : theme.palette.text.primary
                }
                keyboardType='number-pad'
                onChangeText={field.onChange}
                placeholder={formattedMoneyToString(0)}
                value={field.value}
              />
            )
          }}
        />

        <Line />
        {cacheBackString.length ? (
          <Cashback variant='caption1'>{cacheBackString}</Cashback>
        ) : (
          <FlatList
            horizontal={true}
            data={values}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            keyboardShouldPersistTaps='handled'
          />
        )}
      </ContentWrapper>

      <ButtonWrapper>
        <PrimaryButton children='Продолжить' onPress={handleSubmit} />
      </ButtonWrapper>
    </Wrapper>
  )
}
