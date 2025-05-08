import z from 'zod'

export const getSchema = () => {
  const schema = z
    .object({
      password: z.string(),
    })

    .superRefine((values, ctx) => {
      if (!values.password.length) {
        ctx.addIssue({
          code: 'custom',
          message: 'Поле не может быть пустым',
          path: ['password'],
        })
      }
    })

  return schema
}
