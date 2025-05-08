import z from 'zod'
import { onlyDigitsValue, onlyDigitsValueLength } from './helpers'

export const getSchema = () => {
  const schema = z
    .object({
      phone: z
        .string()
        .refine(
          value =>
            onlyDigitsValueLength(value)
              ? onlyDigitsValueLength(value) === 11
              : true,
          'Неправильно введен номер телефона',
        ),
    })

    .superRefine((values, ctx) => {
      const phoneValue = onlyDigitsValue(values.phone)
      if (!phoneValue.length) {
        ctx.addIssue({
          code: 'custom',
          message:
            'Пожалуйста, убедитесь, что вы правильно ввели номер телефона',
          path: ['phone'],
        })
      }
    })

  return schema
}
