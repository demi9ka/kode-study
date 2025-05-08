import styled from 'styled-components/native'
import { OtpFieldItem } from '../otp-field-item/otp-field-item'
import { useTheme } from '@shared/ui/theme'

export type OtpFieldProps = {
  value: string
  otpLen: number
  hasError: boolean
}

export const OtpField = ({ value, otpLen, hasError }: OtpFieldProps) => {
  const theme = useTheme()

  const hasLine = otpLen % 2 == 0

  if (hasLine) {
    const indexList = [...Array(otpLen).keys()]
    return (
      <Wrapper>
        {indexList.slice(0, otpLen / 2).map(i => (
          <OtpFieldItem hasError={hasError} key={i} value={value[i] || ''} />
        ))}
        <Line
          $bgColor={
            hasError
              ? theme.palette.indicator.error
              : theme.palette.content.tertiary
          }
        />
        {indexList.slice(otpLen / 2).map(i => (
          <OtpFieldItem
            hasError={hasError}
            key={`${i}2`}
            value={value[i] || ''}
          />
        ))}
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      {[...Array(otpLen).keys()].map(i => (
        <OtpFieldItem hasError={hasError} key={i} value={value[i] || ''} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(0.75)}px;
  align-items: center;
`

const Line = styled.View<{
  $bgColor: string
}>`
  background-color: ${({ $bgColor }) => $bgColor};
  width: 10px;
  height: 2px;
`
