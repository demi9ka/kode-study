import type { Meta, StoryObj } from '@storybook/react';
import { OtpField } from './otp-field';

const meta: Meta<typeof OtpField> = {
  title: 'features/otp/otp-field',
  component: OtpField,
  args: {
    value: '',
    onChange: (value: string) => console.log(value),
  },
};

export default meta;

type OtpFieldStory = StoryObj<typeof OtpField>;

export const Default: OtpFieldStory = {};
