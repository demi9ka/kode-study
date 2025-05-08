import { useState } from 'react'
import { Button, SafeAreaView } from 'react-native'
import { Providers } from './providers'
import { Storybook } from '../../.storybook'
import { NavigationConnector } from './navigation'
import { useUnit } from 'effector-react'
import { $toasts } from '@features/toast/model'
import { ToastsListConnector } from '@features/toast'

export const App = () => {
  const [isStorybookVisible, setIsStorybookVisible] = useState(true)
  const toasts = useUnit($toasts)
  if (isStorybookVisible) {
    return (
      <Providers>
        <Storybook />
        <SafeAreaView>
          <Button
            onPress={() => setIsStorybookVisible(false)}
            title='Перейти к приложению'
          />
        </SafeAreaView>
      </Providers>
    )
  }

  return (
    <Providers>
      <ToastsListConnector />
      <NavigationConnector />
    </Providers>
  )
}
