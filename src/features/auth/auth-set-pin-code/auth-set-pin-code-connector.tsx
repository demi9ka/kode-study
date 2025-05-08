import { AuthSetPinCode } from './auth-set-pin-code'

type AuthSetPinCodeConnectorProps = {
  onSkip: VoidFunction
  goToPinCode: VoidFunction
}

export const AuthSetPinCodeConnector = ({
  goToPinCode,
  onSkip,
}: AuthSetPinCodeConnectorProps) => {
  return <AuthSetPinCode onSkip={onSkip} goToPinCode={goToPinCode} />
}
