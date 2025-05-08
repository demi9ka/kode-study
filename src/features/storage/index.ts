import {
  setItemAsync,
  getItemAsync,
  deleteItemAsync,
  WHEN_UNLOCKED,
  getItem,
  setItem,
} from 'expo-secure-store'

export const saveValueAsync = async (key: string, value: string) => {
  await setItemAsync(key, value, {
    keychainAccessible: WHEN_UNLOCKED,
  })
}
export const saveValue = (key: string, value: string) => {
  setItem(key, value, {
    keychainAccessible: WHEN_UNLOCKED,
  })
}

export const getValueAsync = async (key: string) => {
  const result = await getItemAsync(key)
  if (result) {
    return result
  }
  return null
}
export const getValue = (key: string) => {
  const result = getItem(key)
  if (result) {
    return result
  }
  return null
}

export const deleteValue = async (key: string) => {
  await deleteItemAsync(key)
}
