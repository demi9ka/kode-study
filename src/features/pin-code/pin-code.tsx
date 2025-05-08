import styled from 'styled-components/native'
import { Typography } from '@shared/ui/atoms'
import { TouchableOpacity, View } from 'react-native'
import {
  PinCodeField,
  PinCodeFieldProps,
} from './ui/pin-code-field/pin-code-field'
import {
  PinCodeKeyboard,
  PinCodeKeyboardProps,
} from './ui/pin-code-keyboard/pin-code-keyboard'

type PinCodeProps = {
  value: string
  isCompared: boolean
  onSkip: VoidFunction
} & PinCodeFieldProps &
  PinCodeKeyboardProps

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const KeyboardWrapper = styled(View)`
  flex-grow: 2;
  flex: 1;
  justify-content: flex-end;
`
const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: start;
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6.5)}px;
`
const SkipText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
export const PinCode = ({
  value,
  isCompared,
  pinCodeLen,
  hasError,
  onSkip,
  onPressNumber,
  onPressRemove,
}: PinCodeProps) => {
  return (
    <Wrapper>
      <Header>
        <TouchableOpacity onPress={onSkip}>
          <SkipText variant='body15Regular'>Пропустить</SkipText>
        </TouchableOpacity>
      </Header>
      <Typography variant='body15Regular' align='center'>
        {isCompared ? 'Поторите короткий код' : 'Установите короткий код'}
      </Typography>
      <PinCodeField hasError={hasError} pinCodeLen={pinCodeLen} value={value} />
      <KeyboardWrapper>
        <PinCodeKeyboard
          onPressNumber={onPressNumber}
          onPressRemove={onPressRemove}
        />
      </KeyboardWrapper>
    </Wrapper>
  )
}
