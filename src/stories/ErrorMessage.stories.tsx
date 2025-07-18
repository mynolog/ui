import type { Meta, StoryObj } from '@storybook/react-vite'

import ErrorMessage from '../components/ErrorMessage'

const meta = {
  title: 'Text/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '입력값 유효성 검증 시 표시할 에러 메시지',
    },
  },
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '',
  },
}

export const WithErrorMessage: Story = {
  args: {
    children: '값을 입력해 주세요.',
  },
}
