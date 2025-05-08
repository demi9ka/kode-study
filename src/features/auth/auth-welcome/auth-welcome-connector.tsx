import { useEffect } from 'react'
import { AuthWelcome } from './auth-welcome'
import { getValue } from '@features/storage'

type AuthWelcomeConnectorProps = {
  goToPhoneNumber: VoidFunction
  goToPassword: (guestToken: string) => void
  goToPinCode: (pinCode: string) => void
}

export const AuthWelcomeConnector = ({
  goToPassword,
  goToPhoneNumber,
  goToPinCode,
}: AuthWelcomeConnectorProps) => {
  useEffect(() => {
    setTimeout(() => {
      const guestToken = getValue('guestToken')
      if (guestToken) {
        const pinCode = getValue('pinCode')
        if (pinCode) {
          goToPinCode(pinCode)
        } else {
          goToPassword(guestToken)
        }
      } else {
        goToPhoneNumber()
      }
    }, 100)
  }, [])

  return <AuthWelcome />
}
