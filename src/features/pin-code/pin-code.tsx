import styled from 'styled-components/native'
import { Typography } from '@shared/ui/atoms'
import { View } from 'react-native'
import { PinCodeField } from './ui/pin-code-field'
import {
  PinCodeKeyboard,
  PinCodeKeyboardProps,
} from './ui/pin-code-keyboard/pin-code-keyboard'
import { PinCodeVariantType } from './types'
import { pinCodeTitle } from './constants'

type PinCodeProps = {
  value: string
  variant: PinCodeVariantType
  errorText: string | null
  pinCodeLen: number
} & PinCodeKeyboardProps

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const KeyboardWrapper = styled(View)`
  flex-grow: 2;
  flex: 1;
  justify-content: flex-end;
`

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.indicator.error};
`
export const PinCode = ({
  value,
  variant,
  pinCodeLen,
  errorText,
  onPressNumber,
  onPressRemove,
}: PinCodeProps) => {
  const title = pinCodeTitle[variant]
  const viewErorr = variant == 'write' && errorText
  return (
    <Wrapper>
      <Typography variant='body15Regular' align='center'>
        {title}
      </Typography>
      <PinCodeField
        hasError={Boolean(errorText)}
        pinCodeLen={pinCodeLen}
        value={value}
      />
      {viewErorr ? (
        <ErrorText variant='caption1' align='center'>
          {errorText}
        </ErrorText>
      ) : (
        ''
      )}

      <KeyboardWrapper>
        <PinCodeKeyboard
          onPressNumber={onPressNumber}
          onPressRemove={onPressRemove}
        />
      </KeyboardWrapper>
    </Wrapper>
  )
}
