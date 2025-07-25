import type { InputHTMLAttributes, ChangeEvent } from 'react'
import { cn } from '../../lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  type?: 'text' | 'password'
  disabled?: boolean
  placeholder?: string
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  value,
  type = 'text',
  disabled = false,
  placeholder = '',
  className = '',
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
      className={cn(
        'rounded-md border-2 border-secondary px-2 py-1 text-sm outline-none transition-shadow duration-150 ease-in-out focus:ring-1 focus:ring-secondary/85',
        className,
      )}
    />
  )
}
