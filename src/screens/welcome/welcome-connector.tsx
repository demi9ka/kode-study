import { useEffect } from 'react'
import { Welcome } from './welcome'
import { getString, getValue } from '@features/storage'

type WelcomeConnectorProps = {
  goToPhoneNumber: VoidFunction
  goToPassword: (guestToken: string) => void
  goToPinCode: (pinCode: string) => void
}

export const WelcomeConnector = ({
  goToPassword,
  goToPhoneNumber,
  goToPinCode,
}: WelcomeConnectorProps) => {
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

  return <Welcome />
}
