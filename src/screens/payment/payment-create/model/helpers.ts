export const getOnlyDigitsValue = (value: string) => value.replace(/\D/g, '')

export const getOnlyDigitsValueLength = (value: string) =>
  getOnlyDigitsValue(value).length

export const formattedMoneyToString = (
  value: number,
  maximumFractionDigits: number = 0,
) => {
  const moneyValue = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'rub',
    maximumFractionDigits,
  }).format(value)

  return moneyValue
}

export const numberValueFormMoney = (moneyValue: string) => {
  const numericString = getOnlyDigitsValue(moneyValue)
  const numberValue = parseFloat(numericString.length ? numericString : '0')
  return numberValue
}
