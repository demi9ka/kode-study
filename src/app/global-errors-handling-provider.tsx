import { ReactNode, useEffect } from 'react'
import { AxiosInstance } from 'axios'
import { startGlobalErrorsInterceptor } from 'features/error-handling'
import { ApiError } from 'features/error-handling/global-errors-interceptor'
import { startHeadersInterceptor } from '@kode-frontend/session-interceptor'

const showErrorToast = ({ message }: any) => {
  console.log('message', message)
}

const globalErrors: ApiError[] = [
  {
    code: 'ERR_CONFLICT',
    status: 409,
  },
]

const getHeaders = () => {
  const currentAccessToken = 'test'

  const headers = []

  if (currentAccessToken) {
    headers.push({
      key: 'Authorization',
      value: `Bearer ${currentAccessToken}`,
    })
  }

  return [
    ...headers,
    // {
    //   key: 'Prefer',
    //   value: 'code=409',
    // },
  ]
}

type Props = {
  axiosInstance: AxiosInstance
  children: ReactNode
}

export const GlobalErrorHandlingProvider = ({
  axiosInstance,
  children,
}: Props) => {
  useEffect(() => {
    const { ejectAll } = startHeadersInterceptor({
      getHeaders,
    })([axiosInstance])

    const { eject } = startGlobalErrorsInterceptor({
      globalErrors: [...globalErrors],
      skipErrors: [
        // {
        //   code: 'ERR_CONFLICT',
        //   status: 409,
        // },
      ],
      onGlobalError: error => {
        console.error('Global error', error)

        showErrorToast({ message: `Ooops: ${error.code}` })
      },
      onUnhandledError: error => {
        showErrorToast({ message: error.code || 'Ooops, что то не так!' })
        console.log('onUnhandledError', error)
      },
    })(axiosInstance)

    return () => {
      eject(), ejectAll()
    }
  }, [startGlobalErrorsInterceptor])
  return <>{children}</>
}
