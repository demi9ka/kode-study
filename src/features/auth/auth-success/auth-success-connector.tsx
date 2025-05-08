import { AuthSuccess } from './auth-success'

type AuthSuccessConnectorProps = {
  goToHome: VoidFunction
}

export const AuthSuccessConnector = ({
  goToHome,
}: AuthSuccessConnectorProps) => {
  return <AuthSuccess goToHome={goToHome} />
}
