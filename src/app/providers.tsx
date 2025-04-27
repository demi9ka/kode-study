import { ThemeProvider } from '@shared/ui/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { apiAxiosInstance } from '@shared/api'
import { GlobalErrorHandlingProvider } from './global-errors-handling-provider'

const queryClient = new QueryClient()

export type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <GlobalErrorHandlingProvider axiosInstance={apiAxiosInstance}>
          <ThemeProvider>{children}</ThemeProvider>
        </GlobalErrorHandlingProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
