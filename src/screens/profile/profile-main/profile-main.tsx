import { PrimaryButton } from '@shared/ui/molecules'
import { styled } from '@shared/ui/theme'

type Props = {
  onLogout: VoidFunction
}

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

export const ProfileMain = ({ onLogout }: Props) => {
  return (
    <Wrapper>
      <PrimaryButton onPress={onLogout}>Выйти</PrimaryButton>
    </Wrapper>
  )
}
