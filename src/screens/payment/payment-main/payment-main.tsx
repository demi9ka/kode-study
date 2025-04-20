import { styled } from '@shared/ui/theme'
import { View } from 'react-native'
import { List } from '@shared/ui/templates/list'
import { Typography } from '@shared/ui/atoms'

type Props = {
  handlerPressMobile: () => void
}

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

export const PaymentMain = ({ handlerPressMobile }: Props) => {
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
