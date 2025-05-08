import { Typography } from '@shared/ui/atoms'
import { IconDelete } from '@shared/ui/icons'
import { styled, useTheme } from '@shared/ui/theme'
import { TouchableOpacity, View } from 'react-native'
import { keyboardButton } from './constants'

export type PinCodeKeyboardProps = {
  onPressNumber: (v: string) => void
  onPressRemove: VoidFunction
}

export const PinCodeKeyboard = ({
  onPressNumber,
  onPressRemove,
}: PinCodeKeyboardProps) => {
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
          <Button />
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
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex-direction: row;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
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
