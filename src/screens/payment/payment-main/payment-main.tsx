import { StackScreenProps } from '@react-navigation/stack'
import { styled } from '@shared/ui/theme'
import { View } from 'react-native'
import { List } from '@shared/ui/templates/list'
import { Typography } from '@shared/ui/atoms'
import { HomeTabsParamsList } from '@routing/home-tabs-navigation'
import { CompositeScreenProps } from '@react-navigation/native'
import { RootStackParamsList } from '@routing/app-navigation/types'

export type MainStackProps = StackScreenProps<RootStackParamsList>

export type PaymentMainProps = CompositeScreenProps<
  StackScreenProps<HomeTabsParamsList, 'PaymentMain'>,
  MainStackProps
>

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const Header = styled(View)`
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding: 16px;
  height: 100px;
`
const Title = styled(Typography)`
  font-weight: 700;
`

export const PaymentMain = ({ navigation }: PaymentMainProps) => {
  const handlerPressMobile = () => navigation.navigate('paymentServices')
  return (
    <Wrapper>
      <Header>
        <Title variant='largeTitle'>Платежи</Title>
      </Header>
      <List
        onPressMobile={handlerPressMobile}
        onPressInternet={() => {}}
        onPressJKH={() => {}}
      />
    </Wrapper>
  )
}
