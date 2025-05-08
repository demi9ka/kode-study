import { ReactNode, useEffect } from 'react'
import { AxiosInstance } from 'axios'
import { startGlobalErrorsInterceptor } from 'features/error-handling'
import { ApiError } from 'features/error-handling/global-errors-interceptor'
import { startHeadersInterceptor } from '@kode-frontend/session-interceptor'
import { addToast } from '@features/toast'
import { getValue } from '@features/storage'

const showErrorToast = ({ message }: any) => {
  addToast({
    message,
    variant: 'error',
  })
}

const globalErrors: ApiError[] = [
  {
    code: 'ERR_CONFLICT',
    status: 409,
  },
]

const getHeaders = () => {
  const currentAccessToken = getValue('accessToken')
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
        showErrorToast({ message: `Ooops: ${error.code}` })
      },
      onUnhandledError: error => {
        showErrorToast({ message: error.code || 'Ooops, что то не так!' })
      },
    })(axiosInstance)

    return () => {
      eject(), ejectAll()
    }
  }, [startGlobalErrorsInterceptor])
  return <>{children}</>
}
