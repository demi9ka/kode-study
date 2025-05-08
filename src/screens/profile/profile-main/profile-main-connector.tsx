import { deleteValue, getValue } from '@features/storage'
import { ProfileMain } from './profile-main'
import { setAuthState } from '@features/auth/model'
import { useAuthLogout } from '@entities/profile/hooks'
import { addToast } from '@features/toast'

export const ProfileMainConnector = () => {
  const { mutateAsync, error, isError } = useAuthLogout()

  const onLogout = async () => {
    const refreshToken = getValue('refreshToken')
    if (!refreshToken) {
      return setAuthState({ authState: false })
    }
    await mutateAsync(refreshToken)
    if (isError) {
      addToast({
        message: error.message,
        variant: 'error',
      })
    }
    deleteValue('accessToken')
    deleteValue('refreshToken')
    deleteValue('pinCode')
    deleteValue('guestToken')
    setAuthState({ authState: false })
  }
  return <ProfileMain onLogout={onLogout} />
}
