import { useEffect, useState } from 'react'
import { ResendButton } from './resend-button'

type Props = {
  onResend: () => Promise<boolean>
  delay: number
}

export const ResendButtonConnector = ({ delay, onResend }: Props) => {
  const [resendIn, setResendIn] = useState(delay)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    startWaitResend()
  }, [])

  const onPress = async () => {
    const res = await onResend()
    if (!res) {
      return
    }
    setCanResend(false)
    setResendIn(delay)
    startWaitResend()
  }
  const startWaitResend = () => {
    const interval = setInterval(() => {
      setResendIn(prev => {
        if (prev == 0) {
          clearInterval(interval)
          setCanResend(true)
          return prev
        } else {
          return prev - 1
        }
      })
    }, 1000)
  }

  const resendButtonText = canResend
    ? 'Повторить'
    : `Повторить\nчерез ${resendIn} сек.`
  return (
    <ResendButton
      text={resendButtonText}
      canResend={canResend}
      onPress={onPress}
    />
  )
}
