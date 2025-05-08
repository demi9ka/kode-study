import { setAuthState } from '../model'
import { AuthSuccess } from './auth-success'

export const AuthSuccessConnector = () => {
  const onPress = () => {
    setAuthState({ authState: true })
  }
  return <AuthSuccess onPress={onPress} />
}
