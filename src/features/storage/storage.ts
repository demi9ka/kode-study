import * as Keychain from 'react-native-keychain'

export const saveCredentials = async (password: string, service: string) => {
  try {
    await Keychain.setGenericPassword('main', password, {
      service,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
    })
  } catch (error) {
    console.error('Failed to save credentials', error)
  }
}

export const getCredentials = async (service: string) => {
  try {
    const credentials = await Keychain.getGenericPassword({
      service,
    })
    if (credentials) {
      return credentials.password
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export const clearCredentials = async (service: string) => {
  try {
    await Keychain.resetGenericPassword({
      service,
    })
  } catch (error) {
    console.error('Ошибка удаления:', error)
  }
}
