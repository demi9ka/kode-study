import { StackScreenProps } from '@react-navigation/stack'
import { styled } from '@shared/ui/theme'
import { View } from 'react-native'
import { List } from '@shared/ui/templates/list'
import { Typography } from '@shared/ui/atoms'
import { HomeTabsParamsList } from '@routing/home-tabs-navigation'

export type PaymentMainProps = StackScreenProps<
  HomeTabsParamsList,
  'PaymentMain'
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

export const PaymentMain = ({ navigation }: PaymentMainProps) => {
  return (
    <Wrapper>
      <Header>
        <Typography variant='largeTitle'>Платежи</Typography>
      </Header>
      <List
        onPressMobile={() => {
          navigation.navigate('paymentServices')
        }}
        onPressInternet={() => {}}
        onPressJKH={() => {}}
      />
    </Wrapper>
  )
}
