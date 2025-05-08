import type { Meta, StoryObj } from '@storybook/react'
import { PinCodeField } from './pin-code-field'

const onChange = (value: string) => console.log(value)

const meta: Meta<typeof PinCodeField> = {
  title: 'features/otp/otp-field',
  component: PinCodeField,
  args: {
    value: '',
    onChange,
  },
}

export default meta

type OtpFieldStory = StoryObj<typeof PinCodeField>

export const Default: OtpFieldStory = {}
