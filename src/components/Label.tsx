import type { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  children: string
}

export default function Label({ htmlFor, children, ...rest }: LabelProps) {
  return (
    <label {...rest} htmlFor={htmlFor} className="text-sm text-secondary">
      {children}
    </label>
  )
}
