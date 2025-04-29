import { useEffect } from 'react'
import { Welcome } from './welcome'
import { getCredentials } from '@features/storage'

type WelcomeConnectorProps = {
  goToPhoneNumber: VoidFunction
  goToPassword: VoidFunction
}

export const WelcomeConnector = ({
  goToPassword,
  goToPhoneNumber,
}: WelcomeConnectorProps) => {
  useEffect(() => {
    setTimeout(async () => {
      const res = Boolean(await getCredentials('com.app.token'))
      if (res) {
        goToPassword()
      } else {
        goToPhoneNumber()
      }
    }, 1000)
  }, [])

  return <Welcome />
}
