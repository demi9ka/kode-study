import { Images } from '@shared/ui/images'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
const Logo = styled.Image`
  width: ${({ theme }) => theme.spacing(13.25)}px;
  height: ${({ theme }) => theme.spacing(5.75)}px;
`

export const AuthWelcome = () => {
  return (
    <Wrapper>
      <Logo source={Images.logo} />
    </Wrapper>
  )
}
