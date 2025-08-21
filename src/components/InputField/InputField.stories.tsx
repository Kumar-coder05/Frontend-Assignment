import type { Meta, StoryObj } from '@storybook/react'
import { InputField } from './InputField'

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  args: {
    label: 'Username',
    placeholder: 'Type something...',
    helperText: 'Helper message',
    variant: 'outlined',
    size: 'md',
  },
}
export default meta

type Story = StoryObj<typeof InputField>

export const Default: Story = {}
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••',
  },
}
export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'Invalid email',
    invalid: true,
    errorMessage: 'Invalid email format',
  },
}
