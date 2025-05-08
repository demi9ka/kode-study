import { Typography } from '@shared/ui/atoms'
import { Images } from '@shared/ui/images'
import { PrimaryButton } from '@shared/ui/molecules'
import { styled } from '@shared/ui/theme'
import { TouchableOpacity, Image } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  align-items: center;
`
const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: start;
  padding: ${({ theme }) => theme.spacing(2)}px;
`
const SkipText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const ImageComponent = styled(Image)`
  width: ${({ theme }) => theme.spacing(18.5)}px;
  height: ${({ theme }) => theme.spacing(18.5)}px;
  margin-top: ${({ theme }) => theme.spacing(9)}px;
`
const Title = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(4)}px;
  font-weight: 600;
`
const Description = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`
const Footer = styled.View`
  flex-grow: 2;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(3)}px ${theme.spacing(2)}px`};
  justify-content: flex-end;
`
const Button = styled(PrimaryButton)`
  width: 100%;
`

type AuthSetPinCodeProps = {
  onSkip: VoidFunction
  goToPinCode: VoidFunction
}

export const AuthSetPinCode = ({
  goToPinCode,
  onSkip,
}: AuthSetPinCodeProps) => {
  return (
    <Wrapper>
      <Header>
        <TouchableOpacity onPress={onSkip}>
          <SkipText variant='body15Regular'>Пропустить</SkipText>
        </TouchableOpacity>
      </Header>
      <ImageComponent source={Images.authPinCode} />
      <Title variant='subtitle'>Короткий код</Title>
      <Description variant='body15Regular' align='center'>
        Вы можете установить 5-и значный{'\n'}короткий код для быстрого доступа
        {'\n'}к основным функциям приложения
      </Description>
      <Footer>
        <Button onPress={goToPinCode}>Установить</Button>
      </Footer>
    </Wrapper>
  )
}
