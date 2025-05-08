import { Typography } from '@shared/ui/atoms'
import { IconDelete } from '@shared/ui/icons'
import { styled, useTheme } from '@shared/ui/theme'
import { TouchableOpacity, View } from 'react-native'
import { keyboardButton } from './constants'
import { ResendButtonConnector } from './ui/resend-button'

export type OtpKeyboardProps = {
  resendIn: number
  onPressNumber: (v: string) => void
  onPressRemove: VoidFunction
  onResend: () => Promise<boolean>
}

export const OtpKeyboard = ({
  onPressNumber,
  onPressRemove,
  onResend,
  resendIn,
}: OtpKeyboardProps) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <Keyboard>
        {keyboardButton.map((row, i) => (
          <Row key={i}>
            {row.map((number, i) => (
              <Button key={i} onPress={() => onPressNumber(String(number))}>
                <ButtonText>{number}</ButtonText>
              </Button>
            ))}
          </Row>
        ))}
        <Row>
          <ResendButtonConnector delay={resendIn} onResend={onResend} />
          <Button onPress={() => onPressNumber('0')}>
            <ButtonText>0</ButtonText>
          </Button>
          <Button onPress={onPressRemove}>
            <IconDelete color={theme.palette.text.primary} />
          </Button>
        </Row>
      </Keyboard>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
`
const Keyboard = styled(View)`
  padding: ${({ theme: { spacing } }) => `0 ${spacing(2)}px ${spacing(1)}px`};
  width: ${({ theme }) => theme.spacing(40)}px;
  height: ${({ theme }) => theme.spacing(37.5)}px;
`
const Row = styled(View)`
  flex-direction: row;
`

export const Button = styled(TouchableOpacity)`
  width: ${({ theme }) => theme.spacing(12)}px;
  height: ${({ theme }) => theme.spacing(8.5)}px;
  justify-content: center;
  align-items: center;
`
const ButtonText = styled(Typography)`
  line-height: ${({ theme }) => theme.spacing(4.25)}px;
  font-size: ${({ theme }) => theme.spacing(4.25)}px;
`
