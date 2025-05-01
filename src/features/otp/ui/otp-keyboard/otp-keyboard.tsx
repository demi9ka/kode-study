import { Typography } from '@shared/ui/atoms'
import { IconDelete } from '@shared/ui/icons'
import { styled, useTheme } from '@shared/ui/theme'
import { TouchableOpacity, View } from 'react-native'

export type OtpKeyboardProps = {
  onPressNumber: (v: string) => void
  onPressRemove: VoidFunction
  onResend: VoidFunction
  resendIn: number
  canResend: boolean
}

export const OtpKeyboard = ({
  onPressNumber,
  onPressRemove,
  onResend,
  resendIn,
  canResend,
}: OtpKeyboardProps) => {
  const theme = useTheme()

  const resendButtonText = canResend
    ? 'Повторить'
    : `Повторить\nчерез ${resendIn} сек.`

  return (
    <Wrapper>
      <Keyboard>
        <Row>
          <Button onPress={() => onPressNumber('1')}>
            <ButtonText>1</ButtonText>
          </Button>
          <Button onPress={() => onPressNumber('2')}>
            <ButtonText>2</ButtonText>
          </Button>
          <Button onPress={() => onPressNumber('3')}>
            <ButtonText>3</ButtonText>
          </Button>
        </Row>
        <Row>
          <Button onPress={() => onPressNumber('4')}>
            <ButtonText>4</ButtonText>
          </Button>
          <Button onPress={() => onPressNumber('5')}>
            <ButtonText>5</ButtonText>
          </Button>
          <Button onPress={() => onPressNumber('6')}>
            <ButtonText>6</ButtonText>
          </Button>
        </Row>
        <Row>
          <Button onPress={() => onPressNumber('7')}>
            <ButtonText>7</ButtonText>
          </Button>
          <Button onPress={() => onPressNumber('8')}>
            <ButtonText>8</ButtonText>
          </Button>
          <Button onPress={() => onPressNumber('9')}>
            <ButtonText>9</ButtonText>
          </Button>
        </Row>
        <Row>
          <Button disabled={!canResend} onPress={onResend}>
            <ResendText variant='caption1' align='center'>
              {resendButtonText}
            </ResendText>
          </Button>
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
const ResendText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
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

const Button = styled(TouchableOpacity)`
  width: ${({ theme }) => theme.spacing(12)}px;
  height: ${({ theme }) => theme.spacing(8.5)}px;
  justify-content: center;
  align-items: center;
`
const ButtonText = styled(Typography)`
  line-height: ${({ theme }) => theme.spacing(4.25)}px;
  font-size: ${({ theme }) => theme.spacing(4.25)}px;
`
