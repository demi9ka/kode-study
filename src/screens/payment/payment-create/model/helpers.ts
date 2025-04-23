export const onlyDigitsValue = (value: string) => value.replace(/\D/g, '')

export const onlyDigitsValueLength = (value: string) => onlyDigitsValue(value).length

export const moneyString = (value: number, maximumFractionDigits: number = 0) => {
  const moneyValue = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'rub',
    maximumFractionDigits,
  }).format(value)

  return moneyValue
}

export const numberValueFormMoney = (moneyValue: string) => {
  const numericString = onlyDigitsValue(moneyValue);
  const numberValue = parseFloat(numericString.length ? numericString : '0');
  return numberValue
}
