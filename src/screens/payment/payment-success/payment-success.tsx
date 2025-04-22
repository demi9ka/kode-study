import { Typography } from '@shared/ui/atoms'
import { Images } from '@shared/ui/images'
import { PrimaryButton } from '@shared/ui/molecules'
import { View, Image } from 'react-native'
import { styled } from '@shared/ui/theme'

export type Props = {
  amount: string
  backToMenu: VoidFunction
}

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
const ImageComponent = styled(Image)`
  width: ${({ theme }) => theme.spacing(18.75)}px;
  height: ${({ theme }) => theme.spacing(18.75)}px;
`
export const PaymentSuccess = ({ backToMenu, amount }: Props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageComponent source={Images.successTransaction} />
        <Title variant='body17Regular'>Оплачено</Title>
        <Typography variant='title'>
          {amount}
          {' ₽'}
        </Typography>
      </ContentWrapper>
      <Footer>
        <PrimaryButton children='Готово' onPress={backToMenu} />
      </Footer>
    </Wrapper>
  )
}
