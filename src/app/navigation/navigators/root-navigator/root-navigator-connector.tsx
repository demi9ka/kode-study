import { authStateModel } from '@features/auth/model'
import { RootNavigator } from './root-navigator'
import { useUnit } from 'effector-react'

export const RootNavigatorConnector = () => {
  const isAuth = useUnit(authStateModel.$authState)

  return <RootNavigator isAuth={isAuth} />
}
