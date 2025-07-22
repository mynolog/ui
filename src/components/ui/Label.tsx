import type { LabelHTMLAttributes } from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  label: string
}

export default function Label({ htmlFor, label, ...rest }: LabelProps) {
  return (
    <label {...rest} htmlFor={htmlFor} className="text-sm text-secondary">
      {label}
    </label>
  )
}
