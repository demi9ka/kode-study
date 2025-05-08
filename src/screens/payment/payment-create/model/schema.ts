import z from 'zod'
import {
  numberValueFormMoney,
  getOnlyDigitsValue,
  getOnlyDigitsValueLength,
} from './helpers'

export const getSchema = () => {
  const schema = z
    .object({
      moneyOnCard: z.number(),
      phone: z
        .string()
        .refine(
          value =>
            getOnlyDigitsValueLength(value)
              ? getOnlyDigitsValueLength(value) === 11
              : true,
          'Неправильно введен номер телефона',
        ),
      money: z.string(),
    })
    .refine(values => numberValueFormMoney(values.money) < values.moneyOnCard, {
      message: 'Недостаточно средств на счету',
      path: ['money'],
    })
    .superRefine((values, ctx) => {
      const phoneValue = getOnlyDigitsValue(values.phone)
      if (!phoneValue.length) {
        ctx.addIssue({
          code: 'custom',
          message: 'Поля не могут быть пустыми',
          path: ['phone'],
        })
      }
      const moneyValue = numberValueFormMoney(values.money)
      if (moneyValue === 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'Поля не могут быть пустыми',
          path: ['money'],
        })
      }
    })

  return schema
}
