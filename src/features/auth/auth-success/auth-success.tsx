import { Typography } from '@shared/ui/atoms'
import { Images } from '@shared/ui/images'
import { PrimaryButton } from '@shared/ui/molecules'
import { styled } from '@shared/ui/theme'
import { Image } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
  align-items: center;
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
  onPress: VoidFunction
}

export const AuthSuccess = ({ onPress }: AuthSetPinCodeProps) => {
  return (
    <Wrapper>
      <ImageComponent source={Images.authSuccess} />
      <Title variant='subtitle'>Все готово</Title>
      <Description variant='body15Regular' align='center'>
        Теперь вы можете использовать мобильное{'\n'}приложение Kode bank
      </Description>
      <Footer>
        <Button onPress={onPress}>Продолжить</Button>
      </Footer>
    </Wrapper>
  )
}
