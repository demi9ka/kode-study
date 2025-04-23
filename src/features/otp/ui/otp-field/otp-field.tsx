import styled from 'styled-components/native'
import { OtpFieldItem } from '../otp-field-item/otp-field-item'
import { View } from 'react-native'

export type OtpFieldProps = {
  value: string
}
export const OtpField = ({ value }: OtpFieldProps) => {
  return (
    <Wrapper>
      <OtpFieldItem value={value.length > 0 ? value[0] : ''} />
      <OtpFieldItem value={value.length > 1 ? value[1] : ''} />
      <OtpFieldItem value={value.length > 2 ? value[2] : ''} />
      <Line />
      <OtpFieldItem value={value.length > 3 ? value[3] : ''} />
      <OtpFieldItem value={value.length > 4 ? value[4] : ''} />
      <OtpFieldItem value={value.length > 5 ? value[5] : ''} />
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

const Line = styled(View)`
  background-color: ${({ theme }) => theme.palette.content.tertiary};
  width: 10px;
  height: 2px;
`

// const InputArea = styled.View`
/* background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  flex-direction: row;
  height: ${({ theme }) => theme.spacing(4.5)}px;
`

const Input = styled.TextInput`
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  flex: 1;
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  font-size: ${({ theme }) => theme.typography.body15Regular.size};
  justify-content: center;
  letter-spacing: ${({ theme }) =>
    theme.typography.body15Regular.letterSpacing};
` */
