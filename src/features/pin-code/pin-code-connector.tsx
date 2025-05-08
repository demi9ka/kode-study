import { useEffect, useState } from 'react'
import { PinCode } from './pin-code'
import { addToast } from '@features/toast'
import { PinCodeVariantType } from './types'
import { deleteValue, saveValue } from '@features/storage'
import { Alert } from 'react-native'
import { setAuthState } from '@features/auth/model'

type PinCodeConnectorProps = {
  variant: PinCodeVariantType
  compareValue?: string
  pinCodeLen: number
  goToPhone: VoidFunction

  goToConfirm: (compare: string, pinCodeLen: number) => void
  goToSuccess: VoidFunction
}

export const PinCodeConnector = ({
  variant,
  compareValue,
  pinCodeLen,
  goToPhone,
  goToConfirm,

  goToSuccess,
}: PinCodeConnectorProps) => {
  const [value, setValue] = useState('')
  const [errorText, setErrorText] = useState<string | null>(null)
  const [writeAttempts, setWriteAttempts] = useState(5)

  const logout = () => {
    deleteValue('guestToken')
    deleteValue('pinCode')
    deleteValue('accessToken')
    deleteValue('refreshToken')
    goToPhone()
  }

  const handleConfirm = async (pinCode: string) => {
    if (pinCode.length != pinCodeLen) {
      return
    }
    if (compareValue && pinCode !== compareValue) {
      if (variant == 'confirm') {
        addToast({
          message: 'Короткий код не совпадает с предыдущим',
          variant: 'error',
        })
        startErrorDuration('error')
      } else {
        setWriteAttempts(prev => prev - 1)
        if (writeAttempts == 0) {
          Alert.alert(
            'Вы ввели неверно код 5 раз',
            'Данная сессия авторизации будет сброшена!',
            [
              {
                text: 'Выход',
                style: 'destructive',
                onPress: logout,
              },
            ],
          )
        } else {
          startErrorDuration(`Неверный код. Осталось ${writeAttempts} попытки`)
        }
      }

      return
    }
    if (variant == 'create') {
      goToConfirm(value, pinCodeLen)
    } else if (variant == 'confirm') {
      saveValue('pinCode', pinCode)
      goToSuccess()
    } else if (variant == 'write') {
      setAuthState({ authState: true })
    }
    setValue('')
  }

  const onPressNumber = (value: string) => {
    setValue(prev => prev + value)
  }

  const onPressRemove = () => {
    setValue(prev => prev.slice(0, -1))
  }

  const startErrorDuration = (errorText: string) => {
    setErrorText(errorText)
    setTimeout(() => {
      setErrorText(null)
      setValue('')
    }, 2000)
  }

  useEffect(() => {
    handleConfirm(value)
  }, [value])

  return (
    <PinCode
      errorText={errorText}
      pinCodeLen={pinCodeLen}
      value={value}
      variant={variant}
      onPressNumber={onPressNumber}
      onPressRemove={onPressRemove}
    />
  )
}
