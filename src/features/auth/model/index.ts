import { createDomain, createStore } from 'effector'

const authStateDomain = createDomain('app-state')

export const setAuthState = authStateDomain.createEvent<{
  authState: boolean
}>()

export const $authState = createStore<boolean>(false).on(
  setAuthState,
  (_, { authState }) => {
    return authState
  },
)

export const authStateModel = {
  $authState,
  setAuthState,
}
