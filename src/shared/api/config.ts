import { Configuration } from './auth-axios-client';

const apiBasePath =
  'https://stoplight.io/mocks/kode-education/kode-bank/27774161';

export const apiAuthConfig = new Configuration({
  basePath: apiBasePath,
});

export const apiCoreConfig = new Configuration({
  basePath: apiBasePath,
  accessToken: 'todo',
});
