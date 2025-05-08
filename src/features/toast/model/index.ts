import { createDomain, sample, createStore } from 'effector'
import { AddTostType, RemoveToastParams, Toast } from '../types'

const toastDomain = createDomain('toast')

export const addToast = toastDomain.createEvent<AddTostType>()
export const removeToast = toastDomain.createEvent<number>()
export const clearToasts = toastDomain.createEvent()

const defaultDuration = 3000

export const $toasts = createStore<Toast[]>([])
  .on(
    addToast,
    (state, { message, variant = 'success', duration = defaultDuration }) => {
      const isDuplicate = state.some(toast => toast.message === message)

      if (isDuplicate) {
        return state
      }

      const newToast: Toast = {
        id: Date.now(),
        message,
        variant,
        duration,
      }
      if (state.length >= 3) {
        return [newToast, ...state.slice(0, -1)]
      }

      return [newToast, ...state]
    },
  )
  .on(removeToast, (state, id) => state.filter(toast => toast.id !== id))
  .reset(clearToasts)

const removeToastWithDelayFx = toastDomain.createEffect(
  (params: RemoveToastParams) =>
    new Promise<number>(resolve => {
      setTimeout(() => resolve(params.id), params.delay)
    }),
)

sample({
  clock: addToast,
  source: $toasts,
  fn: (toasts, toastParams): RemoveToastParams | null => {
    const toast = toasts.find(t => t.message === toastParams.message)
    return toast
      ? { id: toast.id, delay: toastParams.duration || defaultDuration }
      : null
  },
  filter: payload => payload !== null,
  target: removeToastWithDelayFx,
})
sample({
  clock: removeToastWithDelayFx.doneData,
  target: removeToast,
})

export const toastModel = {
  $toasts,
  addToast,
  removeToast,
  clearToasts,
}
