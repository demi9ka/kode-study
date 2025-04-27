import { useState } from 'react'
import { Button, SafeAreaView } from 'react-native'
import { Providers } from './providers'
import { Storybook } from '../../.storybook'
import { NavigationConnector } from './navigation'
import { Toasts } from '@features/toast/toast-list'
import { useUnit } from 'effector-react'
import { $toasts, removeToast } from '@features/toast/model'

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
      <Toasts toasts={toasts} removeToasts={removeToast} />
      <NavigationConnector />
    </Providers>
  )
}
