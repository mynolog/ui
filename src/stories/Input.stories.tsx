import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ChangeEvent } from 'react'

import { useState } from 'react'
import Input from '../components/ui/Input'

const meta = {
  title: 'Text/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password'],
      description: 'Input 타입',
    },
    value: { control: 'text', description: 'Input 입력 값' },
    onChange: {
      control: false,
      description: 'Input 입력 값 변경 이벤트 핸들러',
    },
  },
  args: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e)
    },
    type: 'text',
    value: '',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return <Input value={value} onChange={(e) => setValue(e.target.value)} />
  },
}

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Input
        value={value}
        placeholder="닉네임"
        onChange={(e) => setValue(e.target.value)}
      />
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return <Input value="" disabled onChange={() => {}} />
  },
}
