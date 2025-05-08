import { useEffect } from 'react'
import { Welcome } from './welcome'
import { getString } from '@features/storage'

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
    setTimeout(async () => {
      const guestToken = await getString('guestToken')

      goToPhoneNumber()
      //   if (guestToken) {
      //     const pinCode = await getString('pinCode')
      //     if (pinCode) {
      //       goToPinCode(pinCode)
      //     } else {
      //       goToPassword(guestToken)
      //     }
      //   } else {
      //   }
    }, 1000)
  }, [])

  return <Welcome />
}
