import type { InputHTMLAttributes, ChangeEvent } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  type?: 'text' | 'password'
  disabled?: boolean
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  value,
  type = 'text',
  disabled = false,
  placeholder = '',
  onChange,
  ...rest
}: InputProps) {
  return (
    <input
      {...rest}
      value={value}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      className="rounded-md border-2 border-secondary px-2 py-1 text-sm outline-none transition-shadow duration-150 ease-in-out focus:ring-2 focus:ring-secondary/50"
    />
  )
}
