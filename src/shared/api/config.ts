import { Configuration } from './auth-axios-client'

const apiBasePath =
  'https://stoplight.io/mocks/kode-education/kode-bank/27774161'
const apiBasePath2 =
  'https://stoplight.io/mocks/kode-education/kode-bank/27774162'

export const apiCoreConfig = new Configuration({
  basePath: apiBasePath,
  accessToken: 'todo',
})

export const apiAuthConfig = new Configuration({
  basePath: apiBasePath2,
})
