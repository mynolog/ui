import type { Meta, StoryObj } from '@storybook/react-vite'

import Label from '../../components/ui/Label'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text', description: 'label의 for 속성' },
    label: { control: 'text', description: 'label의 내용' },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    htmlFor: 'nickname',
    label: '닉네임',
  },
}
