import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export type ApiError = {
  code: string;
  status: number;
};

type TGlobalError = {
  code: string;
  status: number;
};

type TErrorsInterceptorArg = {
  globalErrors: ApiError[];
  skipErrors: ApiError[];
  onGlobalError: (error: TGlobalError) => void;
  onUnhandledError: (e: AxiosError<TGlobalError, any>) => void;
};
export const GLOBAL_ERROR_CODE = 'GLOBAL_ERROR';

export const startGlobalErrorsInterceptor = ({
  globalErrors,
  skipErrors,
  onGlobalError,
  onUnhandledError,
}: TErrorsInterceptorArg) => {
  const getErrorInterceptor = (instance: AxiosInstance) => {
    const onSuccess = (response: AxiosResponse) => {
      return response;
    };
    const onFailure = async (error: AxiosError<TGlobalError>) => {
      const status = error?.response?.status;

      const isGlobalError =
        status &&
        globalErrors.find(
          err =>
            err.status === status && err.code === error?.response?.data.code,
        );

      const isNeedToSkip = Boolean(
        skipErrors.find(
          err =>
            err.status === status && err.code === error?.response?.data.code,
        ),
      );

      if (error.code !== GLOBAL_ERROR_CODE && !isNeedToSkip) {
        if (isGlobalError) {
          onGlobalError({
            code: error.message,
            status,
          });

          return new Promise((_, reject) => {
            error.code = GLOBAL_ERROR_CODE;

            reject(error);
          });
        }
      }

      if (!isGlobalError && !isNeedToSkip) {
        onUnhandledError(error);
      }
      return new Promise((_, reject) => {
        reject(error);
      });
    };

    const interceptor = instance.interceptors.response.use(
      onSuccess,
      onFailure,
    );

    const eject = () => instance.interceptors.response.eject(interceptor);

    return { eject };
  };

  return getErrorInterceptor;
};
