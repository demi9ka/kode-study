import { ThemeProvider } from '@shared/ui/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider } from '@tanstack/react-query'
import { apiAxiosInstance } from '@shared/api'
import { GlobalErrorHandlingProvider } from './global-errors-handling-provider'
import { ToastsListProvider } from '@features/toast'
import { SafeAreaView } from 'react-native'
import { queryClient } from '@shared/api/query-client'

export type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <ToastsListProvider>
              <GlobalErrorHandlingProvider axiosInstance={apiAxiosInstance}>
                {children}
              </GlobalErrorHandlingProvider>
            </ToastsListProvider>
          </SafeAreaView>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
