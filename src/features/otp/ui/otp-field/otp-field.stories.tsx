import type { Meta, StoryObj } from '@storybook/react'
import { OtpField } from './otp-field'

const onChange = (value: string) => console.log(value)

const meta: Meta<typeof OtpField> = {
  title: 'features/otp/otp-field',
  component: OtpField,
  args: {
    value: '',
    onChange,
  },
}

export default meta

type OtpFieldStory = StoryObj<typeof OtpField>

export const Default: OtpFieldStory = {}
