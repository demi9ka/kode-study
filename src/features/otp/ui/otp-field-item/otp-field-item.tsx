import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { View } from 'react-native'

export const OtpFieldItem = ({ value }: { value: string }) => {
  return (
    <Wrapper>
      <Text>{value}</Text>
    </Wrapper>
  )
}
const Text = styled(Typography)`
  font-size: 25px;
`

const Wrapper = styled(View)`
  width: ${({ theme }) => theme.spacing(5)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(1.5)}px;
  align-items: center;
  justify-content: center;
`
