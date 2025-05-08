import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { TouchableOpacity } from 'react-native'

type Props = {
  text: string
  canResend: boolean
  onPress: VoidFunction
}

const Button = styled(TouchableOpacity)`
  width: ${({ theme }) => theme.spacing(12)}px;
  height: ${({ theme }) => theme.spacing(8.5)}px;
  justify-content: center;
  align-items: center;
`

export const ResendButton = ({ onPress, text, canResend }: Props) => {
  return (
    <Button disabled={!canResend} onPress={onPress}>
      <ResendText variant='caption1' align='center'>
        {text}
      </ResendText>
    </Button>
  )
}

const ResendText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
