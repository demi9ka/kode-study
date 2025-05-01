import styled from 'styled-components/native'
import { Typography } from '@shared/ui/atoms'
import { View } from 'react-native'
import { OtpKeyboard, OtpKeyboardProps } from './ui/otp-keyboard/otp-keyboard'
import { OtpFieldProps, OtpField } from './ui/otp-field/otp-field'
import { IconLoader } from '@shared/ui/icons'

type OtpProps = {
  attemptsLeft: number
  errorMessage: string | null
  isLoading: boolean
  otpLen: number
} & OtpFieldProps &
  OtpKeyboardProps

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
const LoaderWrapper = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary}50;
  z-index: 12;
`

export const Otp = ({
  otpLen,
  value,
  errorMessage,
  isLoading,
  resendIn,
  canResend,
  hasError,
  onResend,
  onPressNumber,
  onPressRemove,
}: OtpProps) => {
  return (
    <Wrapper>
      {isLoading ? (
        <LoaderWrapper>
          <IconLoader />
        </LoaderWrapper>
      ) : null}
      <View>
        <Typography variant='body15Regular' align='center'>
          На ваш номер отправлено{'\n'}SMS с кодом подтверждения.
        </Typography>
        <OtpField hasError={hasError} otpLen={otpLen} value={value} />
      </View>

      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      <KeyboardWrapper>
        <OtpKeyboard
          onPressNumber={onPressNumber}
          onPressRemove={onPressRemove}
          resendIn={resendIn}
          canResend={canResend}
          onResend={onResend}
        />
      </KeyboardWrapper>
    </Wrapper>
  )
}
