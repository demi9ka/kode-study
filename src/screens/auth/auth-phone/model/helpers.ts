export const onlyDigitsValue = (value: string) => value.replace(/\D/g, '')

export const onlyDigitsValueLength = (value: string) =>
  onlyDigitsValue(value).length
