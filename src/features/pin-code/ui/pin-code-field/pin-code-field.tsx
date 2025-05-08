import styled from 'styled-components/native'
import { PinCodeFieldItem } from '../pin-code-field-item'

export type PinCodeFieldProps = {
  value: string
  pinCodeLen: number
  hasError: boolean
}

export const PinCodeField = ({
  value,
  hasError,
  pinCodeLen,
}: PinCodeFieldProps) => {
  return (
    <Wrapper>
      {[...Array(pinCodeLen).keys()].map(i => (
        <PinCodeFieldItem
          hasError={hasError}
          key={i}
          checked={value.length > i}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  align-items: center;
`
