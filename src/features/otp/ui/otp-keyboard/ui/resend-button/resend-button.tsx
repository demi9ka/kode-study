import { styled } from '@shared/ui/theme'
import { Button } from '../../otp-keyboard'
import { Typography } from '@shared/ui/atoms'

type Props = {
  text: string
  canResend: boolean
  onPress: VoidFunction
}

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
