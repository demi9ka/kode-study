import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { Typography } from '@shared/ui/atoms'
import { Images } from '@shared/ui/images'
import { PrimaryButton } from '@shared/ui/molecules'
import { View, Image } from 'react-native'
import styled from 'styled-components'

export type PaymentSuccessProps = StackScreenProps<
  RootStackParamsList,
  'paymentSuccess'
>

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const ContentWrapper = styled(View)`
  align-items: center;
  flex-grow: 2;
  justify-content: center;
`
const Title = styled(Typography)`
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.text.tertiary};
`
const Footer = styled(View)`
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
`

export const PaymentSuccess = ({ navigation, route }: PaymentSuccessProps) => {
  const backToMenu = () => {
    navigation.popToTop()
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={Images.successTransaction}
        />
        <Title variant='body17Regular'>Оплачено</Title>
        <Typography variant='title'>
          {new Intl.NumberFormat('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(route.params.amount)}
          {' ₽'}
        </Typography>
      </ContentWrapper>
      <Footer>
        <PrimaryButton onPress={backToMenu}>
          <Typography variant='body15Regular' align='center'>
            Готово
          </Typography>
        </PrimaryButton>
      </Footer>
    </Wrapper>
  )
}
