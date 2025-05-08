import { useEffect, useState } from 'react'
import { PinCode } from './pin-code'
import { addToast } from '@features/toast'
import { PinCodeVariantType } from './types'
import { storeString } from '@features/storage'

type PinCodeConnectorProps = {
  variant: PinCodeVariantType
  compareValue?: string
  pinCodeLen: number
  skipPinCode: VoidFunction
  goToHome: VoidFunction
  goToConfirm: (compare: string, pinCodeLen: number) => void
  goToSuccess: VoidFunction
}

export const PinCodeConnector = ({
  variant,
  compareValue,
  pinCodeLen,
  skipPinCode,
  goToConfirm,
  goToHome,
  goToSuccess,
}: PinCodeConnectorProps) => {
  const [value, setValue] = useState('')
  const [hasError, sethasError] = useState(false)

  const handleConfirm = async (pinCode: string) => {
    if (pinCode.length != pinCodeLen) {
      return
    }
    if (compareValue && pinCode !== compareValue) {
      addToast({
        message: 'Короткий код не совпадает с предыдущим',
        variant: 'error',
      })
      startErrorDuration()
      return
    }
    if (variant == 'create') {
      goToConfirm(value, pinCodeLen)
    } else if (variant == 'confirm') {
      goToSuccess()
    } else if (variant == 'write') {
      storeString('pinCode', pinCode)
      goToHome()
    }
  }

  const onPressNumber = (value: string) => {
    setValue(prev => prev + value)
  }

  const onPressRemove = () => {
    setValue(prev_v => prev_v.slice(0, -1))
  }

  const startErrorDuration = () => {
    sethasError(true)
    setTimeout(() => {
      sethasError(false)
    }, 2000)
  }

  useEffect(() => {
    handleConfirm(value)
  }, [value])

  return (
    <PinCode
      hasError={hasError}
      pinCodeLen={pinCodeLen}
      value={value}
      onSkip={skipPinCode}
      isCompared={Boolean(compareValue)}
      onPressNumber={onPressNumber}
      onPressRemove={onPressRemove}
    />
  )
}
