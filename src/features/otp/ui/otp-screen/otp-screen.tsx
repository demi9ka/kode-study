import { OtpField, OtpFieldProps } from '../otp-field/otp-field'
import styled from 'styled-components/native'
import { Typography } from '@shared/ui/atoms'
import { View } from 'react-native'
import { OtpKeyboard, OtpKeyboardProps } from '../otp-keyboard/otp-keyboard'

type Props = {
  attemptsLeft: number
  canResend: boolean
  resendIn: number
  isLoading: boolean
} & OtpFieldProps &
  OtpKeyboardProps

export const OtpScreen = ({
  value,
  attemptsLeft,
  canResend,
  isLoading,
  onResend,
  resendIn,
  onPressNumber,
  onPressRemove,
}: Props) => {
  const isAttemptsMessage = attemptsLeft === 0

  return (
    <Wrapper>
      <View>
        <Typography variant='body15Regular' align='center'>
          На ваш номер отправлено{'\n'}SMS с кодом подтверждения.
        </Typography>
        <OtpField value={value} />
      </View>

      {/* {isAttemptsMessage && (
        <ErrorText>Неверный код. Осталось {attemptsLeft} попытки</ErrorText>
      )} */}
      <KeyboardWrapper>
        <OtpKeyboard
          resendIn={resendIn}
          onPressNumber={onPressNumber}
          onPressRemove={onPressRemove}
          onResend={onResend}
        />
      </KeyboardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
const ErrorText = styled.Text`
  color: ${({ theme }) => theme.palette.indicator.error};
  text-align: center;
`
const KeyboardWrapper = styled(View)`
  flex-grow: 2;
  flex: 1;
  justify-content: flex-end;
`
