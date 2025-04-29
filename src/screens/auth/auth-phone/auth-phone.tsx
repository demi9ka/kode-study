import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

type AuthPhoneType = {}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

export const AuthPhone = ({}: AuthPhoneType) => {
  return (
    <Wrapper>
      <Typography>Привет</Typography>
    </Wrapper>
  )
}
