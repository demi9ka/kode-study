import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (e) {
    return false
  }
}

export const getString = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    return null
  }
}

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}
