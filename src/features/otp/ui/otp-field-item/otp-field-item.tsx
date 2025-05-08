import { Typography } from '@shared/ui/atoms'
import { styled, useTheme } from '@shared/ui/theme'
import { View } from 'react-native'

export const OtpFieldItem = ({
  value,
  hasError,
}: {
  value: string
  hasError: boolean
}) => {
  const theme = useTheme()
  return (
    <Wrapper>
      <Text
        variant='subtitle'
        $color={
          hasError ? theme.palette.indicator.error : theme.palette.text.primary
        }>
        {value}
      </Text>
    </Wrapper>
  )
}
const Text = styled(Typography)<{
  $color: string
}>`
  color: ${({ $color }) => $color};
`

const Wrapper = styled(View)`
  width: ${({ theme }) => theme.spacing(5)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(1.5)}px;
  align-items: center;
  justify-content: center;
`
