import axios from 'axios';

import { DefaultApi as AuthApi } from './auth-axios-client';
import { DefaultApi as CoreApi } from './core-axios-client';
import { PaymentApi } from './core-axios-client';
import { apiAuthConfig, apiCoreConfig } from './config';

export const apiAxiosInstance = axios.create();

export const authApi = new AuthApi(apiAuthConfig, undefined, apiAxiosInstance);
export const coreApi = new CoreApi(apiCoreConfig, undefined, apiAxiosInstance);
export const paymentApi = new PaymentApi(
  apiCoreConfig,
  undefined,
  apiAxiosInstance,
);
